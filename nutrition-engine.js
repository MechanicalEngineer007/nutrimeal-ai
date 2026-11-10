/**
 * Clinical Nutrition Engine with Month-Wise Date Planning, Pediatric Schofield Equations,
 * CDC/WHO Percentiles, Acute Illness Adaptation (Fever/Cold/Viral/Lite),
 * Intermittent Fasting (16:8, 14:10, Upvas), Dedicated Fruits & Snacks,
 * and Major Cultural Festival Celebrations (Ganeshotsav, Diwali, Holi, Navratri).
 */

class NutritionEngine {
  constructor() {
    this.DEFAULT_NON_VEG_DAYS = [0, 3, 5]; // Sunday=0, Wednesday=3, Friday=5
    this.DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.MONTH_NAMES = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Built-in Indian & Global Cultural Festival Calendar (Month is 0-indexed)
    this.FESTIVALS = [
      { id: "makar_sankranti", name: "Makar Sankranti / Pongal", month: 0, dayRange: [14, 15], icon: "🪁", mustBePureVeg: true, specialDishId: "snack_roasted_makhana" },
      { id: "maha_shivratri", name: "Maha Shivratri Fast", month: 1, dayRange: [25, 27], icon: "🔱", mustBePureVeg: true, isFasting: true, specialDishId: "fest_farali_sama_pulao" },
      { id: "holi", name: "Holi (Festival of Colors)", month: 2, dayRange: [3, 5], icon: "🎨", mustBePureVeg: false, specialDishId: "fest_almond_saffron_thandai" },
      { id: "chaitra_navratri", name: "Chaitra Navratri Fast", month: 2, dayRange: [20, 28], icon: "🌸", mustBePureVeg: true, isFasting: true, specialDishId: "fest_rajgira_sweetpotato_thalipeeth" },
      { id: "eid_ul_fitr", name: "Eid-ul-Fitr Celebration", month: 3, dayRange: [10, 12], icon: "🌙", mustBePureVeg: false, specialDishId: "recov_ginger_chicken_broth" },
      { id: "ganeshotsav", name: "Ganeshotsav (Ganesh Chaturthi)", month: 8, dayRange: [14, 24], icon: "🕉️", mustBePureVeg: true, specialDishId: "fest_ukdiche_modak" },
      { id: "sharad_navratri", name: "Sharad Navratri (Durga Puja)", month: 9, dayRange: [11, 20], icon: "🔱", mustBePureVeg: true, isFasting: true, specialDishId: "fest_farali_sama_pulao" },
      { id: "diwali", name: "Diwali (Festival of Lights)", month: 10, dayRange: [7, 12], icon: "🪔", mustBePureVeg: true, specialDishId: "fest_dryfruit_gujiya" },
      { id: "christmas", name: "Christmas & Holiday Feast", month: 11, dayRange: [24, 26], icon: "🎄", mustBePureVeg: false, specialDishId: "fruit_steamed_cinnamon_apple" }
    ];
  }

  /**
   * Determine season from calendar month and local weather
   */
  getSeasonFromMonth(month, weather = "cold") {
    if (weather === "rainy") return "monsoon";
    if (weather === "hot") return "summer";
    if (weather === "cold") return "winter";

    if (month >= 11 || month <= 2) return "winter";
    if (month >= 3 && month <= 5) return "summer";
    if (month >= 6 && month <= 9) return "monsoon";
    return "spring";
  }

  /**
   * Check if a specific date has an associated major festival
   */
  getFestivalForDate(year, month, day) {
    return this.FESTIVALS.find(f => {
      if (f.month !== month) return false;
      return day >= f.dayRange[0] && day <= f.dayRange[1];
    }) || null;
  }

  /**
   * WHO / Schofield pediatric BMR equations for ages 1-17
   * Mifflin-St Jeor for adults ages 18-90
   */
  calculateBMR(gender, weightKg, heightCm, ageYears) {
    if (ageYears < 3) {
      if (gender === "male") {
        return Math.round(59.512 * weightKg - 30.4);
      } else {
        return Math.round(58.317 * weightKg - 31.1);
      }
    } else if (ageYears < 10) {
      if (gender === "male") {
        return Math.round(22.706 * weightKg + 504.3);
      } else {
        return Math.round(20.315 * weightKg + 485.9);
      }
    } else if (ageYears < 18) {
      if (gender === "male") {
        return Math.round(17.686 * weightKg + 658.2);
      } else {
        return Math.round(13.384 * weightKg + 692.6);
      }
    }

    // Adult Mifflin-St Jeor (18 - 90 yrs)
    if (gender === "male") {
      return Math.round(10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5);
    } else {
      return Math.round(10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161);
    }
  }

  /**
   * CDC / WHO Pediatric BMI percentiles for ages 1 - 17
   */
  calculateBMI(weightKg, heightCm, ageYears = 30) {
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    if (ageYears < 18) {
      let category = "Healthy Weight";
      let color = "#10b981";
      let percentile = "50th percentile";

      if (ageYears <= 2) {
        if (bmi < 13.5) { category = "Underweight"; color = "#3b82f6"; percentile = "<5th percentile"; }
        else if (bmi <= 18.5) { category = "Healthy Toddler Growth"; color = "#10b981"; percentile = "50th percentile"; }
        else if (bmi <= 19.8) { category = "Risk of Overweight"; color = "#f59e0b"; percentile = "85th percentile"; }
        else { category = "Overweight"; color = "#ef4444"; percentile = ">95th percentile"; }
      } else if (ageYears <= 5) {
        if (bmi < 13.0) { category = "Underweight"; color = "#3b82f6"; percentile = "<5th percentile"; }
        else if (bmi <= 17.0) { category = "Healthy Child Growth"; color = "#10b981"; percentile = "50th percentile"; }
        else if (bmi <= 18.2) { category = "Risk of Overweight"; color = "#f59e0b"; percentile = "85th percentile"; }
        else { category = "Overweight"; color = "#ef4444"; percentile = ">95th percentile"; }
      } else if (ageYears <= 10) {
        if (bmi < 13.5) { category = "Underweight"; color = "#3b82f6"; percentile = "<5th percentile"; }
        else if (bmi <= 18.0) { category = "Healthy Weight"; color = "#10b981"; percentile = "50th percentile"; }
        else if (bmi <= 20.0) { category = "Overweight"; color = "#f59e0b"; percentile = "85th percentile"; }
        else { category = "Obese"; color = "#ef4444"; percentile = ">95th percentile"; }
      } else if (ageYears <= 14) {
        if (bmi < 14.5) { category = "Underweight"; color = "#3b82f6"; percentile = "<5th percentile"; }
        else if (bmi <= 21.5) { category = "Healthy Weight"; color = "#10b981"; percentile = "50th percentile"; }
        else if (bmi <= 24.5) { category = "Overweight"; color = "#f59e0b"; percentile = "85th percentile"; }
        else { category = "Obese"; color = "#ef4444"; percentile = ">95th percentile"; }
      } else {
        if (bmi < 16.5) { category = "Underweight"; color = "#3b82f6"; percentile = "<5th percentile"; }
        else if (bmi <= 24.5) { category = "Healthy Teen Weight"; color = "#10b981"; percentile = "50th percentile"; }
        else if (bmi <= 28.0) { category = "Overweight"; color = "#f59e0b"; percentile = "85th percentile"; }
        else { category = "Obese"; color = "#ef4444"; percentile = ">95th percentile"; }
      }

      return {
        bmi: parseFloat(bmi.toFixed(1)),
        category,
        color,
        percentile,
        isPediatric: true,
        notes: `Pediatric growth percentile evaluated via CDC/WHO standards for age ${ageYears}`
      };
    }

    // Adult BMI (18 - 90)
    let category = "Healthy Weight";
    let color = "#10b981";
    if (bmi < 18.5) { category = "Underweight"; color = "#3b82f6"; }
    else if (bmi < 25.0) { category = "Healthy Weight"; color = "#10b981"; }
    else if (bmi < 30.0) { category = "Overweight"; color = "#f59e0b"; }
    else { category = "Obese"; color = "#ef4444"; }

    return {
      bmi: parseFloat(bmi.toFixed(1)),
      category,
      color,
      isPediatric: false
    };
  }

  /**
   * Calculate Target Calories and Macronutrients with acute illness & fasting modifiers
   */
  calculateTargets(profile) {
    const {
      gender = "male",
      age = 35,
      weight = 70,
      height = 172,
      activityLevel = "moderate",
      goal = "maintain",
      conditions = [],
      weather = "cold",
      healthStatus = "healthy", // "healthy", "fever", "cold", "viral", "lite"
      fastingMode = "none"      // "none", "16_8", "14_10", "upvas"
    } = profile;

    const bmr = this.calculateBMR(gender, weight, height, age);
    const bmiInfo = this.calculateBMI(weight, height, age);

    let activityMultiplier = 1.45;
    switch (activityLevel) {
      case "sedentary": activityMultiplier = 1.25; break;
      case "light": activityMultiplier = 1.375; break;
      case "moderate": activityMultiplier = 1.50; break;
      case "very_active": activityMultiplier = 1.725; break;
      case "extra_active": activityMultiplier = 1.90; break;
    }

    let tdee = bmr * activityMultiplier;

    // Pediatric growth energy buffer
    if (age <= 2) {
      tdee = Math.max(900, weight * 95);
    } else if (age <= 5) {
      tdee = Math.max(1200, weight * 85);
    } else if (age <= 12) {
      tdee = Math.max(1400, tdee);
    }

    // Climate adaptation (+5% thermogenic energy in severe cold)
    if (weather === "cold") {
      tdee += (age < 18 ? 50 : 100);
    }

    let targetCalories = Math.round(tdee);

    // Goal adjustments (adults only)
    if (age >= 18) {
      if (goal === "weight_loss") {
        targetCalories = Math.max(1300, Math.round(tdee - 450));
      } else if (goal === "muscle_gain") {
        targetCalories = Math.round(tdee + 350);
      }
    }

    // ACUTE ILLNESS & LITE EATING MODIFIERS
    if (healthStatus === "fever") {
      // Lighten digestive workload by 10%
      targetCalories = Math.round(targetCalories * 0.90);
    } else if (healthStatus === "viral") {
      targetCalories = Math.round(targetCalories * 0.92);
    } else if (healthStatus === "cold") {
      targetCalories = Math.round(targetCalories * 0.95);
    } else if (healthStatus === "lite") {
      // Lite eating / gut rest mode
      targetCalories = Math.round(targetCalories * 0.85);
    }

    // Protein requirements
    let proteinPerKg = 1.2;
    if (age <= 3) proteinPerKg = 1.1;
    else if (age <= 13) proteinPerKg = 1.0;
    else if (age <= 18) proteinPerKg = 1.3;
    else if (age >= 60) proteinPerKg = 1.3;
    if (goal === "muscle_gain") proteinPerKg = 1.6;

    let proteinGrams = Math.round(weight * proteinPerKg);
    const hasDiabetes = conditions.includes("diabetes");
    const hasHypertension = conditions.includes("hypertension");

    // Pediatric safe fiber formula (Age + 5g), up to adult 35g
    let fiberTarget = age < 18 ? Math.max(6, age + 5) : 32;
    let sodiumCap = 2000;
    let calciumTarget = age < 18 ? (age <= 3 ? 650 : (age <= 8 ? 800 : 1300)) : 1000;
    let ironTarget = age < 18 ? (age <= 3 ? 7 : (age <= 13 ? 10 : 15)) : (gender === "female" ? 18 : 10);

    let carbGrams, fatGrams;
    if (hasDiabetes) {
      const carbRatio = age < 18 ? 0.45 : 0.40;
      const carbCalories = targetCalories * carbRatio;
      carbGrams = Math.round(carbCalories / 4);

      const proteinCal = proteinGrams * 4;
      const remainingCalories = targetCalories - (carbCalories + proteinCal);
      fatGrams = Math.round(Math.max(25, remainingCalories / 9));

      if (age >= 18) fiberTarget = Math.max(fiberTarget, 35);
    } else {
      const proteinCalories = proteinGrams * 4;
      const fatCalories = targetCalories * 0.28;
      fatGrams = Math.round(fatCalories / 9);

      const carbCalories = targetCalories - proteinCalories - (fatGrams * 9);
      carbGrams = Math.round(carbCalories / 4);
    }

    if (hasHypertension) {
      sodiumCap = Math.min(sodiumCap, 1500);
    }

    // Acute illness immune boosters
    let vitCTarget = age < 9 ? 45 : 75;
    let zincTarget = age < 9 ? 5 : (gender === "male" ? 11 : 8);

    if (healthStatus === "fever" || healthStatus === "viral") {
      vitCTarget = Math.max(vitCTarget, 120);
      zincTarget = Math.max(zincTarget, 15);
    } else if (healthStatus === "cold") {
      vitCTarget = Math.max(vitCTarget, 100);
      zincTarget = Math.max(zincTarget, 12);
    }

    const rda = {
      fiber: fiberTarget,
      sodium: sodiumCap,
      vitaminC: vitCTarget,
      vitaminD: 15,
      vitaminB12: age < 9 ? 1.5 : 2.4,
      iron: ironTarget,
      calcium: calciumTarget,
      zinc: zincTarget
    };

    return {
      bmr,
      targetCalories,
      bmiInfo,
      macros: {
        calories: targetCalories,
        carbs: carbGrams,
        protein: proteinGrams,
        fat: fatGrams
      },
      rda,
      conditions,
      healthStatus,
      fastingMode
    };
  }

  /**
   * Proportional scaling of dish portion weight and calories
   */
  scaleDishToAgeAndBudget(dish, targetBudget, age, portionScaleFactor = 1.0) {
    if (!dish) return dish;

    const baseCal = dish.calories || 350;
    let factor = targetBudget.cal / baseCal;
    factor = factor * portionScaleFactor;
    factor = Math.max(0.35, Math.min(2.5, factor));

    const scaledGrams = Math.round(dish.weightGrams * factor);
    const scaledCal = Math.round(dish.calories * factor);
    const scaledCarb = Math.round(dish.carbs * factor);
    const scaledPro = Math.round(dish.protein * factor);
    const scaledFat = Math.round(dish.fat * factor);
    const scaledFiber = Math.round((dish.fiber || 5) * factor);

    const scaledIngredients = (dish.ingredients || []).map(ing => {
      const numMatch = ing.qty.match(/(\d+(\.\d+)?)/);
      if (numMatch && ing.qty.includes("g")) {
        const num = parseFloat(numMatch[1]);
        const newQty = Math.max(5, Math.round(num * factor)) + "g";
        return { item: ing.item, qty: newQty };
      }
      return { item: ing.item, qty: ing.qty };
    });

    let ageLabel = "";
    if (age <= 3) ageLabel = " (Toddler - Soft/Mashed)";
    else if (age <= 8) ageLabel = " (Child - Mild Spices)";
    else if (age <= 13) ageLabel = " (Junior - Calcium Dense)";
    else if (age <= 18) ageLabel = " (Teen Growth Spurt)";

    return {
      ...dish,
      weightGrams: scaledGrams,
      calories: scaledCal,
      carbs: scaledCarb,
      protein: scaledPro,
      fat: scaledFat,
      fiber: scaledFiber,
      servingSize: `${scaledGrams}g${ageLabel}`,
      ingredients: scaledIngredients,
      isPediatricScaled: age < 18,
      pediatricFactor: parseFloat(factor.toFixed(2))
    };
  }

  /**
   * Filter dishes by allergens, health conditions, acute illness, age, nationality, fasting
   */
  filterDishes(dishes, profile, isNonVegAllowed, context = {}) {
    const userAllergies = profile.allergies || [];
    const userAge = profile.age || 35;
    const userConditions = profile.conditions || [];
    const userNationality = profile.nationality || "indian";
    const healthStatus = profile.healthStatus || "healthy";
    const fastingMode = profile.fastingMode || "none";
    const { season = "winter", weather = "cold", isFasting = false, isFestival = false } = context;

    const baseCandidates = dishes.filter(dish => {
      // Pure veg enforcement
      if ((!isNonVegAllowed || isFasting) && !dish.isVeg) {
        return false;
      }

      // Religious Upvas / Fasting filter: only fasting-compliant items
      if (fastingMode === "upvas" || isFasting) {
        if (!dish.isFastingAllowed) return false;
      }

      // Age filter
      if (dish.ageRange) {
        if (userAge < dish.ageRange[0] || userAge > dish.ageRange[1]) {
          if (userAge === 1 && dish.texture === "soft") {
            // soft textures allowed for age 1
          } else {
            return false;
          }
        }
      }

      // Allergen filter
      if (dish.allergens && dish.allergens.length > 0) {
        const hasAllergen = dish.allergens.some(a => userAllergies.includes(a));
        if (hasAllergen) return false;
      }

      // Diabetes filter
      if (userConditions.includes("diabetes") && dish.sugar > 8 && !isFestival) {
        return false;
      }

      // Acute illness filter: exclude fried or heavy foods if fever/cold/viral
      if ((healthStatus === "fever" || healthStatus === "viral" || healthStatus === "cold") && dish.fat > 18) {
        return false;
      }

      return true;
    });

    let filtered = baseCandidates;

    // Acute illness prioritization
    if (healthStatus === "fever" || healthStatus === "cold" || healthStatus === "viral" || healthStatus === "lite") {
      const illnessMatches = baseCandidates.filter(d => d.illnessSuitable && d.illnessSuitable.includes(healthStatus));
      if (illnessMatches.length >= 2) {
        filtered = illnessMatches;
      }
    } else if (userNationality && userNationality !== "all") {
      const cuisineCandidates = baseCandidates.filter(d => d.cuisine === userNationality);
      if (cuisineCandidates.length >= 2) {
        filtered = cuisineCandidates;
      }
    }

    return filtered.length > 0 ? filtered : baseCandidates;
  }

  /**
   * Pick best dish from candidates using contextual ML or seasonal offset
   */
  pickBestDish(dishList, budget, isNonVegDay, dayOffset, offset, context, mlEngine) {
    if (!dishList || dishList.length === 0) return null;

    let candidates = dishList;
    if (isNonVegDay && Math.random() > 0.25) {
      const nonVegOnly = dishList.filter(d => !d.isVeg);
      if (nonVegOnly.length > 0) {
        candidates = nonVegOnly;
      }
    }

    if (mlEngine && typeof mlEngine.rankDishes === "function") {
      const ranked = mlEngine.rankDishes(candidates, context);
      const chosen = ranked[(dayOffset + offset) % Math.min(3, ranked.length)];
      return {
        ...chosen.dish,
        mlMatchPercentage: chosen.matchPercentage,
        mlExplanation: chosen.explanation
      };
    }

    const index = (dayOffset + offset) % candidates.length;
    return candidates[index];
  }

  /**
   * Compute meal budget distribution across 5 slots based on Intermittent Fasting (IF)
   */
  getMealBudgetDistribution(fastingMode, targetCalories, macros, portionScale = 1.0) {
    if (fastingMode === "16_8") {
      // 16:8 Window: Fasting from 8 PM to 12 PM. Break-fast at 12:00 PM
      return {
        breakfast: { cal: 0, carb: 0, pro: 0, isFastingSlot: true, title: "Hydration Window", time: "8:00 AM (Water/Herbal Tea)" },
        lunch:     { cal: targetCalories * 0.40 * portionScale, carb: macros.carbs * 0.40 * portionScale, pro: macros.protein * 0.40 * portionScale },
        fruit:     { cal: targetCalories * 0.15 * portionScale, carb: macros.carbs * 0.15 * portionScale, pro: macros.protein * 0.15 * portionScale },
        snack:     { cal: targetCalories * 0.15 * portionScale, carb: macros.carbs * 0.15 * portionScale, pro: macros.protein * 0.15 * portionScale },
        dinner:    { cal: targetCalories * 0.30 * portionScale, carb: macros.carbs * 0.30 * portionScale, pro: macros.protein * 0.30 * portionScale }
      };
    } else if (fastingMode === "14_10") {
      // 14:10 Window: 10:00 AM to 8:00 PM
      return {
        breakfast: { cal: targetCalories * 0.24 * portionScale, carb: macros.carbs * 0.24 * portionScale, pro: macros.protein * 0.24 * portionScale },
        lunch:     { cal: targetCalories * 0.34 * portionScale, carb: macros.carbs * 0.34 * portionScale, pro: macros.protein * 0.34 * portionScale },
        fruit:     { cal: targetCalories * 0.12 * portionScale, carb: macros.carbs * 0.12 * portionScale, pro: macros.protein * 0.12 * portionScale },
        snack:     { cal: targetCalories * 0.10 * portionScale, carb: macros.carbs * 0.10 * portionScale, pro: macros.protein * 0.10 * portionScale },
        dinner:    { cal: targetCalories * 0.20 * portionScale, carb: macros.carbs * 0.20 * portionScale, pro: macros.protein * 0.20 * portionScale }
      };
    }

    // Standard 5-Slot Meal Schedule (Breakfast, Fruit Bowl, Lunch, Evening Snack, Dinner)
    return {
      breakfast: { cal: targetCalories * 0.22 * portionScale, carb: macros.carbs * 0.22 * portionScale, pro: macros.protein * 0.22 * portionScale },
      fruit:     { cal: targetCalories * 0.12 * portionScale, carb: macros.carbs * 0.12 * portionScale, pro: macros.protein * 0.12 * portionScale },
      lunch:     { cal: targetCalories * 0.34 * portionScale, carb: macros.carbs * 0.34 * portionScale, pro: macros.protein * 0.34 * portionScale },
      snack:     { cal: targetCalories * 0.12 * portionScale, carb: macros.carbs * 0.12 * portionScale, pro: macros.protein * 0.12 * portionScale },
      dinner:    { cal: targetCalories * 0.20 * portionScale, carb: macros.carbs * 0.20 * portionScale, pro: macros.protein * 0.20 * portionScale }
    };
  }

  /**
   * Generate Full Month Personalized Plan with exact calendar dates
   */
  generateMonthlyPlan(profile, year, month, database, mlEngine = null, compensationEngine = null) {
    const targets = this.calculateTargets(profile);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weather = profile.weather || "cold";
    const earthRegion = profile.earthRegion || "south_asia";
    const season = this.getSeasonFromMonth(month + 1, weather);
    const age = profile.age || 35;
    const fastingMode = profile.fastingMode || "none";
    const healthStatus = profile.healthStatus || "healthy";

    let compensationInfo = null;
    if (compensationEngine && typeof compensationEngine.getCompensatoryAdjustment === "function") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayKey = yesterday.toISOString().split("T")[0];
      compensationInfo = compensationEngine.getCompensatoryAdjustment(yesterdayKey, targets.macros, profile.conditions);
    }

    const portionScale = (compensationInfo && compensationInfo.hasCompensation)
      ? compensationInfo.boostFactors.portionScale
      : 1.0;

    const mealBudget = this.getMealBudgetDistribution(fastingMode, targets.targetCalories, targets.macros, portionScale);

    const monthlyPlan = [];

    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const dateObj = new Date(year, month, dayNum);
      const dayOfWeek = dateObj.getDay();
      const dayName = this.DAY_NAMES[dayOfWeek];
      const dayShort = this.DAY_SHORT[dayOfWeek];
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;

      // Check cultural festival for this date
      const festival = this.getFestivalForDate(year, month, dayNum);
      const isFestival = !!festival;

      // Non-veg is permitted strictly on Sunday(0), Wednesday(3), and Friday(5)
      // EXCEPT when festival/fasting (Ganeshotsav, Navratri, Upvas) or acute illness enforces pure veg
      let isNonVegDay = this.DEFAULT_NON_VEG_DAYS.includes(dayOfWeek);
      if (festival && festival.mustBePureVeg) isNonVegDay = false;
      if (fastingMode === "upvas") isNonVegDay = false;
      if (healthStatus === "fever" || healthStatus === "lite") isNonVegDay = false;

      const context = {
        year,
        month: month + 1,
        monthName: this.MONTH_NAMES[month],
        dayNum,
        dayOfWeek,
        dateStr,
        weather,
        earthRegion,
        season,
        age,
        festival,
        isFestival,
        isFasting: fastingMode === "upvas" || (festival && festival.isFasting),
        healthStatus,
        fastingMode
      };

      const availableDishes = this.filterDishes(database, profile, isNonVegDay, context);

      const breakfasts = availableDishes.filter(d => d.category === "breakfast");
      const fruits = availableDishes.filter(d => d.category === "fruit");
      const lunches = availableDishes.filter(d => d.category === "lunch");
      const snacks = availableDishes.filter(d => d.category === "snack");
      const dinners = availableDishes.filter(d => d.category === "dinner");

      // Check if festival special dish exists
      let festDish = null;
      if (festival && festival.specialDishId) {
        festDish = database.find(d => d.id === festival.specialDishId);
      }

      // Pick dishes
      let bDish = this.pickBestDish(breakfasts, mealBudget.breakfast, isNonVegDay, dayNum, 0, context, mlEngine);
      let fDish = this.pickBestDish(fruits, mealBudget.fruit, false, dayNum, 1, context, mlEngine);
      let lDish = this.pickBestDish(lunches, mealBudget.lunch, isNonVegDay, dayNum, 2, context, mlEngine);
      let sDish = this.pickBestDish(snacks, mealBudget.snack, false, dayNum, 3, context, mlEngine);
      let dDish = this.pickBestDish(dinners, mealBudget.dinner, isNonVegDay, dayNum, 4, context, mlEngine);

      // Inject festival specials if applicable
      if (festDish) {
        if (festDish.category === "snack") sDish = festDish;
        else if (festDish.category === "lunch") lDish = festDish;
        else if (festDish.category === "breakfast") bDish = festDish;
        else if (festDish.category === "dinner") dDish = festDish;
      }

      // Fasting window for 16:8 IF
      if (fastingMode === "16_8") {
        bDish = {
          id: "fasting_hydration_tea",
          name: "Intermittent Fasting Hydration (Pink Salt Electrolyte Water & Green Tea)",
          category: "breakfast",
          cuisine: "global",
          cuisineName: "Fasting Window",
          cuisineFlag: "⏳",
          weightGrams: 300,
          calories: 0,
          carbs: 0,
          protein: 0,
          fat: 0,
          fiber: 0,
          sugar: 0,
          sodium: 180,
          isVeg: true,
          isFastingSlot: true,
          servingSize: "300ml Warm Hydration",
          vitamins: { vitaminC: 5, vitaminD: 0, vitaminB12: 0, iron: 0, calcium: 15, zinc: 0 },
          ingredients: [
            { item: "Warm Filtered Water", qty: "300ml" },
            { item: "Himalayan Pink Rock Salt", qty: "1 pinch" },
            { item: "Organic Green Tea or Lemon drop", qty: "1 bag" }
          ],
          recipeSteps: [
            "Steep green tea bag in warm water for 2 minutes with a pinch of pink salt.",
            "Sip continuously during the morning fasting window to sustain cellular hydration and autophagy."
          ],
          healthNote: "Zero caloric intake preserves cellular ketosis and autophagy while mineral electrolytes prevent headache."
        };
      } else {
        bDish = this.scaleDishToAgeAndBudget(bDish || breakfasts[0] || database.find(d => d.category === "breakfast"), mealBudget.breakfast, age, portionScale);
      }

      fDish = this.scaleDishToAgeAndBudget(fDish || fruits[0] || database.find(d => d.category === "fruit"), mealBudget.fruit, age, portionScale);
      lDish = this.scaleDishToAgeAndBudget(lDish || lunches[0] || database.find(d => d.category === "lunch"), mealBudget.lunch, age, portionScale);
      sDish = this.scaleDishToAgeAndBudget(sDish || snacks[0] || database.find(d => d.category === "snack"), mealBudget.snack, age, portionScale);
      dDish = this.scaleDishToAgeAndBudget(dDish || dinners[0] || database.find(d => d.category === "dinner"), mealBudget.dinner, age, portionScale);

      const meals = {
        breakfast: bDish,
        fruit: fDish,
        lunch: lDish,
        snack: sDish,
        dinner: dDish
      };

      const dailyTotals = this.sumDayTotals(meals);

      monthlyPlan.push({
        dateStr,
        dayNum,
        dayOfWeek,
        dayIndex: dayOfWeek,
        dayName,
        dayShort,
        isNonVegDay,
        festival,
        isFestival,
        healthStatus,
        fastingMode,
        meals,
        dailyTotals,
        targets: targets.macros,
        rda: targets.rda,
        context,
        compensation: compensationInfo
      });
    }

    return {
      profile,
      targets,
      monthlyPlan,
      weeklyPlan: monthlyPlan.slice(0, 7), // Backwards compatibility
      context: { year, month: month + 1, monthName: this.MONTH_NAMES[month], weather, season, earthRegion, age },
      compensation: compensationInfo
    };
  }

  /**
   * Retained for legacy calls; maps to generateMonthlyPlan
   */
  generateWeeklyPlan(profile, database, mlEngine = null, compensationEngine = null) {
    const today = new Date();
    const year = today.getFullYear();
    const month = (profile.month ? profile.month - 1 : today.getMonth());
    return this.generateMonthlyPlan(profile, year, month, database, mlEngine, compensationEngine);
  }

  /**
   * Sum daily nutrition totals across all 5 meal slots
   */
  sumDayTotals(meals) {
    const totals = {
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      fiber: 0,
      sodium: 0,
      vitamins: {
        vitaminC: 0,
        vitaminD: 0,
        vitaminB12: 0,
        iron: 0,
        calcium: 0,
        zinc: 0
      }
    };

    Object.values(meals).forEach(dish => {
      if (!dish) return;
      const factor = dish.pediatricFactor || 1.0;
      totals.calories += (dish.calories || 0);
      totals.carbs += (dish.carbs || 0);
      totals.protein += (dish.protein || 0);
      totals.fat += (dish.fat || 0);
      totals.fiber += (dish.fiber || 0);
      totals.sodium += (dish.sodium || 0);

      if (dish.vitamins) {
        totals.vitamins.vitaminC += (dish.vitamins.vitaminC || 0) * factor;
        totals.vitamins.vitaminD += (dish.vitamins.vitaminD || 0) * factor;
        totals.vitamins.vitaminB12 += (dish.vitamins.vitaminB12 || 0) * factor;
        totals.vitamins.iron += (dish.vitamins.iron || 0) * factor;
        totals.vitamins.calcium += (dish.vitamins.calcium || 0) * factor;
        totals.vitamins.zinc += (dish.vitamins.zinc || 0) * factor;
      }
    });

    totals.calories = Math.round(totals.calories);
    totals.carbs = Math.round(totals.carbs);
    totals.protein = Math.round(totals.protein);
    totals.fat = Math.round(totals.fat);
    totals.fiber = Math.round(totals.fiber);
    totals.sodium = Math.round(totals.sodium);

    totals.vitamins.vitaminC = Math.round(totals.vitamins.vitaminC);
    totals.vitamins.vitaminD = parseFloat(totals.vitamins.vitaminD.toFixed(1));
    totals.vitamins.vitaminB12 = parseFloat(totals.vitamins.vitaminB12.toFixed(1));
    totals.vitamins.iron = parseFloat(totals.vitamins.iron.toFixed(1));
    totals.vitamins.calcium = Math.round(totals.vitamins.calcium);
    totals.vitamins.zinc = parseFloat(totals.vitamins.zinc.toFixed(1));

    return totals;
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { NutritionEngine };
}
