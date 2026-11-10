/**
 * NutriMeal AI - Modern Application Controller
 * Name-Wise Multi-Profile System, Month-Wise Date Planning, Pediatric Schofield Equations,
 * Acute Illness Adaptation, Intermittent Fasting (16:8, 14:10, Upvas), Dedicated Fruits & Snacks,
 * Major Cultural Festivals (Ganeshotsav, Diwali, Holi, Navratri),
 * Next-Day Compensation Engine, and Client-Side Contextual ML.
 */

// Initialize clinical and machine learning engines
const nutritionEngine = new NutritionEngine();
const mlEngine = new NutriMealMLEngine();
const compensationEngine = new NutriMealCompensationEngine();

// Default initial profiles pool for family members
const DEFAULT_PROFILES = {
  "Rajan (Self)": {
    name: "Rajan (Self)",
    gender: "male",
    age: 35,
    weight: 70, // kg
    height: 172, // cm
    nationality: "indian",
    month: new Date().getMonth() + 1,
    weather: "cold",
    earthRegion: "south_asia",
    activity: "moderate",
    goal: "maintain",
    conditions: ["diabetes"], // Diabetes checked by default
    allergies: [],
    healthStatus: "healthy", // "healthy", "fever", "cold", "viral", "lite"
    fastingMode: "none",     // "none", "16_8", "14_10", "upvas"
    festivalOverride: "auto",// "auto", "ganeshotsav", "diwali", "holi", "sharad_navratri", "makar_sankranti", "none"
    nonVegDays: [0, 3, 5]    // Sunday=0, Wednesday=3, Friday=5
  },
  "Aarav (Son, Age 5)": {
    name: "Aarav (Son, Age 5)",
    gender: "male",
    age: 5,
    weight: 18.5,
    height: 108,
    nationality: "indian",
    month: new Date().getMonth() + 1,
    weather: "cold",
    earthRegion: "south_asia",
    activity: "moderate",
    goal: "maintain",
    conditions: [],
    allergies: [],
    healthStatus: "healthy",
    fastingMode: "none",
    festivalOverride: "auto",
    nonVegDays: [0, 3, 5]
  },
  "Grandmother (Age 70)": {
    name: "Grandmother (Age 70)",
    gender: "female",
    age: 70,
    weight: 62,
    height: 155,
    nationality: "indian",
    month: new Date().getMonth() + 1,
    weather: "cold",
    earthRegion: "south_asia",
    activity: "light",
    goal: "maintain",
    conditions: ["hypertension"],
    allergies: [],
    healthStatus: "healthy",
    fastingMode: "none",
    festivalOverride: "auto",
    nonVegDays: [0, 3, 5]
  }
};

// Global application state
let state = {
  profiles: loadAllProfiles(),
  activeProfileName: getActiveProfileName(),
  profile: null,
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(), // 0-indexed (e.g. 10 = November)
  selectedDayNum: new Date().getDate(), // e.g. 8
  planData: null
};

// Ensure active profile is properly initialized
state.profile = state.profiles[state.activeProfileName] || Object.values(state.profiles)[0];
state.activeProfileName = state.profile.name;

// ==========================================
// INITIALIZATION
// ==========================================
function initApp() {
  try {
    generatePlan();
    setupEventListeners();
    renderApp();
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// ==========================================
// MULTI-PROFILE STORAGE (NAME-WISE PROFILES)
// ==========================================
function loadAllProfiles() {
  try {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("nutrimeal_multi_profiles");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Object.keys(parsed).length > 0) {
          return parsed;
        }
      }
    }
  } catch (e) {
    console.error("Could not load multi profiles from storage", e);
  }
  return { ...DEFAULT_PROFILES };
}

function saveAllProfiles(profilesMap) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("nutrimeal_multi_profiles", JSON.stringify(profilesMap));
    }
  } catch (e) {
    console.error("Could not save multi profiles", e);
  }
}

function getActiveProfileName() {
  try {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("nutrimeal_active_profile_name");
      if (saved) return saved;
    }
  } catch (e) {
    console.error("Could not load active profile name", e);
  }
  return "Rajan (Self)";
}

function setActiveProfileName(name) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("nutrimeal_active_profile_name", name);
    }
  } catch (e) {
    console.error("Could not save active profile name", e);
  }
}

function switchProfile(name) {
  if (!state.profiles[name]) return;
  state.activeProfileName = name;
  setActiveProfileName(name);
  state.profile = state.profiles[name];
  generatePlan();
  renderApp();
}

function deleteCurrentProfile() {
  const currentName = state.activeProfileName;
  const profileKeys = Object.keys(state.profiles);
  if (profileKeys.length <= 1) {
    alert("You must keep at least one profile in the system.");
    return;
  }

  if (!confirm(`Are you sure you want to delete profile "${currentName}"?`)) {
    return;
  }

  delete state.profiles[currentName];
  saveAllProfiles(state.profiles);

  const remainingKeys = Object.keys(state.profiles);
  const nextProfileName = remainingKeys[0];
  switchProfile(nextProfileName);
}

function generatePlan() {
  let activeProfile = { ...state.profile };
  if (activeProfile.festivalOverride && activeProfile.festivalOverride !== "auto" && activeProfile.festivalOverride !== "none") {
    activeProfile.festival = activeProfile.festivalOverride;
  }

  state.planData = nutritionEngine.generateMonthlyPlan(
    activeProfile,
    state.currentYear,
    state.currentMonth,
    DISH_DATABASE,
    mlEngine,
    compensationEngine
  );

  const totalDays = state.planData.monthlyPlan.length;
  if (state.selectedDayNum > totalDays) {
    state.selectedDayNum = totalDays;
  }
}

// ==========================================
// RENDER METHODS
// ==========================================
function renderApp() {
  renderProfileSwitcher();
  renderSeasonalBar();
  renderQuickControls();
  renderCompensationBanner();
  renderProfileHeader();
  renderMonthDateGrid();
  renderActiveDay();
  renderClinicalInsights();
}

function renderProfileSwitcher() {
  const sel = document.getElementById("selActiveProfile");
  if (!sel) return;
  sel.innerHTML = "";

  Object.keys(state.profiles).forEach(pName => {
    const opt = document.createElement("option");
    opt.value = pName;
    opt.textContent = pName;
    if (pName === state.activeProfileName) {
      opt.selected = true;
    }
    sel.appendChild(opt);
  });
}

function renderSeasonalBar() {
  const p = state.profile;
  const selMonth = document.getElementById("selMonth");
  if (selMonth) selMonth.value = state.currentMonth + 1;

  const selWeather = document.getElementById("selWeather");
  if (selWeather) selWeather.value = p.weather || "cold";

  const selEarthRegion = document.getElementById("selEarthRegion");
  if (selEarthRegion) selEarthRegion.value = p.earthRegion || "south_asia";
}

function renderQuickControls() {
  const p = state.profile;

  const quickHealth = document.getElementById("quickHealthStatus");
  if (quickHealth) quickHealth.value = p.healthStatus || "healthy";

  const quickFasting = document.getElementById("quickFastingMode");
  if (quickFasting) quickFasting.value = p.fastingMode || "none";

  const quickFest = document.getElementById("quickFestivalSelector");
  if (quickFest) quickFest.value = p.festivalOverride || "auto";
}

function renderCompensationBanner() {
  const compBanner = document.getElementById("compensationBanner");
  if (!compBanner) return;

  const comp = state.planData.compensation;

  if (comp && comp.hasCompensation) {
    compBanner.classList.remove("hidden");
    const msgEl = document.getElementById("compensationMessageText");
    if (msgEl) msgEl.textContent = comp.message;

    const boosterPill = document.getElementById("compensationBoosterPill");
    if (boosterPill) {
      if (comp.recommendedBoosterSnack) {
        boosterPill.textContent = `⚡ ${comp.recommendedBoosterSnack.name} Added`;
      } else {
        boosterPill.textContent = `+${Math.round((comp.boostFactors.portionScale - 1) * 100)}% Portions Scaled`;
      }
    }
  } else {
    compBanner.classList.add("hidden");
  }
}

function renderProfileHeader() {
  const p = state.profile;
  const targets = state.planData.targets;
  const bmiInfo = targets.bmiInfo;

  // Profile Name Display
  const nameDisplayEl = document.getElementById("profileNameDisplay");
  if (nameDisplayEl) {
    nameDisplayEl.textContent = p.name || state.activeProfileName;
  }

  // Gender & Age with Pediatric Growth Stage
  const genderCapitalized = p.gender.charAt(0).toUpperCase() + p.gender.slice(1);
  let ageBadge = `${genderCapitalized}, ${p.age} yrs`;
  if (p.age <= 3) ageBadge += ` (Toddler Growth)`;
  else if (p.age <= 12) ageBadge += ` (Child Growth)`;
  else if (p.age <= 18) ageBadge += ` (Adolescent Growth)`;
  else if (p.age >= 60) ageBadge += ` (Senior Care)`;
  document.getElementById("profileGenderAgeBadge").textContent = ageBadge;

  // BMI & Percentile
  const bmiEl = document.getElementById("profileBmiBadge");
  const bmiText = bmiInfo.percentile
    ? `BMI: ${bmiInfo.bmi} (${bmiInfo.category} • ${bmiInfo.percentile})`
    : `BMI: ${bmiInfo.bmi} (${bmiInfo.category})`;
  bmiEl.textContent = bmiText;
  if (bmiInfo.category.includes("Healthy")) {
    bmiEl.className = "text-xs px-2.5 py-0.5 rounded-md font-medium bg-emerald-100 text-emerald-800";
  } else if (bmiInfo.category.includes("Overweight") || bmiInfo.category.includes("Risk")) {
    bmiEl.className = "text-xs px-2.5 py-0.5 rounded-md font-medium bg-amber-100 text-amber-800";
  } else {
    bmiEl.className = "text-xs px-2.5 py-0.5 rounded-md font-medium bg-blue-100 text-blue-800";
  }

  // Height & Weight
  document.getElementById("profileMeasurements").textContent = `Height: ${p.height} cm | Weight: ${p.weight} kg`;

  // Nationality / Cuisine Badge
  const natEl = document.getElementById("profileNationalityBadge");
  if (natEl) {
    const natMap = {
      marathi: "🚩 Maharashtrian / Marathi",
      malvani: "🥥 Malvani & Konkani",
      indian: "🇮🇳 Indian Cuisine",
      american: "🇺🇸 American Cuisine",
      mediterranean: "🇬🇷 Mediterranean Cuisine",
      asian: "🇯🇵 East Asian Cuisine",
      mexican: "🇲🇽 Mexican Cuisine",
      all: "🌐 Global Fusion Cuisines"
    };
    natEl.textContent = natMap[p.nationality || "indian"] || "🇮🇳 Indian Cuisine";
  }

  // Conditions display
  const condEl = document.getElementById("profileConditionsDisplay");
  if (p.conditions && p.conditions.length > 0) {
    const condLabels = p.conditions.map(c => {
      if (c === "diabetes") return "Diabetes (Low GI)";
      if (c === "hypertension") return "Hypertension (Low Sodium)";
      if (c === "cholesterol") return "High Cholesterol";
      if (c === "fatty_liver") return "Fatty Liver";
      if (c === "gerd") return "GERD / Acid Reflux";
      if (c === "thyroid") return "Thyroid Care";
      return c;
    });
    condEl.textContent = `Conditions: ${condLabels.join(", ")}`;
  } else {
    condEl.textContent = "Conditions: General Health & Longevity";
  }

  // Allergies display
  const allergyEl = document.getElementById("profileAllergiesDisplay");
  if (allergyEl) {
    if (p.allergies && p.allergies.length > 0) {
      allergyEl.textContent = `Allergies: ${p.allergies.join(", ")}`;
    } else {
      allergyEl.textContent = "Allergies: None";
    }
  }

  // Target Macro Pills
  document.getElementById("targetCaloriesVal").textContent = targets.macros.calories.toLocaleString();
  document.getElementById("targetCarbsVal").textContent = targets.macros.carbs;
  document.getElementById("targetProteinVal").textContent = targets.macros.protein;
  document.getElementById("targetFatVal").textContent = targets.macros.fat;
}

// ==========================================
// MONTH-WISE CALENDAR & DATE GRID
// ==========================================
function renderMonthDateGrid() {
  const container = document.getElementById("monthDatesGrid");
  if (!container) return;
  container.innerHTML = "";

  const monthName = state.planData.context.monthName;
  const year = state.planData.context.year;
  const headingEl = document.getElementById("calendarMonthHeading");
  if (headingEl) {
    headingEl.textContent = `${monthName} ${year} — Day-Wise Meal Calendar`;
  }

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === state.currentMonth;
  const todayDateNum = isCurrentMonth ? today.getDate() : -1;

  state.planData.monthlyPlan.forEach(day => {
    const isSelected = day.dayNum === state.selectedDayNum;
    const isToday = day.dayNum === todayDateNum;

    const btn = document.createElement("button");
    btn.type = "button";

    let borderClass = isSelected
      ? "ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-500 shadow-sm font-bold"
      : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700";

    if (isToday && !isSelected) {
      borderClass += " border-emerald-400 bg-emerald-50/30";
    }

    btn.className = `p-2 rounded-xl border text-center transition flex flex-col items-center justify-between min-h-[64px] cursor-pointer ${borderClass}`;

    let dietPill = "";
    if (day.festival) {
      dietPill = `<span class="text-[9px] px-1 py-0.2 rounded font-extrabold bg-amber-100 text-amber-900 leading-tight block w-full truncate">${day.festival.icon} Fest</span>`;
    } else if (day.isNonVegDay) {
      dietPill = `<span class="text-[9px] px-1 py-0.2 rounded font-extrabold bg-amber-100 text-amber-950 leading-tight block w-full truncate">🍗 Non-Veg</span>`;
    } else if (day.fastingMode === "upvas") {
      dietPill = `<span class="text-[9px] px-1 py-0.2 rounded font-extrabold bg-purple-100 text-purple-900 leading-tight block w-full truncate">🕊️ Upvas</span>`;
    } else {
      dietPill = `<span class="text-[9px] px-1 py-0.2 rounded font-extrabold bg-emerald-100 text-emerald-900 leading-tight block w-full truncate">🥬 Veg</span>`;
    }

    btn.innerHTML = `
      <div class="flex items-center justify-between w-full text-[10px] text-slate-400 font-semibold mb-0.5">
        <span>${day.dayShort}</span>
        ${isToday ? `<span class="text-[8px] bg-emerald-600 text-white px-1 rounded-full font-bold">Now</span>` : ""}
      </div>
      <div class="text-sm sm:text-base font-extrabold text-slate-900 leading-none my-0.5">
        ${day.dayNum}
      </div>
      <div class="w-full mt-0.5">
        ${dietPill}
      </div>
    `;

    btn.addEventListener("click", () => {
      state.selectedDayNum = day.dayNum;
      renderMonthDateGrid();
      renderActiveDay();
      renderClinicalInsights();
    });

    container.appendChild(btn);
  });
}

// ==========================================
// ACTIVE DAY DASHBOARD
// ==========================================
function renderActiveDay() {
  const currentPlan = state.planData.monthlyPlan.find(d => d.dayNum === state.selectedDayNum);
  if (!currentPlan) return;

  const monthName = state.planData.context.monthName;
  const year = state.planData.context.year;

  document.getElementById("activeDayHeading").textContent = `${currentPlan.dayName}, ${currentPlan.dayNum} ${monthName} ${year}`;

  const subEl = document.getElementById("activeDaySubheading");
  if (subEl) {
    if (currentPlan.festival) {
      subEl.textContent = `Cultural Celebration: ${currentPlan.festival.name} special wholesome feast`;
    } else if (currentPlan.fastingMode === "16_8") {
      subEl.textContent = `Intermittent Fasting Schedule (12:00 PM – 8:00 PM Eating Window)`;
    } else if (currentPlan.healthStatus && currentPlan.healthStatus !== "healthy") {
      subEl.textContent = `Recovery Diet: Light, soothing digestibles tailored for illness recuperation`;
    } else {
      subEl.textContent = `Homestyle easy-to-cook recipes with exact gram portion weights for ${state.profile.name}`;
    }
  }

  // Diet badge (Non-Veg vs Veg)
  const dietBadge = document.getElementById("activeDayDietBadge");
  if (currentPlan.isNonVegDay) {
    dietBadge.textContent = "🍗 Non-Veg Day (Sunday/Wed/Fri)";
    dietBadge.className = "text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-300";
  } else {
    dietBadge.textContent = "🥬 100% Pure Veg Day";
    dietBadge.className = "text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
  }

  // Festival Badge
  const festBadge = document.getElementById("activeDayFestivalBadge");
  if (festBadge) {
    if (currentPlan.festival) {
      festBadge.textContent = `${currentPlan.festival.icon} ${currentPlan.festival.name}`;
      festBadge.classList.remove("hidden");
    } else {
      festBadge.classList.add("hidden");
    }
  }

  // Health Status Badge
  const healthBadge = document.getElementById("activeDayHealthBadge");
  if (healthBadge) {
    if (currentPlan.healthStatus === "fever") {
      healthBadge.textContent = "🌡️ Fever Recovery Mode";
      healthBadge.classList.remove("hidden");
    } else if (currentPlan.healthStatus === "cold") {
      healthBadge.textContent = "🤧 Cold & Cough Relief";
      healthBadge.classList.remove("hidden");
    } else if (currentPlan.healthStatus === "viral") {
      healthBadge.textContent = "🦠 Viral Defense Mode";
      healthBadge.classList.remove("hidden");
    } else if (currentPlan.healthStatus === "lite") {
      healthBadge.textContent = "🍃 Lite Eating / Gut Rest";
      healthBadge.classList.remove("hidden");
    } else {
      healthBadge.classList.add("hidden");
    }
  }

  // Fasting Badge
  const fastBadge = document.getElementById("activeDayFastingBadge");
  if (fastBadge) {
    if (currentPlan.fastingMode === "16_8") {
      fastBadge.textContent = "⏳ 16:8 IF (12 PM - 8 PM)";
      fastBadge.classList.remove("hidden");
    } else if (currentPlan.fastingMode === "14_10") {
      fastBadge.textContent = "⏱️ 14:10 Fasting";
      fastBadge.classList.remove("hidden");
    } else if (currentPlan.fastingMode === "upvas") {
      fastBadge.textContent = "🕊️ Religious Fasting / Upvas";
      fastBadge.classList.remove("hidden");
    } else {
      fastBadge.classList.add("hidden");
    }
  }

  // Macro Progress Bars
  const totals = currentPlan.dailyTotals;
  const targets = currentPlan.targets;

  renderProgressBar("progCalText", "progCalBar", totals.calories, targets.calories, "kcal", "bg-emerald-500");
  renderProgressBar("progCarbText", "progCarbBar", totals.carbs, targets.carbs, "g", "bg-blue-500");
  renderProgressBar("progProteinText", "progProteinBar", totals.protein, targets.protein, "g", "bg-emerald-600");
  renderProgressBar("progFatText", "progFatBar", totals.fat, targets.fat, "g", "bg-amber-500");

  renderMicronutrientBadges(totals, currentPlan.rda);
  renderMealCards(currentPlan.meals, currentPlan.dateStr);
}

function renderProgressBar(textId, barId, current, target, unit, colorClass) {
  const textEl = document.getElementById(textId);
  const barEl = document.getElementById(barId);
  if (!textEl || !barEl) return;

  textEl.textContent = `${current.toLocaleString()} / ${target.toLocaleString()} ${unit}`;
  const pct = Math.min(100, Math.round((current / target) * 100));
  barEl.style.width = `${pct}%`;
}

function renderMicronutrientBadges(totals, rda) {
  const container = document.getElementById("micronutrientBadges");
  if (!container) return;
  container.innerHTML = "";

  const vit = totals.vitamins;
  const items = [
    { label: "Fiber", current: totals.fiber, target: rda.fiber, unit: "g", icon: "fa-wheat-awn" },
    { label: "Vit C", current: vit.vitaminC, target: rda.vitaminC, unit: "mg", icon: "fa-lemon" },
    { label: "Calcium", current: vit.calcium, target: rda.calcium, unit: "mg", icon: "fa-bone" },
    { label: "Iron", current: vit.iron, target: rda.iron, unit: "mg", icon: "fa-droplet" },
    { label: "Zinc", current: vit.zinc, target: rda.zinc, unit: "mg", icon: "fa-shield" },
    { label: "Sodium", current: totals.sodium, target: rda.sodium, unit: "mg", icon: "fa-bottle-water", isMax: true }
  ];

  items.forEach(item => {
    const isSatisfied = item.isMax ? item.current <= item.target : item.current >= item.target * 0.85;
    const badge = document.createElement("span");
    badge.className = `inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
      isSatisfied 
        ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
        : "bg-slate-100 text-slate-700 border-slate-200"
    }`;
    badge.innerHTML = `
      <i class="fa-solid ${item.icon} ${isSatisfied ? 'text-emerald-600' : 'text-slate-400'}"></i>
      <span>${item.label}: ${item.current}${item.unit}</span>
      ${isSatisfied ? '<i class="fa-solid fa-check text-[10px] text-emerald-600 ml-0.5"></i>' : ''}
    `;
    container.appendChild(badge);
  });
}

// ==========================================
// 5-SLOT MEAL CARDS (BREAKFAST, FRUIT, LUNCH, SNACK, DINNER)
// ==========================================
function renderMealCards(meals, dateStr) {
  const container = document.getElementById("mealsGrid");
  if (!container) return;
  container.innerHTML = "";

  const isIF = state.profile.fastingMode === "16_8";

  const mealSlots = [
    { key: "breakfast", title: "Breakfast", icon: "fa-mug-hot", time: isIF ? "8:00 AM (Hydration)" : "Morning (8:00 AM)" },
    { key: "fruit", title: "Fruit Bowl", icon: "fa-apple-whole", time: isIF ? "2:30 PM (Mid-Day Fruit)" : "Mid-Morning (11:00 AM)" },
    { key: "lunch", title: "Lunch", icon: "fa-bowl-rice", time: isIF ? "12:00 PM (Break-Fast)" : "Afternoon (1:00 PM)" },
    { key: "snack", title: "Evening Snack", icon: "fa-cookie-bite", time: isIF ? "5:00 PM (Pre-Dinner)" : "Tea-Time (4:30 PM)" },
    { key: "dinner", title: "Dinner", icon: "fa-plate-wheat", time: isIF ? "7:30 PM (Close Window)" : "Evening (7:30 PM)" }
  ];

  mealSlots.forEach(slot => {
    const dish = meals[slot.key];
    if (!dish) return;

    const loggedMeal = compensationEngine.logs[dateStr]?.meals[slot.key];
    const loggedRatio = loggedMeal !== undefined ? loggedMeal.ratio : null;

    const card = document.createElement("div");
    card.className = "glass-card rounded-2xl p-4 flex flex-col justify-between space-y-3 border border-slate-200/90 shadow-sm bg-white";

    if (dish.isFastingSlot) {
      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <div class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-700">
              <i class="fa-solid fa-hourglass-half text-purple-600"></i>
              <span>${slot.title}</span>
            </div>
            <span class="text-[10px] text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded">${slot.time}</span>
          </div>

          <div class="bg-purple-50/70 border border-purple-200 rounded-xl p-3 text-center space-y-2">
            <div class="text-2xl">⏳</div>
            <h4 class="text-sm font-bold text-purple-950">${dish.name}</h4>
            <p class="text-[11px] text-purple-800 leading-relaxed">${dish.healthNote}</p>
          </div>

          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs space-y-1">
            <strong class="text-[11px] font-bold text-slate-800 block">Fasting Hydration Protocol:</strong>
            <ul class="text-[11px] text-slate-600 space-y-0.5 list-disc pl-4">
              <li>Drink warm water with 1 pinch pink salt.</li>
              <li>Unsweetened green tea or black coffee allowed.</li>
              <li>Eating window officially opens at 12:00 PM Lunch!</li>
            </ul>
          </div>
        </div>

        <div class="pt-2 border-t border-slate-100 text-center">
          <span class="text-[10px] font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            0 kcal • Autophagy Active
          </span>
        </div>
      `;
      container.appendChild(card);
      return;
    }

    card.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between border-b border-slate-100 pb-1.5">
          <div class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
            <i class="fa-solid ${slot.icon} text-emerald-600"></i>
            <span>${slot.title}</span>
          </div>
          <span class="text-[10px] text-slate-400 font-medium">${slot.time}</span>
        </div>

        <div>
          <div class="flex items-center gap-1 mb-1.5 flex-wrap">
            <span class="text-[10px] px-2 py-0.2 rounded-full font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 inline-flex items-center gap-1">
              ${dish.cuisineFlag || '🌍'} ${dish.cuisineName || 'Global'}
            </span>
            ${dish.isVeg 
              ? `<span class="badge-veg text-[10px] px-2 py-0.2 rounded-full font-bold inline-flex items-center gap-1"><i class="fa-solid fa-leaf text-[9px]"></i> Pure Veg</span>` 
              : `<span class="badge-nonveg text-[10px] px-2 py-0.2 rounded-full font-bold inline-flex items-center gap-1"><i class="fa-solid fa-drumstick-bite text-[9px]"></i> Non-Veg</span>`
            }
            ${state.profile.conditions.includes("diabetes") 
              ? `<span class="badge-diabetic text-[10px] px-2 py-0.2 rounded-full font-bold inline-flex items-center gap-1"><i class="fa-solid fa-shield-halved text-[9px]"></i> Low GI</span>` 
              : ""
            }
          </div>
          <h4 class="text-sm font-bold text-slate-900 leading-snug">${dish.name}</h4>
        </div>

        <div class="bg-purple-50/80 border border-purple-200/80 rounded-xl p-2 text-xs space-y-0.5">
          <div class="flex items-center justify-between font-bold text-[11px]">
            <span class="text-purple-800 flex items-center gap-1">
              <i class="fa-solid fa-brain text-purple-600"></i>
              <span>Fit:</span>
            </span>
            <span class="bg-purple-200 text-purple-950 px-2 py-0.2 rounded text-[10px] font-extrabold">
              ${dish.mlMatchPercentage || 96}%
            </span>
          </div>
          <div class="text-[11px] font-medium text-purple-900 leading-tight">
            ${dish.seasonalNote || dish.mlExplanation || 'Seasonal produce match'}
          </div>
        </div>

        <div class="bg-amber-50/70 border border-amber-200/80 rounded-xl p-2 text-xs text-amber-900 space-y-0.5">
          <div class="flex items-center justify-between font-bold text-[11px]">
            <span class="flex items-center gap-1 text-amber-800">
              <i class="fa-solid fa-scale-balanced text-amber-600"></i>
              Weight:
            </span>
            <span class="bg-amber-200/70 text-amber-950 px-2 py-0.2 rounded text-[10px] font-extrabold">${dish.weightGrams}g Total</span>
          </div>
          <div class="text-[11px] font-medium text-amber-800/90 leading-tight truncate">
            ${dish.servingSize}
          </div>
        </div>

        <div class="grid grid-cols-4 gap-1 text-center bg-slate-50 p-2 rounded-xl border border-slate-100 text-[11px]">
          <div>
            <span class="text-[9px] text-slate-500 font-medium block">Calories</span>
            <span class="font-bold text-slate-900 text-xs">${dish.calories}</span>
          </div>
          <div>
            <span class="text-[9px] text-blue-700 font-medium block">Carbs</span>
            <span class="font-bold text-blue-900 text-xs">${dish.carbs}g</span>
          </div>
          <div>
            <span class="text-[9px] text-emerald-700 font-medium block">Protein</span>
            <span class="font-bold text-emerald-900 text-xs">${dish.protein}g</span>
          </div>
          <div>
            <span class="text-[9px] text-amber-700 font-medium block">Fats</span>
            <span class="font-bold text-amber-900 text-xs">${dish.fat}g</span>
          </div>
        </div>

        <div class="bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs space-y-1">
          <div class="flex items-center justify-between text-[10px] font-bold text-slate-700">
            <span>Did you eat this?</span>
            <span class="text-[9px] text-slate-400 font-medium">Trains AI</span>
          </div>
          <div class="grid grid-cols-3 gap-1">
            <button class="btn-intake py-1 px-1 rounded text-[9px] font-bold border transition ${loggedRatio === 1.0 ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}" data-slot="${slot.key}" data-ratio="1.0">
              ✅ 100%
            </button>
            <button class="btn-intake py-1 px-1 rounded text-[9px] font-bold border transition ${loggedRatio === 0.5 ? 'bg-amber-500 text-white border-amber-500 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}" data-slot="${slot.key}" data-ratio="0.5">
              🌗 50%
            </button>
            <button class="btn-intake py-1 px-1 rounded text-[9px] font-bold border transition ${loggedRatio === 0.0 ? 'bg-rose-500 text-white border-rose-500 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}" data-slot="${slot.key}" data-ratio="0.0">
              ❌ Skip
            </button>
          </div>
          ${loggedRatio !== null ? `<div class="text-[9px] font-semibold text-emerald-700 text-center">✓ Logged (${Math.round(loggedRatio * 100)}%)</div>` : ''}
        </div>
      </div>

      <div class="pt-2 border-t border-slate-100 flex items-center gap-1.5">
        <button class="btn-recipe flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2 text-xs font-bold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm cursor-pointer" data-dish-id="${dish.id}">
          <i class="fa-solid fa-kitchen-set text-[11px]"></i>
          <span>Recipe</span>
        </button>
        <button class="btn-swap inline-flex items-center justify-center p-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer" title="Swap with alternative dish" data-slot="${slot.key}">
          <i class="fa-solid fa-shuffle text-[11px]"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach button listeners
  container.querySelectorAll(".btn-recipe").forEach(btn => {
    btn.addEventListener("click", () => {
      const dishId = btn.getAttribute("data-dish-id");
      openRecipeModal(dishId);
    });
  });

  container.querySelectorAll(".btn-swap").forEach(btn => {
    btn.addEventListener("click", () => {
      const slotKey = btn.getAttribute("data-slot");
      swapDish(slotKey);
    });
  });

  container.querySelectorAll(".btn-intake").forEach(btn => {
    btn.addEventListener("click", () => {
      const slotKey = btn.getAttribute("data-slot");
      const ratio = parseFloat(btn.getAttribute("data-ratio"));
      const currentPlan = state.planData.monthlyPlan.find(d => d.dayNum === state.selectedDayNum);
      const dish = currentPlan.meals[slotKey];

      compensationEngine.logMealIntake(dateStr, slotKey, dish, ratio, currentPlan.targets);

      const isPositive = ratio >= 0.5;
      mlEngine.train(dish, currentPlan.context, isPositive);

      if (window.AndroidNative) {
        if (typeof window.AndroidNative.triggerHaptic === "function") {
          window.AndroidNative.triggerHaptic();
        }
        if (typeof window.AndroidNative.showToast === "function") {
          window.AndroidNative.showToast(`Logged ${Math.round(ratio * 100)}% for ${dish.name}`);
        }
      }

      renderMealCards(currentPlan.meals, dateStr);
      renderCompensationBanner();
    });
  });
}

// ==========================================
// CLINICAL & FESTIVAL INSIGHTS
// ==========================================
function renderClinicalInsights() {
  const adviceEl = document.getElementById("clinicalAdviceText");
  if (!adviceEl) return;

  const p = state.profile;
  const currentPlan = state.planData.monthlyPlan.find(d => d.dayNum === state.selectedDayNum);
  if (!currentPlan) return;

  let insights = [];

  // Cultural Festival Insights
  if (currentPlan.festival) {
    if (currentPlan.festival.id === "ganeshotsav") {
      insights.push("🕉️ Ganeshotsav Celebration: Traditional Steamed Ukdiche Modak features pure coconut & dark jaggery steamed without frying, delivering vital MCTs, iron, and sacred satva.");
    } else if (currentPlan.festival.id === "diwali") {
      insights.push("🪔 Diwali Festival: Air-baked whole wheat dry-fruit gujiya and saffron low-fat paneer provide festive celebration while preserving blood glucose stability.");
    } else if (currentPlan.festival.id === "holi") {
      insights.push("🎨 Holi Celebration: Spiced protein-rich almond and saffron thandai delivers cooling fennel, pepper, and magnesium for seasonal rejuvenation.");
    } else if (currentPlan.festival.id.includes("navratri") || currentPlan.fastingMode === "upvas") {
      insights.push("🔱 Sacred Fasting / Upvas: Barnyard millet (Sama) and amaranth (Rajgira) provide the highest non-heme iron and calcium among grains with a low glycemic load.");
    }
  }

  // Acute Health Status Insights (Fever / Cold / Viral / Lite Eating)
  if (p.healthStatus === "fever") {
    insights.push("🌡️ Fever Convalescence: Calories reduced by 10% to eliminate metabolic strain. Warm turmeric rice khichdi and cinnamon steamed apples soothe gastric lining and restore hydration.");
  } else if (p.healthStatus === "cold") {
    insights.push("🤧 Cold & Cough Relief: High bioavailable Vitamin C (100mg+) and warm ginger-black pepper broth break chest congestion and inhibit viral replication.");
  } else if (p.healthStatus === "viral") {
    insights.push("🦠 Viral Recovery: Bioavailable plant protein, papain digestive enzymes, and electrolyte broths promote rapid lymphocyte regeneration.");
  } else if (p.healthStatus === "lite") {
    insights.push("🍃 Lite Eating / Gut Rest: Clean fiber from papaya and steamed vegetables minimizes enzymatic workload, promoting natural detox.");
  }

  // Intermittent Fasting Guidance
  if (p.fastingMode === "16_8") {
    insights.push("⏳ 16:8 Fasting Window: 12:00 PM to 8:00 PM. Morning hydration with Himalayan pink salt prevents electrolyte dip; autophagy enhances cellular repair.");
  }

  // Pediatric Nutrition Advisory
  if (p.age <= 3) {
    insights.push(`Toddler Pediatric Plan for ${p.name} (Age ${p.age}): WHO-aligned energy density, soft digestibles, calcium & iron for neuro-skeletal development.`);
  } else if (p.age <= 12) {
    insights.push(`Childhood Growth Plan for ${p.name} (Age ${p.age}): WHO/Schofield balanced macros, safe pediatric fiber (${p.age + 5}g/day), bone-building calcium and iron.`);
  } else if (p.age <= 18) {
    insights.push(`Adolescent Growth Spurt for ${p.name} (Age ${p.age}): High-protein muscle building, sustained complex carbs, and micronutrients for puberty growth.`);
  } else if (p.age >= 60) {
    insights.push(`Senior Care Plan for ${p.name} (Age ${p.age}): Soft easy-to-chew digestibles with preserved protein density (1.3g/kg) and bioavailable calcium.`);
  }

  // Seasonal & Climate Advice
  if (p.weather === "cold") {
    insights.push(`Cold Weather Adaptation: Thermogenic spices (ginger, black pepper, turmeric) and warm broths preserve core body temperature.`);
  } else if (p.weather === "hot") {
    insights.push(`Hot Weather Adaptation: High potassium hydrators (melon, buttermilk, mint) maintain electrolyte homeostasis.`);
  } else if (p.weather === "rainy") {
    insights.push(`Monsoon Adaptation: Warm, fully cooked digestive meals bolster immune defense against humidity pathogens.`);
  }

  // Clinical conditions
  if (p.conditions && p.conditions.includes("diabetes")) {
    insights.push("Blood Sugar Management: Complex carbohydrates with low glycemic load and high dietary fiber blunt post-meal glucose spikes.");
  }
  if (p.conditions && p.conditions.includes("hypertension")) {
    insights.push("Vascular Health: Sodium is capped under 2,000mg with potassium-dense vegetables supporting arterial elasticity.");
  }

  // Compensation message
  const comp = state.planData.compensation;
  if (comp && comp.hasCompensation) {
    insights.push(`Auto-Compensation Active: Restoring -${comp.deficitYesterday.protein}g protein & -${comp.deficitYesterday.calories} kcal from yesterday.`);
  }

  adviceEl.textContent = insights.join(" • ");
}

// ==========================================
// SWAP DISH & RE-ROLL ACTIONS
// ==========================================
function swapDish(slotKey) {
  const currentPlan = state.planData.monthlyPlan.find(d => d.dayNum === state.selectedDayNum);
  if (!currentPlan) return;

  const currentDishId = currentPlan.meals[slotKey].id;
  const isNonVegDay = currentPlan.isNonVegDay;

  const candidates = nutritionEngine.filterDishes(DISH_DATABASE, state.profile, isNonVegDay, currentPlan.context)
    .filter(d => d.category === slotKey && d.id !== currentDishId);

  if (candidates.length === 0) {
    alert("No other compatible alternative dishes found matching your exact health and allergen constraints.");
    return;
  }

  const newDish = candidates[Math.floor(Math.random() * candidates.length)];
  const portionScale = (currentPlan.compensation && currentPlan.compensation.hasCompensation)
    ? currentPlan.compensation.boostFactors.portionScale
    : 1.0;

  const targetBudget = { cal: currentPlan.targets.calories * 0.25, pro: currentPlan.targets.protein * 0.25 };
  currentPlan.meals[slotKey] = nutritionEngine.scaleDishToAgeAndBudget(newDish, targetBudget, state.profile.age, portionScale);

  currentPlan.dailyTotals = nutritionEngine.sumDayTotals(currentPlan.meals);

  renderActiveDay();
  renderClinicalInsights();
}

function regenerateDayMeals() {
  const currentPlan = state.planData.monthlyPlan.find(d => d.dayNum === state.selectedDayNum);
  if (!currentPlan) return;

  const isNonVegDay = currentPlan.isNonVegDay;
  const available = nutritionEngine.filterDishes(DISH_DATABASE, state.profile, isNonVegDay, currentPlan.context);

  const breakfasts = available.filter(d => d.category === "breakfast");
  const fruits = available.filter(d => d.category === "fruit");
  const lunches = available.filter(d => d.category === "lunch");
  const snacks = available.filter(d => d.category === "snack");
  const dinners = available.filter(d => d.category === "dinner");

  const portionScale = (currentPlan.compensation && currentPlan.compensation.hasCompensation)
    ? currentPlan.compensation.boostFactors.portionScale
    : 1.0;

  const mealBudget = nutritionEngine.getMealBudgetDistribution(state.profile.fastingMode, currentPlan.targets.calories, currentPlan.targets, portionScale);

  if (state.profile.fastingMode !== "16_8") {
    currentPlan.meals.breakfast = nutritionEngine.scaleDishToAgeAndBudget(
      breakfasts[Math.floor(Math.random() * breakfasts.length)] || currentPlan.meals.breakfast,
      mealBudget.breakfast, state.profile.age, portionScale
    );
  }

  currentPlan.meals.fruit = nutritionEngine.scaleDishToAgeAndBudget(
    fruits[Math.floor(Math.random() * fruits.length)] || currentPlan.meals.fruit,
    mealBudget.fruit, state.profile.age, portionScale
  );

  currentPlan.meals.lunch = nutritionEngine.scaleDishToAgeAndBudget(
    lunches[Math.floor(Math.random() * lunches.length)] || currentPlan.meals.lunch,
    mealBudget.lunch, state.profile.age, portionScale
  );

  currentPlan.meals.snack = nutritionEngine.scaleDishToAgeAndBudget(
    snacks[Math.floor(Math.random() * snacks.length)] || currentPlan.meals.snack,
    mealBudget.snack, state.profile.age, portionScale
  );

  currentPlan.meals.dinner = nutritionEngine.scaleDishToAgeAndBudget(
    dinners[Math.floor(Math.random() * dinners.length)] || currentPlan.meals.dinner,
    mealBudget.dinner, state.profile.age, portionScale
  );

  currentPlan.dailyTotals = nutritionEngine.sumDayTotals(currentPlan.meals);

  renderActiveDay();
  renderClinicalInsights();
}

// ==========================================
// RECIPE MODAL
// ==========================================
function openRecipeModal(dishId) {
  const dish = DISH_DATABASE.find(d => d.id === dishId);
  if (!dish) return;

  const modal = document.getElementById("modalRecipe");

  document.getElementById("recDishTitle").textContent = dish.name;
  document.getElementById("recCategoryBadge").textContent = dish.category;
  document.getElementById("recDietBadge").textContent = dish.isVeg ? "Pure Veg" : "Non-Veg";
  document.getElementById("recDietBadge").className = dish.isVeg
    ? "text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800"
    : "text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800";

  document.getElementById("recWeight").textContent = `${dish.weightGrams}g Total`;
  document.getElementById("recCookTime").textContent = dish.cookTime;
  document.getElementById("recCalories").textContent = `${dish.calories} kcal`;

  const ingList = document.getElementById("recIngredientsList");
  ingList.innerHTML = "";
  (dish.ingredients || []).forEach(ing => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center py-1 border-b border-slate-200/60 last:border-0";
    li.innerHTML = `<span>${ing.item}</span> <span class="font-bold text-slate-900">${ing.qty}</span>`;
    ingList.appendChild(li);
  });

  const stepsList = document.getElementById("recStepsList");
  stepsList.innerHTML = "";
  (dish.recipeSteps || []).forEach(step => {
    const li = document.createElement("li");
    li.className = "leading-relaxed pb-1";
    li.textContent = step;
    stepsList.appendChild(li);
  });

  document.getElementById("recHealthNote").textContent = dish.healthNote || "Nutritionally balanced clinical meal.";

  modal.classList.remove("hidden");
}

function closeRecipeModal() {
  document.getElementById("modalRecipe").classList.add("hidden");
}

// ==========================================
// WEEKLY GROCERY SHOPPING LIST MODAL
// ==========================================
function openGroceryModal() {
  const modal = document.getElementById("modalGrocery");
  if (!modal) return;
  modal.classList.remove("hidden");
  renderGroceryList();
}

function closeGroceryModal() {
  const modal = document.getElementById("modalGrocery");
  if (modal) modal.classList.add("hidden");
}

function renderGroceryList() {
  const container = document.getElementById("groceryListContent");
  if (!container) return;

  if (!state.planData || !state.planData.monthlyPlan || state.planData.monthlyPlan.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-500">
        <i class="fa-solid fa-basket-shopping text-3xl text-slate-300 mb-2"></i>
        <p class="font-semibold">No active meal plan found.</p>
        <p class="text-[11px] text-slate-400">Please generate or load a meal plan first.</p>
      </div>`;
    return;
  }

  const allDays = state.planData.monthlyPlan;
  const currentDayIndex = allDays.findIndex(d => d.dayNum === state.selectedDayNum);
  const startIndex = currentDayIndex !== -1 ? currentDayIndex : 0;
  let weekDays = allDays.slice(startIndex, startIndex + 7);
  if (weekDays.length < 7) {
    weekDays = allDays.slice(0, 7);
  }

  const startDay = weekDays[0];
  const endDay = weekDays[weekDays.length - 1];
  const monthName = state.planData.context.monthName || "Month";

  const itemMap = {};

  weekDays.forEach(day => {
    Object.values(day.meals || {}).forEach(dish => {
      if (!dish || !dish.ingredients) return;
      dish.ingredients.forEach(ing => {
        const rawName = (ing.item || "").trim();
        if (!rawName) return;

        const normKey = rawName.toLowerCase();
        if (!itemMap[normKey]) {
          itemMap[normKey] = {
            displayName: rawName,
            quantities: [],
            dishes: new Set()
          };
        }
        if (ing.qty) itemMap[normKey].quantities.push(ing.qty);
        itemMap[normKey].dishes.add(dish.name);
      });
    });
  });

  const categories = {
    veggies: { title: "🥬 Fresh Vegetables, Greens & Herbs", items: [], color: "text-emerald-800 bg-emerald-50 border-emerald-200" },
    grains: { title: "🌾 Grains, Flours, Millets & Breads", items: [], color: "text-amber-800 bg-amber-50 border-amber-200" },
    pulses: { title: "🫘 Pulses, Dals, Sprouts & Legumes", items: [], color: "text-orange-800 bg-orange-50 border-orange-200" },
    proteins: { title: "🐟 Seafood, Poultry, Eggs & Proteins", items: [], color: "text-rose-800 bg-rose-50 border-rose-200" },
    nuts: { title: "🥥 Fresh Coconut, Nuts & Seeds", items: [], color: "text-teal-800 bg-teal-50 border-teal-200" },
    dairy: { title: "🥛 Dairy & Probiotics", items: [], color: "text-blue-800 bg-blue-50 border-blue-200" },
    spices: { title: "🧂 Spices, Seasonings & Cold-Pressed Oils", items: [], color: "text-slate-800 bg-slate-50 border-slate-200" },
    other: { title: "🛒 Other Kitchen Essentials", items: [], color: "text-indigo-800 bg-indigo-50 border-indigo-200" }
  };

  function classifyItem(name) {
    const l = name.toLowerCase();
    if (l.includes("fish") || l.includes("surmai") || l.includes("bangda") || l.includes("mackerel") || l.includes("kingfish") || l.includes("chicken") || l.includes("mutton") || l.includes("egg") || l.includes("prawn") || l.includes("salmon") || l.includes("tofu") || l.includes("paneer")) return "proteins";
    if (l.includes("onion") || l.includes("tomato") || l.includes("coriander") || l.includes("garlic") || l.includes("ginger") || l.includes("chilli") || l.includes("chili") || l.includes("curry leave") || l.includes("brinjal") || l.includes("vangi") || l.includes("palak") || l.includes("spinach") || l.includes("lemon") || l.includes("limbu") || l.includes("banana") || l.includes("apple") || l.includes("cucumber") || l.includes("kakdi") || l.includes("potato") || l.includes("veggie") || l.includes("fruit") || l.includes("kothimbir") || l.includes("mint") || l.includes("avocado") || l.includes("squash") || l.includes("berries")) return "veggies";
    if (l.includes("rice") || l.includes("poha") || l.includes("phov") || l.includes("jowar") || l.includes("bajra") || l.includes("ragi") || l.includes("bhakri") || l.includes("flour") || l.includes("atta") || l.includes("wheat") || l.includes("oat") || l.includes("soba") || l.includes("tortilla") || l.includes("vade") || l.includes("rava") || l.includes("semolina") || l.includes("bhajani")) return "grains";
    if (l.includes("dal") || l.includes("moong") || l.includes("toor") || l.includes("chana") || l.includes("matki") || l.includes("vatana") || l.includes("kulith") || l.includes("horse gram") || l.includes("besan") || l.includes("bean") || l.includes("lentil") || l.includes("sprout") || l.includes("cannellini")) return "pulses";
    if (l.includes("coconut") || l.includes("peanut") || l.includes("shengdana") || l.includes("sesame") || l.includes("til") || l.includes("cashew") || l.includes("almond") || l.includes("walnut") || l.includes("seed") || l.includes("flaxseed") || l.includes("chia")) return "nuts";
    if (l.includes("milk") || l.includes("curd") || l.includes("dahi") || l.includes("buttermilk") || l.includes("ghee") || l.includes("butter") || l.includes("loni") || l.includes("chaas") || l.includes("yogurt") || l.includes("feta") || l.includes("mattha")) return "dairy";
    if (l.includes("masala") || l.includes("turmeric") || l.includes("haldi") || l.includes("salt") || l.includes("oil") || l.includes("mustard") || l.includes("cumin") || l.includes("jeera") || l.includes("hing") || l.includes("kokum") || l.includes("agam") || l.includes("pepper") || l.includes("cinnamon") || l.includes("cardamom") || l.includes("clove") || l.includes("ajwain") || l.includes("methi") || l.includes("thecha") || l.includes("metkut") || l.includes("sugar") || l.includes("jaggery")) return "spices";
    return "other";
  }

  Object.values(itemMap).forEach(entry => {
    const cat = classifyItem(entry.displayName);
    categories[cat].items.push(entry);
  });

  const totalItemsCount = Object.keys(itemMap).length;

  let html = `
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
      <div>
        <h4 class="font-bold text-slate-900 text-xs flex items-center gap-1.5">
          <i class="fa-solid fa-calendar-week text-emerald-600"></i>
          7-Day Plan Coverage: ${startDay.dayName} (${startDay.dayNum} ${monthName}) to ${endDay.dayName} (${endDay.dayNum} ${monthName})
        </h4>
        <p class="text-[11px] text-slate-600 mt-0.5">Aggregated for <strong>${state.activeProfileName || "Your Profile"}</strong> (${weekDays.length * 5} individual planned meal slots)</p>
      </div>
      <div class="text-right">
        <span class="text-xs font-extrabold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-sm">
          ${totalItemsCount} Ingredients Needed
        </span>
      </div>
    </div>

    <div class="space-y-3.5">
  `;

  Object.entries(categories).forEach(([key, cat]) => {
    if (cat.items.length === 0) return;

    html += `
      <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div class="px-3 py-2 font-bold text-xs flex items-center justify-between border-b ${cat.color}">
          <span>${cat.title}</span>
          <span class="text-[10px] font-semibold opacity-75">${cat.items.length} items</span>
        </div>
        <div class="p-2 divide-y divide-slate-100">
    `;

    cat.items.forEach((entry) => {
      const qtyStr = entry.quantities.length > 0
        ? (entry.quantities.length > 1 ? `${entry.quantities.length}x servings (${entry.quantities.slice(0, 2).join(", ")}${entry.quantities.length > 2 ? '...' : ''})` : entry.quantities[0])
        : "As per taste";

      const dishesList = Array.from(entry.dishes).slice(0, 3).join(", ");
      const extraDishes = entry.dishes.size > 3 ? ` +${entry.dishes.size - 3} more` : "";

      html += `
        <label class="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition cursor-pointer select-none">
          <input type="checkbox" class="grocery-item-check mt-1 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline justify-between gap-2 flex-wrap">
              <span class="font-bold text-slate-800 text-xs item-name">${entry.displayName}</span>
              <span class="text-[11px] font-semibold text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-200/60">${qtyStr}</span>
            </div>
            <p class="text-[10px] text-slate-400 truncate mt-0.5" title="${Array.from(entry.dishes).join(', ')}">
              Dishes: ${dishesList}${extraDishes}
            </p>
          </div>
        </label>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;

  container.querySelectorAll(".grocery-item-check").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const label = e.target.closest("label");
      const nameEl = label.querySelector(".item-name");
      if (e.target.checked) {
        nameEl.classList.add("line-through", "text-slate-400");
        label.classList.add("opacity-60", "bg-slate-50/60");
      } else {
        nameEl.classList.remove("line-through", "text-slate-400");
        label.classList.remove("opacity-60", "bg-slate-50/60");
      }
    });
  });
}

function copyGroceryListToClipboard() {
  const container = document.getElementById("groceryListContent");
  if (!container) return;

  const labels = container.querySelectorAll("label");
  if (labels.length === 0) return;

  let text = `🛒 NutriMeal AI — Weekly Grocery Shopping List\n`;
  text += `Profile: ${state.activeProfileName || "Personal"}\n`;
  text += `Generated: ${new Date().toLocaleDateString()}\n\n`;

  let currentCategory = "";
  labels.forEach(label => {
    const catHeader = label.closest(".bg-white")?.querySelector(".font-bold")?.textContent?.trim() || "";
    if (catHeader && catHeader !== currentCategory) {
      currentCategory = catHeader;
      text += `\n--- ${currentCategory} ---\n`;
    }
    const name = label.querySelector(".item-name")?.textContent?.trim() || "";
    const qty = label.querySelector("span.text-\\[11px\\]")?.textContent?.trim() || "";
    const isChecked = label.querySelector("input")?.checked ? "[x]" : "[ ]";
    text += `${isChecked} ${name} — ${qty}\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    const btnText = document.getElementById("btnCopyGroceryText");
    if (btnText) {
      const orig = btnText.textContent;
      btnText.textContent = "Copied to Clipboard!";
      setTimeout(() => { btnText.textContent = orig; }, 2500);
    }
    if (window.AndroidNative && typeof window.AndroidNative.showToast === "function") {
      window.AndroidNative.showToast("Grocery list copied to clipboard!");
    }
  }).catch(err => {
    console.error("Failed to copy clipboard:", err);
  });
}

// ==========================================
// PROFILE MODAL (NAME-WISE PROFILES)
// ==========================================
function openProfileModal(isNew = false) {
  const modal = document.getElementById("modalProfile");
  if (!modal) {
    console.error("modalProfile element not found");
    return;
  }

  const p = isNew ? { ...DEFAULT_PROFILES["Rajan (Self)"], name: "New Family Member", conditions: [], allergies: [] } : state.profile;

  const nameInput = document.getElementById("inpProfileName");
  if (nameInput) {
    nameInput.value = isNew ? "New Family Member" : (p.name || state.activeProfileName);
  }

  document.getElementById("inpGender").value = p.gender || "male";
  document.getElementById("inpAge").value = p.age || 35;
  document.getElementById("inpWeight").value = p.weight || 70;
  document.getElementById("inpHeight").value = p.height || 172;
  document.getElementById("inpNationality").value = p.nationality || "indian";
  document.getElementById("inpActivity").value = p.activity || "moderate";
  document.getElementById("inpGoal").value = p.goal || "maintain";

  const inpHealth = document.getElementById("inpHealthStatus");
  if (inpHealth) inpHealth.value = p.healthStatus || "healthy";

  const inpFasting = document.getElementById("inpFastingMode");
  if (inpFasting) inpFasting.value = p.fastingMode || "none";

  document.querySelectorAll("input[name='condition']").forEach(cb => {
    cb.checked = (p.conditions || []).includes(cb.value);
  });

  document.querySelectorAll("input[name='allergy']").forEach(cb => {
    cb.checked = (p.allergies || []).includes(cb.value);
  });

  modal.classList.remove("hidden");
}

function closeProfileModal() {
  const modal = document.getElementById("modalProfile");
  if (modal) modal.classList.add("hidden");
}

function handleSaveProfileForm(isSaveAsNew = false) {
  const nameInput = document.getElementById("inpProfileName");
  let enteredName = nameInput ? nameInput.value.trim() : "";
  if (!enteredName) {
    enteredName = state.activeProfileName || "Rajan (Self)";
  }

  const conditions = Array.from(document.querySelectorAll("input[name='condition']:checked")).map(el => el.value);
  const allergies = Array.from(document.querySelectorAll("input[name='allergy']:checked")).map(el => el.value);

  const updatedProfile = {
    ...state.profile,
    name: enteredName,
    gender: document.getElementById("inpGender").value,
    age: parseInt(document.getElementById("inpAge").value, 10),
    weight: parseFloat(document.getElementById("inpWeight").value),
    height: parseFloat(document.getElementById("inpHeight").value),
    nationality: document.getElementById("inpNationality").value,
    activity: document.getElementById("inpActivity").value,
    goal: document.getElementById("inpGoal").value,
    healthStatus: document.getElementById("inpHealthStatus") ? document.getElementById("inpHealthStatus").value : "healthy",
    fastingMode: document.getElementById("inpFastingMode") ? document.getElementById("inpFastingMode").value : "none",
    conditions,
    allergies
  };

  // If renaming an existing profile and not saving as a new profile, remove old key if name changed
  if (!isSaveAsNew && state.activeProfileName !== enteredName && state.profiles[state.activeProfileName]) {
    delete state.profiles[state.activeProfileName];
  }

  // Save to profile registry
  state.profiles[enteredName] = updatedProfile;
  saveAllProfiles(state.profiles);

  // Switch to this profile
  state.activeProfileName = enteredName;
  setActiveProfileName(enteredName);
  state.profile = updatedProfile;

  closeProfileModal();
  generatePlan();
  renderApp();
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  // Profile Switcher (Dropdown)
  const selProfile = document.getElementById("selActiveProfile");
  if (selProfile) {
    selProfile.addEventListener("change", (e) => {
      switchProfile(e.target.value);
    });
  }

  // Quick Add New Profile button (+)
  const btnNewProfileQuick = document.getElementById("btnNewProfileQuick");
  if (btnNewProfileQuick) {
    btnNewProfileQuick.addEventListener("click", () => {
      openProfileModal(true);
    });
  }

  // Open profile modal buttons (support both btnOpenProfile, btnEditProfile, and btnEditBannerProfile)
  const btnOpenProfile = document.getElementById("btnOpenProfile");
  if (btnOpenProfile) {
    btnOpenProfile.addEventListener("click", () => openProfileModal(false));
  }

  const btnEditProfile = document.getElementById("btnEditProfile");
  if (btnEditProfile) {
    btnEditProfile.addEventListener("click", () => openProfileModal(false));
  }

  const btnEditBannerProfile = document.getElementById("btnEditBannerProfile");
  if (btnEditBannerProfile) {
    btnEditBannerProfile.addEventListener("click", () => openProfileModal(false));
  }

  // Delete current profile button
  const btnDeleteProfile = document.getElementById("btnDeleteCurrentProfile");
  if (btnDeleteProfile) {
    btnDeleteProfile.addEventListener("click", deleteCurrentProfile);
  }

  // Save as new person button inside modal
  const btnSaveAsNew = document.getElementById("btnSaveAsNewProfile");
  if (btnSaveAsNew) {
    btnSaveAsNew.addEventListener("click", () => {
      handleSaveProfileForm(true);
    });
  }

  // Month selector (dropdown)
  const selMonth = document.getElementById("selMonth");
  if (selMonth) {
    selMonth.addEventListener("change", (e) => {
      state.currentMonth = parseInt(e.target.value, 10) - 1;
      state.profile.month = state.currentMonth + 1;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  // Month Navigation Buttons (Prev, Today, Next)
  const btnPrev = document.getElementById("btnPrevMonth");
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      state.currentMonth--;
      if (state.currentMonth < 0) {
        state.currentMonth = 11;
        state.currentYear--;
      }
      state.profile.month = state.currentMonth + 1;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  const btnNext = document.getElementById("btnNextMonth");
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      state.currentMonth++;
      if (state.currentMonth > 11) {
        state.currentMonth = 0;
        state.currentYear++;
      }
      state.profile.month = state.currentMonth + 1;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  const btnToday = document.getElementById("btnTodayMonth");
  if (btnToday) {
    btnToday.addEventListener("click", () => {
      const now = new Date();
      state.currentYear = now.getFullYear();
      state.currentMonth = now.getMonth();
      state.selectedDayNum = now.getDate();
      state.profile.month = state.currentMonth + 1;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  // Quick Health Status Selector
  const quickHealth = document.getElementById("quickHealthStatus");
  if (quickHealth) {
    quickHealth.addEventListener("change", (e) => {
      state.profile.healthStatus = e.target.value;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  // Quick Fasting Mode Selector
  const quickFasting = document.getElementById("quickFastingMode");
  if (quickFasting) {
    quickFasting.addEventListener("change", (e) => {
      state.profile.fastingMode = e.target.value;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  // Quick Festival Selector
  const quickFest = document.getElementById("quickFestivalSelector");
  if (quickFest) {
    quickFest.addEventListener("change", (e) => {
      state.profile.festivalOverride = e.target.value;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  // Weather selector
  const selWeather = document.getElementById("selWeather");
  if (selWeather) {
    selWeather.addEventListener("change", (e) => {
      state.profile.weather = e.target.value;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  // Earth Region selector
  const selEarthRegion = document.getElementById("selEarthRegion");
  if (selEarthRegion) {
    selEarthRegion.addEventListener("change", (e) => {
      state.profile.earthRegion = e.target.value;
      state.profiles[state.activeProfileName] = state.profile;
      saveAllProfiles(state.profiles);
      generatePlan();
      renderApp();
    });
  }

  // Regenerate active day
  const btnRegen = document.getElementById("btnRegenerateDay");
  if (btnRegen) {
    btnRegen.addEventListener("click", regenerateDayMeals);
  }

  // Grocery shopping list modal open & close
  const btnOpenGroc = document.getElementById("btnOpenGrocery");
  if (btnOpenGroc) btnOpenGroc.addEventListener("click", openGroceryModal);

  const btnCloseGroc = document.getElementById("btnCloseGroceryModal");
  if (btnCloseGroc) btnCloseGroc.addEventListener("click", closeGroceryModal);

  const btnCloseGroc2 = document.getElementById("btnCloseGroceryBtn");
  if (btnCloseGroc2) btnCloseGroc2.addEventListener("click", closeGroceryModal);

  const btnCopyGroc = document.getElementById("btnCopyGrocery");
  if (btnCopyGroc) btnCopyGroc.addEventListener("click", copyGroceryListToClipboard);

  // Recipe modal close
  const btnCloseRec = document.getElementById("btnCloseRecipeModal");
  if (btnCloseRec) btnCloseRec.addEventListener("click", closeRecipeModal);

  const btnCloseRec2 = document.getElementById("btnCloseRecipeBtn");
  if (btnCloseRec2) btnCloseRec2.addEventListener("click", closeRecipeModal);

  // Profile modal close
  const btnCloseProfile = document.getElementById("btnCloseProfileModal");
  if (btnCloseProfile) btnCloseProfile.addEventListener("click", closeProfileModal);

  const btnCancelProfile = document.getElementById("btnCancelProfile");
  if (btnCancelProfile) btnCancelProfile.addEventListener("click", closeProfileModal);

  // Close modals on clicking backdrop
  ["modalGrocery", "modalRecipe", "modalProfile"].forEach(modalId => {
    const m = document.getElementById(modalId);
    if (m) {
      m.addEventListener("click", (e) => {
        if (e.target === m) {
          m.classList.add("hidden");
        }
      });
    }
  });

  // Close modals on pressing Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      ["modalGrocery", "modalRecipe", "modalProfile"].forEach(modalId => {
        document.getElementById(modalId)?.classList.add("hidden");
      });
    }
  });

  // Profile form submission
  const profileForm = document.getElementById("profileForm");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSaveProfileForm(false);
    });
  }
}
