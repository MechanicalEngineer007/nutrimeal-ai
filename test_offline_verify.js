const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;

function assert(condition, desc) {
  if (condition) {
    passed++;
    console.log(`  [PASS] ${desc}`);
  } else {
    failed++;
    console.error(`  [FAIL] ${desc}`);
  }
}

console.log('====================================================');
console.log('       NUTRIMEAL AI - 100% OFFLINE VERIFICATION      ');
console.log('====================================================\n');

const basePath = 'C:\\Users\\Public\\nutri_meal_planner';

// 1. Verify Local Offline Asset Bundle
console.log('TEST 1: Verifying Local Offline Asset Files on Disk...');
const twExists = fs.existsSync(path.join(basePath, 'tailwind.js')) && fs.statSync(path.join(basePath, 'tailwind.js')).size > 100000;
assert(twExists, 'Local standalone tailwind.js exists (>100KB)');

const faCssExists = fs.existsSync(path.join(basePath, 'fontawesome', 'css', 'all.min.css')) && fs.statSync(path.join(basePath, 'fontawesome', 'css', 'all.min.css')).size > 50000;
assert(faCssExists, 'Local FontAwesome all.min.css exists (>50KB)');

const faSolid = fs.existsSync(path.join(basePath, 'fontawesome', 'webfonts', 'fa-solid-900.woff2'));
const faReg = fs.existsSync(path.join(basePath, 'fontawesome', 'webfonts', 'fa-regular-400.woff2'));
const faBrands = fs.existsSync(path.join(basePath, 'fontawesome', 'webfonts', 'fa-brands-400.woff2'));
assert(faSolid && faReg && faBrands, 'Local FontAwesome woff2 webfonts (solid, regular, brands) exist');

// 2. Verify Zero External CDN / Remote Dependencies in index.html
console.log('\nTEST 2: Verifying Zero External CDN / Remote Dependencies in index.html...');
const indexHtml = fs.readFileSync(path.join(basePath, 'index.html'), 'utf8');
const hasCdnTailwind = indexHtml.includes('cdn.tailwindcss.com');
const hasCdnFontAwesome = indexHtml.includes('cdnjs.cloudflare.com');
const hasGoogleFonts = indexHtml.includes('fonts.googleapis.com');
const hasCdnChartJs = indexHtml.includes('cdn.jsdelivr.net');
const hasHttp = /https?:\/\//i.test(indexHtml);

assert(!hasCdnTailwind, 'index.html has NO cdn.tailwindcss.com');
assert(!hasCdnFontAwesome, 'index.html has NO cdnjs.cloudflare.com');
assert(!hasGoogleFonts, 'index.html has NO fonts.googleapis.com');
assert(!hasCdnChartJs, 'index.html has NO cdn.jsdelivr.net');
assert(!hasHttp, 'index.html has ZERO http/https external URLs');

// 3. Load Engine Modules (CommonJS)
console.log('\nTEST 3: Loading Engine Modules in Isolated Node runtime...');
const { DISH_DATABASE } = require(path.join(basePath, 'dishes.js'));
const { NutritionEngine } = require(path.join(basePath, 'nutrition-engine.js'));
const { NutriMealCompensationEngine } = require(path.join(basePath, 'compensation-engine.js'));
const { NutriMealMLEngine } = require(path.join(basePath, 'ml-engine.js'));

assert(Array.isArray(DISH_DATABASE) && DISH_DATABASE.length > 50, `DISH_DATABASE loaded with ${DISH_DATABASE ? DISH_DATABASE.length : 0} regional dishes`);
assert(typeof NutritionEngine === 'function', 'NutritionEngine class loaded');
assert(typeof NutriMealCompensationEngine === 'function', 'NutriMealCompensationEngine class loaded');
assert(typeof NutriMealMLEngine === 'function', 'NutriMealMLEngine class loaded');

const nutrition = new NutritionEngine();
const compensation = new NutriMealCompensationEngine();
const ml = new NutriMealMLEngine();

// 4. Test Pediatric Formulas (1-18 yrs)
console.log('\nTEST 4: Pediatric Nutritional Targets (Ages 1-18)...');
const toddlerReq = nutrition.calculateTargets({
  age: 2, gender: 'male', weight: 12, height: 85, activity: 'moderate', goal: 'maintain'
});
assert(toddlerReq.targetCalories >= 900 && toddlerReq.targetCalories <= 1300, `2yo toddler calories within ICMR range: ${toddlerReq.targetCalories} kcal`);
assert(toddlerReq.macros.protein >= 12, `2yo toddler protein adequate: ${toddlerReq.macros.protein} g`);

const childReq = nutrition.calculateTargets({
  age: 10, gender: 'female', weight: 32, height: 138, activity: 'moderate', goal: 'maintain'
});
assert(childReq.targetCalories >= 1500 && childReq.targetCalories <= 2200, `10yo child calories within range: ${childReq.targetCalories} kcal`);
assert(childReq.macros.protein >= 30, `10yo child protein adequate: ${childReq.macros.protein} g`);

const teenReq = nutrition.calculateTargets({
  age: 16, gender: 'male', weight: 58, height: 172, activity: 'active', goal: 'muscle_gain'
});
assert(teenReq.targetCalories >= 2300 && teenReq.macros.protein >= 65, `16yo active teen calories (${teenReq.targetCalories}) and protein (${teenReq.macros.protein}g) adequate for growth`);

// 5. Test Acute Illness Adaptation
console.log('\nTEST 5: Acute Illness Adjustments (Fever/Cold/Viral/Lite)...');
const normalReq = nutrition.calculateTargets({
  age: 30, gender: 'male', weight: 70, height: 175, activity: 'moderate', goal: 'maintain', healthStatus: 'normal'
});
const feverReq = nutrition.calculateTargets({
  age: 30, gender: 'male', weight: 70, height: 175, activity: 'moderate', goal: 'maintain', healthStatus: 'fever'
});
const viralReq = nutrition.calculateTargets({
  age: 30, gender: 'male', weight: 70, height: 175, activity: 'moderate', goal: 'maintain', healthStatus: 'viral'
});
const liteReq = nutrition.calculateTargets({
  age: 30, gender: 'male', weight: 70, height: 175, activity: 'moderate', goal: 'maintain', healthStatus: 'lite'
});

assert(feverReq.targetCalories < normalReq.targetCalories, `Fever reduces digestive metabolic strain (${feverReq.targetCalories} kcal vs normal ${normalReq.targetCalories} kcal)`);
assert(viralReq.targetCalories < normalReq.targetCalories, `Viral infection lowers caloric strain to prioritize immunity (${viralReq.targetCalories} kcal)`);
assert(liteReq.targetCalories < normalReq.targetCalories, `Lite eating activates gut rest mode (${liteReq.targetCalories} kcal)`);

// 6. Test Non-Veg Cultural Days
console.log('\nTEST 6: Cultural Non-Veg & Vegetarian Days...');
const nonVegDishes = DISH_DATABASE.filter(d => d.isVeg === false);
const pureVegDishes = DISH_DATABASE.filter(d => d.isVeg === true);
assert(nonVegDishes.length >= 8, `Database has ${nonVegDishes.length} curated non-veg dishes`);
assert(pureVegDishes.length >= 30, `Database has ${pureVegDishes.length} curated pure-veg dishes`);

// 7. Test Deficit Compensation Engine
console.log('\nTEST 7: Next-Day Deficit Compensation Engine...');
const planned = { calories: 2000, carbs: 250, protein: 70, fat: 55 };
const sampleMeal = DISH_DATABASE[0];
// Log a half-eaten meal (0.5 eaten ratio)
compensation.logMealIntake('2026-11-07', 'lunch', sampleMeal, 0.5, planned);
const compReport = compensation.getCompensatoryAdjustment('2026-11-07', planned, []);

assert(compReport.hasCompensation === true, 'Compensation engine detects intake deficit from yesterday');
assert(compReport.safeCalorieRecovery > 0, `Safely scheduled calorie compensation: +${compReport.safeCalorieRecovery} kcal`);
assert(compReport.boostFactors.portionScale >= 1.0, `Calculated portion scaling boost factor: ${compReport.boostFactors.portionScale}x`);

// 8. Test Machine Learning Engine
console.log('\nTEST 8: Machine Learning Preference & Adaptation Engine...');
const context = { season: 'winter', weather: 'sunny', illness: 'none' };
ml.learnFromMealOutcome(sampleMeal.name, context, 1.0);
ml.learnFromMealOutcome(sampleMeal.name, context, 1.0);
const scoreLiked = ml.predictAdherence(sampleMeal, context);

assert(scoreLiked.probability >= 0.5, `ML predicts high adherence for liked dish: ${(scoreLiked.probability * 100).toFixed(1)}%`);

// 9. Test Android APK Delivery
console.log('\nTEST 9: Android Standalone APK Build Delivery...');
const desktopApk = 'C:\\Users\\#Rajan Appa Gawade\\Desktop\\NutriMeal-AI.apk';
const publicApk = 'C:\\Users\\Public\\nutri_meal_planner\\NutriMeal-AI.apk';
const scratchApk = 'C:\\Users\\#Rajan Appa Gawade\\.gemini\\antigravity\\scratch\\nutri_meal_planner_android\\NutriMeal-AI.apk';

const dExists = fs.existsSync(desktopApk) && fs.statSync(desktopApk).size > 10000000;
const pExists = fs.existsSync(publicApk) && fs.statSync(publicApk).size > 10000000;
const sExists = fs.existsSync(scratchApk) && fs.statSync(scratchApk).size > 10000000;

assert(dExists, `NutriMeal-AI.apk delivered to Desktop (~12MB): ${fs.existsSync(desktopApk) ? (fs.statSync(desktopApk).size / (1024*1024)).toFixed(2) + ' MB' : 'MISSING'}`);
assert(pExists, `NutriMeal-AI.apk mirrored in Public repo: ${fs.existsSync(publicApk) ? (fs.statSync(publicApk).size / (1024*1024)).toFixed(2) + ' MB' : 'MISSING'}`);
assert(sExists, `NutriMeal-AI.apk mirrored in Scratch: ${fs.existsSync(scratchApk) ? (fs.statSync(scratchApk).size / (1024*1024)).toFixed(2) + ' MB' : 'MISSING'}`);

console.log('\n====================================================');
console.log(`FINAL RESULT: ${passed} PASSED | ${failed} FAILED`);
console.log('====================================================\n');

process.exit(failed > 0 ? 1 : 0);
