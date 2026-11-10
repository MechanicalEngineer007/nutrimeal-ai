/**
 * Machine Learning Engine for NutriMeal AI
 * Implements an Online Supervised Learning & Contextual Multi-Armed Bandit Model
 * to predict meal adherence, learn user taste preferences, and adapt recommendations.
 */

class NutriMealMLEngine {
  constructor() {
    this.STORAGE_KEY = "nutrimeal_ml_state";
    this.LOGS_KEY = "nutrimeal_eating_logs";

    // Feature weights vector:
    // [bias, prepTime, caloriesBudgetDiff, proteinRatio, carbRatio, seasonMatch, weatherMatch, regionMatch, dishPopularity]
    this.defaultWeights = {
      bias: 0.5,
      prepTime: -0.15,          // users generally prefer quicker prep
      calorieBudgetFit: 0.8,     // how well dish matches meal calorie target
      proteinDensity: 0.6,       // higher protein density preferred for satiety
      seasonMatch: 0.75,         // seasonal suitability
      weatherMatch: 0.85,        // weather suitability (e.g. warm soups in winter)
      regionMatch: 0.90,         // local regional availability
      historicalAffinity: 1.2    // user's past eating history with this ingredient/dish
    };

    this.learningRate = 0.05;
    this.state = this.loadState();
  }

  loadState() {
    try {
      if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      }
    } catch (e) {
      console.warn("Could not load ML state from storage", e);
    }
    return {
      weights: { ...this.defaultWeights },
      dishHistory: {}, // dishId -> { eatenCount: 0, skippedCount: 0, partialCount: 0 }
      ingredientAffinity: {}, // ingredient -> score
      totalLogs: 0
    };
  }

  saveState() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
      }
    } catch (e) {
      console.warn("Could not save ML state to storage", e);
    }
  }

  /**
   * Sigmoid activation function
   */
  sigmoid(z) {
    return 1 / (1 + Math.exp(-Math.max(-10, Math.min(10, z))));
  }

  /**
   * Extract normalized features for a candidate dish in current context
   */
  extractFeatures(dish, context) {
    const { mealBudgetCal = 500, season = "winter", weather = "cold", region = "south_asia" } = context;

    // Feature 1: Normalized prep time (0 = instant, 1 = 30+ mins)
    const prepMinutes = parseInt(dish.prepTime, 10) || 10;
    const normPrep = Math.min(1, prepMinutes / 30);

    // Feature 2: Calorie fit score (1 = exact match, decreases with delta)
    const calDiff = Math.abs((dish.calories || 400) - mealBudgetCal);
    const calFit = Math.max(0, 1 - (calDiff / mealBudgetCal));

    // Feature 3: Protein density (protein grams / 50g max)
    const proteinDensity = Math.min(1, (dish.protein || 10) / 45);

    // Feature 4: Season match (1 if dish season matches or versatile, 0.3 otherwise)
    const dishSeasons = dish.seasons || ["winter", "summer", "monsoon", "spring", "autumn"];
    const seasonMatch = dishSeasons.includes(season) ? 1.0 : 0.3;

    // Feature 5: Weather match (e.g. warm/hot dish in cold weather, cool/hydrating in hot)
    const dishWeather = dish.weather || ["cold", "hot", "rainy", "moderate"];
    const weatherMatch = dishWeather.includes(weather) ? 1.0 : 0.35;

    // Feature 6: Regional availability match
    const dishRegions = dish.regions || ["south_asia", "north_america", "mediterranean", "east_asia", "latin_america"];
    const regionMatch = dishRegions.includes(region) ? 1.0 : 0.4;

    // Feature 7: Historical user affinity score for this dish and its ingredients
    let affinity = 0.5; // neutral baseline
    if (this.state.dishHistory[dish.id]) {
      const h = this.state.dishHistory[dish.id];
      const total = h.eatenCount + h.skippedCount + h.partialCount;
      if (total > 0) {
        affinity = (h.eatenCount * 1.0 + h.partialCount * 0.5) / total;
      }
    }

    return {
      normPrep,
      calFit,
      proteinDensity,
      seasonMatch,
      weatherMatch,
      regionMatch,
      affinity
    };
  }

  /**
   * Predict the user adherence probability (0.0 to 1.0) for a dish
   */
  predictAdherence(dish, context) {
    const f = this.extractFeatures(dish, context);
    const w = this.state.weights;

    // Linear combination (dot product)
    let score = w.bias 
      + w.prepTime * f.normPrep
      + w.calorieBudgetFit * f.calFit
      + w.proteinDensity * f.proteinDensity
      + w.seasonMatch * f.seasonMatch
      + w.weatherMatch * f.weatherMatch
      + w.regionMatch * f.regionMatch
      + w.historicalAffinity * f.affinity;

    const probability = this.sigmoid(score);

    // Generate natural language explanation for Explainable AI (XAI)
    const reasons = [];
    if (f.weatherMatch > 0.8) {
      reasons.push(context.weather === "cold" ? "Warming comfort recipe suited for cold weather" : (context.weather === "hot" ? "Hydrating & light for hot weather" : "Immunity-boosting for rainy weather"));
    }
    if (f.regionMatch > 0.8) {
      reasons.push("Uses locally abundant seasonal produce");
    }
    if (f.affinity > 0.65) {
      reasons.push("High personal eating adherence");
    }
    if (f.calFit > 0.85) {
      reasons.push("Matches calorie & macro targets perfectly");
    }

    return {
      probability: parseFloat(probability.toFixed(2)),
      matchPercentage: Math.round(probability * 100),
      explanation: reasons.length > 0 ? reasons.slice(0, 2).join(" • ") : "Nutritionally balanced for today's targets"
    };
  }

  /**
   * Online Stochastic Gradient Descent (SGD) Update:
   * Called whenever user logs an eating outcome (1 = full eaten, 0.5 = partial, 0 = skipped)
   */
  learnFromMealOutcome(dish, context, outcome) {
    // outcome: 1.0 (Eaten), 0.5 (Partially Eaten), 0.0 (Skipped)
    const f = this.extractFeatures(dish, context);
    const prediction = this.predictAdherence(dish, context).probability;
    const error = outcome - prediction; // error = y - y_hat

    // Gradient step for each weight
    this.state.weights.bias += this.learningRate * error;
    this.state.weights.prepTime += this.learningRate * error * f.normPrep;
    this.state.weights.calorieBudgetFit += this.learningRate * error * f.calFit;
    this.state.weights.proteinDensity += this.learningRate * error * f.proteinDensity;
    this.state.weights.seasonMatch += this.learningRate * error * f.seasonMatch;
    this.state.weights.weatherMatch += this.learningRate * error * f.weatherMatch;
    this.state.weights.regionMatch += this.learningRate * error * f.regionMatch;
    this.state.weights.historicalAffinity += this.learningRate * error * f.affinity;

    // Update dish specific history
    if (!this.state.dishHistory[dish.id]) {
      this.state.dishHistory[dish.id] = { eatenCount: 0, partialCount: 0, skippedCount: 0 };
    }
    if (outcome >= 0.9) {
      this.state.dishHistory[dish.id].eatenCount += 1;
    } else if (outcome >= 0.4) {
      this.state.dishHistory[dish.id].partialCount += 1;
    } else {
      this.state.dishHistory[dish.id].skippedCount += 1;
    }

    this.state.totalLogs += 1;
    this.saveState();

    return {
      updatedWeights: this.state.weights,
      totalLogs: this.state.totalLogs,
      predictionError: parseFloat(error.toFixed(3))
    };
  }

  /**
   * Alias for training: accepts boolean (true/false) or numeric ratio (0.0, 0.5, 1.0)
   */
  train(dish, context, outcome) {
    let numericOutcome = outcome;
    if (typeof outcome === "boolean") {
      numericOutcome = outcome ? 1.0 : 0.0;
    }
    return this.learnFromMealOutcome(dish, context, numericOutcome);
  }

  /**
   * Rank dishes using predicted adherence
   */
  rankDishes(candidates, context) {
    return candidates.map(dish => {
      const mlInfo = this.predictAdherence(dish, context);
      return {
        dish,
        mlScore: mlInfo.probability,
        matchPercentage: mlInfo.matchPercentage,
        explanation: mlInfo.explanation
      };
    }).sort((a, b) => b.mlScore - a.mlScore);
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { NutriMealMLEngine };
}
