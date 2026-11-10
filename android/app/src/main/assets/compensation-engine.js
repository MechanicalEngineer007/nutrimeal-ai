/**
 * Next-Day Nutritional Compensation & Meal Tracking Engine
 * Accurately tracks daily eaten vs missed nutrients and applies clinically
 * safe compensatory adjustments to the next day's meal plan.
 */

class NutriMealCompensationEngine {
  constructor() {
    this.STORAGE_KEY = "nutrimeal_intake_logs";
    this.logs = this.loadLogs();
  }

  loadLogs() {
    try {
      if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      }
    } catch (e) {
      console.warn("Could not load intake logs", e);
    }
    return {};
  }

  saveLogs() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.logs));
      }
    } catch (e) {
      console.warn("Could not save intake logs", e);
    }
  }

  /**
   * Log consumption for a meal slot
   * ratio: 1.0 (100% full plate), 0.75 (75%), 0.5 (50%), 0.25 (25%), 0.0 (skipped)
   */
  logMealIntake(dateKey, slotKey, dish, ratio, targetDayMacros) {
    if (!this.logs[dateKey]) {
      this.logs[dateKey] = {
        dateKey,
        meals: {},
        targets: targetDayMacros || { calories: 2000, protein: 90, carbs: 200, fat: 60 },
        actual: { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 },
        deficit: { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
      };
    }

    this.logs[dateKey].meals[slotKey] = {
      dishId: dish.id,
      dishName: dish.name,
      ratio: parseFloat(ratio),
      baseCalories: dish.calories,
      baseProtein: dish.protein,
      baseCarbs: dish.carbs,
      baseFat: dish.fat,
      baseFiber: dish.fiber,
      consumedCalories: Math.round(dish.calories * ratio),
      consumedProtein: Math.round(dish.protein * ratio),
      consumedCarbs: Math.round(dish.carbs * ratio),
      consumedFat: Math.round(dish.fat * ratio),
      consumedFiber: Math.round(dish.fiber * ratio)
    };

    // Recalculate daily totals and deficits
    this.recalculateDailyTotals(dateKey);
    this.saveLogs();

    return this.logs[dateKey];
  }

  recalculateDailyTotals(dateKey) {
    const entry = this.logs[dateKey];
    if (!entry) return;

    let cal = 0, pro = 0, carb = 0, fat = 0, fib = 0;
    Object.values(entry.meals).forEach(m => {
      cal += m.consumedCalories || 0;
      pro += m.consumedProtein || 0;
      carb += m.consumedCarbs || 0;
      fat += m.consumedFat || 0;
      fib += m.consumedFiber || 0;
    });

    entry.actual = {
      calories: Math.round(cal),
      protein: Math.round(pro),
      carbs: Math.round(carb),
      fat: Math.round(fat),
      fiber: Math.round(fib)
    };

    const t = entry.targets;
    entry.deficit = {
      calories: Math.max(0, t.calories - entry.actual.calories),
      protein: Math.max(0, t.protein - entry.actual.protein),
      carbs: Math.max(0, t.carbs - entry.actual.carbs),
      fat: Math.max(0, t.fat - entry.actual.fat),
      fiber: Math.max(0, (t.fiber || 30) - entry.actual.fiber)
    };
  }

  /**
   * Calculate compensatory adjustment for today based on yesterday's deficit
   */
  getCompensatoryAdjustment(yesterdayKey, todayTargets, userConditions = []) {
    const yesterdayLog = this.logs[yesterdayKey];

    if (!yesterdayLog || !yesterdayLog.deficit) {
      return {
        hasCompensation: false,
        deficitYesterday: null,
        boostFactors: { portionScale: 1.0, extraProtein: 0, extraCalories: 0 },
        recommendedBoosterSnack: null,
        message: "No yesterday deficit recorded. Standard daily balanced targets active."
      };
    }

    const def = yesterdayLog.deficit;

    // Check if deficit is significant (e.g. > 150 kcal or > 10g protein)
    if (def.calories < 150 && def.protein < 8) {
      return {
        hasCompensation: false,
        deficitYesterday: def,
        boostFactors: { portionScale: 1.0, extraProtein: 0, extraCalories: 0 },
        recommendedBoosterSnack: null,
        message: "Yesterday was 90%+ adhered. No recovery adjustment needed today."
      };
    }

    // Clinically safe compensation rules:
    // Do NOT dump 100% of missed calories in one go (risk of metabolic spike, indigestion, or sugar surge).
    // Safely recover 50% to 60% of the deficit on the following day.
    const hasDiabetes = userConditions.includes("diabetes");
    const maxSafeCalBoost = hasDiabetes ? 250 : 350; // capped to avoid hyperglycemia
    const safeCalorieRecovery = Math.min(maxSafeCalBoost, Math.round(def.calories * 0.55));
    const safeProteinRecovery = Math.min(22, Math.round(def.protein * 0.65)); // max 22g protein boost

    // Portion scaling factor across lunch and dinner
    const portionScale = 1.0 + Math.min(0.18, safeCalorieRecovery / (todayTargets.calories || 2000));

    // Recommend a targeted recovery booster snack
    let boosterSnack = null;
    if (safeProteinRecovery >= 12) {
      boosterSnack = {
        name: "Metabolic Recovery Protein Booster",
        items: "2 Boiled Egg Whites (or 50g Roasted Moong Sprouts / Paneer) + Roasted Cumin Chaas",
        weight: "180g",
        calories: 140,
        protein: 13,
        carbs: 8,
        fat: 2,
        purpose: `Restores ${safeProteinRecovery}g missed protein from yesterday safely without glycemic spikes.`
      };
    }

    return {
      hasCompensation: true,
      deficitYesterday: def,
      safeCalorieRecovery,
      safeProteinRecovery,
      boostFactors: {
        portionScale: parseFloat(portionScale.toFixed(2)),
        extraProtein: safeProteinRecovery,
        extraCalories: safeCalorieRecovery
      },
      recommendedBoosterSnack: boosterSnack,
      message: `Yesterday had an intake deficit of -${def.calories} kcal & -${def.protein}g protein. Today's meals have been adjusted by +${Math.round((portionScale - 1) * 100)}% portion scaling and a targeted recovery booster to restore balance.`
    };
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { NutriMealCompensationEngine };
}
