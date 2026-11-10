/**
 * Comprehensive nutritional dish database with exact weights, macro/micronutrients,
 * preparation instructions, allergen flags, health condition compatibility,
 * and Nationality / Regional Cuisine classifications.
 */

const DISH_DATABASE = [

  // =========================================================================
  // 👶 PEDIATRIC & TODDLER SPECIALTIES (AGES 1 - 18)
  // =========================================================================
  {
    id: "b_kid_ragi_porridge",
    name: "Soft Sprouted Ragi & Mashed Banana Milk Porridge",
    category: "breakfast",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter", "monsoon", "spring", "all"],
    weather: ["cold", "rainy", "all"],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    regions: ["south_asia", "global"],
    seasonalNote: "Gentle warm organic calcium and iron density for growing bones",
    isVeg: true,
    prepTime: "4 mins",
    cookTime: "6 mins",
    difficulty: "Very Easy",
    servingSize: "140g (Toddler Bowl)",
    weightGrams: 140,
    calories: 165,
    carbs: 32,
    protein: 5,
    fat: 2,
    fiber: 4,
    sugar: 4,
    sodium: 45,
    vitamins: { vitaminC: 8, vitaminD: 0.5, vitaminB12: 0.4, iron: 2.8, calcium: 240, zinc: 1.4 },
    allergens: ["dairy"],
    conditions: ["diabetes", "hypertension", "gerd"],
    ageRange: [1, 18],
    texture: "soft",
    ingredients: [
      { item: "Sprouted Ragi (Finger Millet) flour", qty: "25g" },
      { item: "Boiled Cow Milk or Almond Milk", qty: "100ml" },
      { item: "Fresh Ripe Banana (mashed)", qty: "30g" },
      { item: "Ghee", qty: "2g" },
      { item: "Pinch of Cardamom powder", qty: "pinch" }
    ],
    recipeSteps: [
      "Whisk ragi flour with 50ml water without lumps.",
      "Simmer on low flame for 4 minutes until thick and glossy.",
      "Stir in warm milk, ghee, and cardamom.",
      "Fold in mashed sweet banana for natural gentle sweetness.",
      "Cool to lukewarm and feed in small soft spoonfuls."
    ],
    healthNote: "Exceptional organic calcium (240mg) supporting rapid toddler and child skeletal growth."
  },
  {
    id: "l_kid_moong_khichdi",
    name: "Gentle Yellow Moong Dal Khichdi with Steamed Pureed Veggies & Ghee",
    category: "lunch",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["all"],
    weather: ["all"],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    regions: ["south_asia", "global"],
    seasonalNote: "Easiest digestible complementary protein meal on earth for little tummies",
    isVeg: true,
    prepTime: "6 mins",
    cookTime: "12 mins",
    difficulty: "Very Easy",
    servingSize: "160g (Soft Pediatric Serving)",
    weightGrams: 160,
    calories: 195,
    carbs: 34,
    protein: 8,
    fat: 4,
    fiber: 5,
    sugar: 1,
    sodium: 120,
    vitamins: { vitaminC: 12, vitaminD: 0.1, vitaminB12: 0.2, iron: 2.4, calcium: 60, zinc: 1.5 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "gerd", "fatty_liver"],
    ageRange: [1, 18],
    texture: "soft",
    ingredients: [
      { item: "Yellow Moong Dal & Rice (50:50 ratio, well cooked)", qty: "40g dry" },
      { item: "Pureed Carrots & Bottle Gourd", qty: "40g" },
      { item: "Pure Desi Cow Ghee", qty: "3g" },
      { item: "Cumin powder, Turmeric & light Salt", qty: "pinch" }
    ],
    recipeSteps: [
      "Pressure cook moong dal, rice, carrots, and bottle gourd with 4x water until melt-in-mouth soft.",
      "Mash gently with the back of a ladle.",
      "Temper with 1/2 tsp ghee and a pinch of roasted cumin powder.",
      "Serve warm, silky, and easy to swallow."
    ],
    healthNote: "Gentlest meal for young gastrointestinal tracts, building lean tissue without flatulence or colic."
  },
  {
    id: "d_kid_lentil_mash",
    name: "Mild Red Lentil & Spinach Soup with Soft Phulka Fingers",
    category: "dinner",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["all"],
    weather: ["all"],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    regions: ["south_asia", "global"],
    seasonalNote: "Soothing evening dinner with bioavailable iron & gentle fiber",
    isVeg: true,
    prepTime: "6 mins",
    cookTime: "10 mins",
    difficulty: "Very Easy",
    servingSize: "160g (Soft Soup & 1 Small Soft Phulka)",
    weightGrams: 160,
    calories: 180,
    carbs: 30,
    protein: 8,
    fat: 3,
    fiber: 5,
    sugar: 1,
    sodium: 110,
    vitamins: { vitaminC: 15, vitaminD: 0, vitaminB12: 0, iron: 2.9, calcium: 55, zinc: 1.3 },
    allergens: ["gluten"],
    conditions: ["diabetes", "hypertension", "gerd"],
    ageRange: [1, 18],
    texture: "soft",
    ingredients: [
      { item: "Red Masoor Dal (Split Red Lentils, pureed)", qty: "30g dry" },
      { item: "Blanched Baby Spinach Puree", qty: "30g" },
      { item: "Soft Whole Wheat Phulka cut in finger strips", qty: "1 small (25g)" },
      { item: "Desi Ghee", qty: "2g" }
    ],
    recipeSteps: [
      "Boil red lentils with spinach puree, a pinch of turmeric, and light salt.",
      "Mash or blend into a velvety, creamy warm soup.",
      "Drizzle 1/2 tsp ghee.",
      "Serve with warm soft phulka strips that children can dip and eat easily."
    ],
    healthNote: "Red lentils cook in minutes and are naturally low in complex oligosaccharides, preventing evening gas or digestive distress."
  },
  {
    id: "s_kid_fruit_puree",
    name: "Mashed Papaya & Stewed Apple with Chia & Warm Milk",
    category: "snack",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["all"],
    weather: ["all"],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    regions: ["south_asia", "global"],
    seasonalNote: "Gentle natural enzymes and vitamins for child vitality",
    isVeg: true,
    prepTime: "3 mins",
    cookTime: "3 mins",
    difficulty: "Very Easy",
    servingSize: "90g (Snack Cup)",
    weightGrams: 90,
    calories: 75,
    carbs: 14,
    protein: 2,
    fat: 1,
    fiber: 3,
    sugar: 6,
    sodium: 20,
    vitamins: { vitaminC: 25, vitaminD: 0.2, vitaminB12: 0.2, iron: 0.8, calcium: 45, zinc: 0.5 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "gerd"],
    ageRange: [1, 18],
    texture: "soft",
    ingredients: [
      { item: "Stewed Sweet Apple or Ripe Papaya mash", qty: "60g" },
      { item: "Warm Cow Milk or Plant Milk", qty: "30ml" },
      { item: "Fine Chia Seed powder", qty: "2g" }
    ],
    recipeSteps: [
      "Steam or stew peeled apple slices for 3 minutes until tender; mash with ripe papaya.",
      "Stir in warm milk and a pinch of powdered chia seeds.",
      "Serve warm as a soothing mid-afternoon fruit snack."
    ],
    healthNote: "Papain enzymes from papaya and pectin from apples maintain smooth regular bowel movements in growing children."
  },

  // =========================================================================
  // 🇮🇳 INDIAN CUISINE
  // =========================================================================

  // Breakfast - Veg (Indian)
  {
    id: "b_ind_veg_1",
    name: "Moong Dal & Spinach Chilla with Mint Yogurt",
    category: "breakfast",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter","monsoon","spring","autumn"],
    weather: ["cold","rainy","moderate"],
    months: [1,2,7,8,9,10,11,12],
    regions: ["south_asia","global"],
    seasonalNote: "Warming ginger & yellow moong comfort ideal for cold & rainy months",
    isVeg: true,
    prepTime: "10 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    servingSize: "2 medium chillas (160g) + Mint Yogurt (50g)",
    weightGrams: 210,
    calories: 275,
    carbs: 34,
    protein: 16,
    fat: 7,
    fiber: 8,
    sugar: 3,
    sodium: 290,
    vitamins: { vitaminC: 18, vitaminD: 0.2, vitaminB12: 0.4, iron: 4.1, calcium: 140, zinc: 1.8 },
    allergens: ["dairy"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Yellow Moong Dal (soaked & blended)", qty: "80g" },
      { item: "Finely Chopped Spinach (Palak)", qty: "40g" },
      { item: "Grated Ginger & Green Chili", qty: "5g" },
      { item: "Cold-Pressed Mustard or Olive Oil", qty: "5g (1 tsp)" },
      { item: "Fresh Low-Fat Curd/Yogurt with Mint", qty: "50g" },
      { item: "Pinch of Cumin, Turmeric & Rock Salt", qty: "to taste" }
    ],
    recipeSteps: [
      "Blend soaked moong dal with ginger, turmeric, and water into a smooth pouring batter.",
      "Stir in finely chopped spinach and a pinch of cumin and rock salt.",
      "Heat a tawa with half a teaspoon of oil. Pour a ladle of batter and spread into a thin circle.",
      "Cook for 2-3 minutes until golden brown, flip and cook the other side.",
      "Serve warm with refreshing mint-infused low-fat yogurt."
    ],
    healthNote: "High plant protein and soluble fiber with a very low glycemic index, stabilizing blood glucose."
  },
  {
    id: "b_ind_veg_2",
    name: "Vegetable Oats Porridge / Savory Upma",
    category: "breakfast",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter","monsoon","all"],
    weather: ["cold","rainy","moderate"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["south_asia","north_america","global"],
    seasonalNote: "Nutritious all-weather warm savory oatmeal bowl",
    isVeg: true,
    prepTime: "5 mins",
    cookTime: "10 mins",
    difficulty: "Very Easy",
    servingSize: "1 medium bowl (220g)",
    weightGrams: 220,
    calories: 230,
    carbs: 36,
    protein: 9,
    fat: 5,
    fiber: 7,
    sugar: 2,
    sodium: 240,
    vitamins: { vitaminC: 14, vitaminD: 0, vitaminB12: 0, iron: 2.8, calcium: 65, zinc: 1.6 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Rolled Oats", qty: "45g" },
      { item: "Finely Diced Carrots & French Beans", qty: "50g" },
      { item: "Green Peas (fresh or frozen)", qty: "25g" },
      { item: "Mustard Seeds & Curry Leaves", qty: "1/2 tsp" },
      { item: "Olive oil or Ghee", qty: "5g (1 tsp)" },
      { item: "Water", qty: "180ml" },
      { item: "Fresh Lemon Juice & Coriander", qty: "for garnish" }
    ],
    recipeSteps: [
      "Heat oil in a small pan, splutter mustard seeds and curry leaves.",
      "Add diced carrots, beans, and peas; sauté for 2 minutes with a pinch of turmeric.",
      "Add rolled oats and roast lightly for 1 minute.",
      "Pour 180ml warm water, add rock salt, and simmer covered for 4-5 minutes until tender.",
      "Squeeze fresh lemon juice, garnish with coriander, and serve warm."
    ],
    healthNote: "Rich in beta-glucan soluble fiber which actively reduces LDL cholesterol and prevents glucose spikes."
  },
  {
    id: "b_ind_veg_3",
    name: "Traditional Vegetable Poha with Sprouts & Peanuts",
    category: "breakfast",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["summer","spring","monsoon"],
    weather: ["hot","moderate","rainy"],
    months: [3,4,5,6,7,8],
    regions: ["south_asia"],
    seasonalNote: "Light hydrator with vitamin C from lemon, perfect for warm mornings",
    isVeg: true,
    prepTime: "8 mins",
    cookTime: "7 mins",
    difficulty: "Very Easy",
    servingSize: "1 plate (200g)",
    weightGrams: 200,
    calories: 285,
    carbs: 45,
    protein: 8,
    fat: 8,
    fiber: 5,
    sugar: 2,
    sodium: 250,
    vitamins: { vitaminC: 22, vitaminD: 0, vitaminB12: 0, iron: 4.8, calcium: 45, zinc: 1.3 },
    allergens: ["nuts"],
    conditions: ["hypertension", "cholesterol", "gerd"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Thick Flattened Rice (Poha), rinsed", qty: "50g raw" },
      { item: "Steamed Moong Sprouts", qty: "30g" },
      { item: "Roasted Peanuts", qty: "10g" },
      { item: "Finely chopped Onion & Carrot", qty: "40g" },
      { item: "Mustard seeds, Curry leaves, Turmeric & Lemon", qty: "to taste" },
      { item: "Cold-Pressed Peanut or Sunflower Oil", qty: "5g" }
    ],
    recipeSteps: [
      "Rinse poha in a colander for 30 seconds and drain completely; fluff with fingers.",
      "Heat oil in a pan, add mustard seeds, curry leaves, and green chili.",
      "Add onions, carrots, roasted peanuts, and steamed sprouts; sauté for 3 minutes.",
      "Add turmeric, salt, and damp poha; toss gently on low flame for 2 minutes.",
      "Drizzle fresh lemon juice and coriander before serving."
    ],
    healthNote: "Naturally high in iron due to traditional beating process; vitamin C from lemon enhances iron absorption."
  },
  {
    id: "b_ind_veg_4",
    name: "Steamed Idli with Drumstick Vegetable Sambar",
    category: "breakfast",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["summer","monsoon","all"],
    weather: ["hot","rainy","moderate"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["south_asia","global"],
    seasonalNote: "Fermented gut-friendly steamed breakfast, easy to digest in humid rainy seasons",
    isVeg: true,
    prepTime: "5 mins",
    cookTime: "12 mins",
    difficulty: "Easy",
    servingSize: "2 steamed idlis (100g) + 1 bowl Sambar (150g)",
    weightGrams: 250,
    calories: 250,
    carbs: 46,
    protein: 9,
    fat: 3,
    fiber: 6,
    sugar: 3,
    sodium: 320,
    vitamins: { vitaminC: 16, vitaminD: 0, vitaminB12: 0, iron: 2.1, calcium: 70, zinc: 1.4 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "cholesterol", "gerd", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Fermented Rice & Urad Dal Idli Batter", qty: "100g" },
      { item: "Toor Dal (Pigeon pea lentil, cooked)", qty: "60g" },
      { item: "Drumsticks, Bottle gourd & Tomatoes", qty: "60g" },
      { item: "Sambar Masala, Hing & Curry leaves", qty: "1 tsp" },
      { item: "Mustard seeds & Oil", qty: "3g" }
    ],
    recipeSteps: [
      "Steam fermented batter in idli molds for 10 minutes until fluffy.",
      "Boil cooked toor dal with drumstick, bottle gourd, tomato, sambar powder, and water.",
      "Temper with mustard seeds and curry leaves; simmer for 5 minutes.",
      "Serve warm idlis dipped in nutrient-rich vegetable sambar."
    ],
    healthNote: "Fermentation increases bioavailability of B-vitamins and improves gut microbiome balance. Zero oil in idli steaming."
  },

  // Breakfast - Non-Veg (Indian) - Wed, Fri, Sun
  {
    id: "b_ind_nonveg_1",
    name: "Indian Masala Egg Bhurji (Scramble) with 1 Whole Wheat Roti",
    category: "breakfast",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter","monsoon"],
    weather: ["cold","rainy","moderate"],
    months: [1,2,7,8,9,10,11,12],
    regions: ["south_asia"],
    seasonalNote: "High thermogenic spice egg scramble providing internal body warmth",
    isVeg: false,
    prepTime: "6 mins",
    cookTime: "8 mins",
    difficulty: "Easy",
    servingSize: "Egg Bhurji (140g) + 1 Whole Wheat Roti (35g)",
    weightGrams: 175,
    calories: 295,
    carbs: 22,
    protein: 18,
    fat: 15,
    fiber: 4,
    sugar: 2,
    sodium: 320,
    vitamins: { vitaminC: 12, vitaminD: 1.9, vitaminB12: 1.3, iron: 3.1, calcium: 90, zinc: 2.4 },
    allergens: ["eggs", "gluten"],
    conditions: ["diabetes", "hypertension", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Whole Eggs (whisked)", qty: "2 eggs (100g)" },
      { item: "Finely Chopped Onion, Tomato & Bell Pepper", qty: "60g" },
      { item: "Green chili, ginger & turmeric", qty: "1/2 tsp" },
      { item: "Cold pressed oil", qty: "5g (1 tsp)" },
      { item: "Whole Wheat Soft Roti (Phulka)", qty: "1 piece (35g)" },
      { item: "Fresh Coriander", qty: "garnish" }
    ],
    recipeSteps: [
      "Heat 1 tsp oil in a pan, add chopped ginger, onions, tomatoes, and capsicum. Sauté for 3 minutes.",
      "Add turmeric, salt, and black pepper.",
      "Pour whisked eggs into the skillet. Stir gently on medium-low heat for 2-3 minutes until soft curds form.",
      "Garnish with chopped coriander and serve with a warm whole wheat phulka."
    ],
    healthNote: "Low-glycemic and deeply satisfying breakfast providing sustained energy without mid-morning lethargy."
  },
  {
    id: "b_ind_nonveg_2",
    name: "Boiled Eggs (2) with Chaat Masala & Multigrain Toast",
    category: "breakfast",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["south_asia","global"],
    seasonalNote: "Universal year-round bioavailable protein",
    isVeg: false,
    prepTime: "5 mins",
    cookTime: "8 mins",
    difficulty: "Very Easy",
    servingSize: "2 whole eggs (100g) + 1 toast (35g) + Sliced Tomato/Cucumber (70g)",
    weightGrams: 205,
    calories: 270,
    carbs: 18,
    protein: 17,
    fat: 14,
    fiber: 3,
    sugar: 3,
    sodium: 280,
    vitamins: { vitaminC: 15, vitaminD: 2.1, vitaminB12: 1.4, iron: 2.7, calcium: 85, zinc: 2.2 },
    allergens: ["eggs", "gluten"],
    conditions: ["diabetes", "hypertension", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "regular",
    ingredients: [
      { item: "Fresh Eggs (Grade A)", qty: "2 whole eggs (100g)" },
      { item: "Multigrain Bread", qty: "1 slice (35g)" },
      { item: "Fresh Cucumber & Tomato slices", qty: "70g" },
      { item: "Chaat masala, Black pepper & Salt", qty: "to taste" }
    ],
    recipeSteps: [
      "Boil eggs in boiling water for 8 minutes. Cool in water and peel.",
      "Cut in halves, dust with chaat masala and black pepper.",
      "Toast multigrain bread slice.",
      "Serve together with cool cucumber and tomato slices."
    ],
    healthNote: "High bioavailable choline for brain health, plus lutein and zeaxanthin for vision."
  },

  // Lunch - Veg (Indian)
  {
    id: "l_ind_veg_1",
    name: "Yellow Moong Dal Tadka + Steamed Brown Rice + Kachumber Salad + Curd",
    category: "lunch",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["south_asia","global"],
    seasonalNote: "Probiotic curd cooling for sunny days and comforting dal for cold days",
    isVeg: true,
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    servingSize: "Cooked Dal (180g) + Brown Rice (130g) + Salad (70g) + Curd (80g)",
    weightGrams: 460,
    calories: 465,
    carbs: 72,
    protein: 21,
    fat: 9,
    fiber: 11,
    sugar: 5,
    sodium: 380,
    vitamins: { vitaminC: 25, vitaminD: 0.2, vitaminB12: 0.5, iron: 4.8, calcium: 210, zinc: 3.1 },
    allergens: ["dairy"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Yellow Moong Dal (cooked thick)", qty: "180g" },
      { item: "Steamed Brown Rice", qty: "130g cooked" },
      { item: "Kachumber (Diced Cucumber, Tomato, Radish)", qty: "70g" },
      { item: "Low-Fat Fresh Curd / Dahi", qty: "80g" },
      { item: "Cumin, Hing (Asafoetida), Garlic & Turmeric", qty: "1 tsp" },
      { item: "Cold-Pressed Ghee or Mustard Oil", qty: "5g (1 tsp)" }
    ],
    recipeSteps: [
      "Pressure cook washed moong dal with turmeric, tomato, and water for 3 whistles.",
      "In a small pan, heat 1 tsp ghee, add cumin seeds, crushed garlic, and a pinch of hing.",
      "Pour tadka into the dal and simmer for 2 minutes.",
      "Assemble plate with dal, brown rice, kachumber salad, and cooling probiotic curd."
    ],
    healthNote: "Classic complementary plant protein pairing (lentils + grain) delivering all essential amino acids."
  },
  {
    id: "l_ind_veg_2",
    name: "Palak Paneer + 2 Whole Wheat Phulkas + Sprout Salad",
    category: "lunch",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter","spring"],
    weather: ["cold","moderate"],
    months: [11,12,1,2,3],
    regions: ["south_asia"],
    seasonalNote: "Peak winter crop fresh tender spinach loaded with organic iron",
    isVeg: true,
    prepTime: "12 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    servingSize: "Palak Paneer (180g) + 2 Phulkas (70g) + Sprout Salad (60g)",
    weightGrams: 310,
    calories: 480,
    carbs: 48,
    protein: 24,
    fat: 20,
    fiber: 10,
    sugar: 4,
    sodium: 390,
    vitamins: { vitaminC: 32, vitaminD: 0.4, vitaminB12: 0.8, iron: 5.6, calcium: 380, zinc: 3.4 },
    allergens: ["dairy", "gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Fresh Spinach (Palak) blanched & pureed", qty: "120g" },
      { item: "Low-Fat Fresh Paneer (cubed)", qty: "70g" },
      { item: "Onion, Garlic & Ginger paste", qty: "30g" },
      { item: "Whole Wheat Phulkas (Rotis)", qty: "2 units (70g)" },
      { item: "Steamed Moong Sprouts Salad with lemon", qty: "60g" },
      { item: "Oil or Ghee", qty: "6g" }
    ],
    recipeSteps: [
      "Blanch spinach in boiling water for 2 minutes, shock in cold water, and puree.",
      "Sauté ginger, garlic, and onions in 1 tsp oil until translucent.",
      "Add cumin, coriander powder, turmeric, and pour the spinach puree.",
      "Gently add paneer cubes and simmer on low for 4 minutes.",
      "Serve hot with 2 fresh phulkas and nutrient-dense sprouted moong salad."
    ],
    healthNote: "Immense iron and calcium density from spinach and paneer, fortified by vitamin C in the sprout salad."
  },
  {
    id: "l_ind_veg_3",
    name: "Rajma (Red Kidney Beans) Curry + Jeera Brown Rice + Sliced Beetroot & Cucumber",
    category: "lunch",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter","monsoon"],
    weather: ["cold","rainy"],
    months: [1,2,7,8,9,10,11,12],
    regions: ["south_asia","north_america"],
    seasonalNote: "Hearty slow-burning warmth and massive fiber for cold weather vitality",
    isVeg: true,
    prepTime: "10 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    servingSize: "Rajma Curry (200g) + Jeera Brown Rice (140g) + Salad (60g)",
    weightGrams: 400,
    calories: 470,
    carbs: 76,
    protein: 19,
    fat: 8,
    fiber: 14,
    sugar: 4,
    sodium: 360,
    vitamins: { vitaminC: 18, vitaminD: 0, vitaminB12: 0, iron: 5.2, calcium: 130, zinc: 2.8 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Red Kidney Beans (Rajma, boiled)", qty: "180g boiled" },
      { item: "Tomato, Onion & Ginger gravy base", qty: "70g" },
      { item: "Cooked Brown Rice tempered with cumin", qty: "140g" },
      { item: "Sliced Beetroot and Cucumber", qty: "60g" },
      { item: "Mustard oil", qty: "5g" }
    ],
    recipeSteps: [
      "Prepare onion-tomato-ginger masala in a pan with 1 tsp oil.",
      "Add boiled rajma with broth; mash a few beans to naturally thicken the curry.",
      "Simmer for 10-12 minutes on low flame to absorb flavors.",
      "Serve alongside warm cumin-scented brown rice and sliced beets."
    ],
    healthNote: "Highest soluble fiber meal (14g) which binds bile acids in the intestine, directly lowering bloodstream LDL cholesterol."
  },

  // Lunch - Non-Veg (Indian) - Wed, Fri, Sun
  {
    id: "l_ind_nonveg_1",
    name: "Homestyle Chicken Curry + Steamed Brown Rice + Kachumber Salad",
    category: "lunch",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter","monsoon","autumn"],
    weather: ["cold","rainy"],
    months: [1,2,7,8,9,10,11,12],
    regions: ["south_asia"],
    seasonalNote: "Warming whole spices and high biological value lean protein",
    isVeg: false,
    prepTime: "12 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    servingSize: "Chicken Curry (200g, incl 120g lean chicken breast) + Rice (140g) + Salad (70g)",
    weightGrams: 410,
    calories: 490,
    carbs: 48,
    protein: 38,
    fat: 12,
    fiber: 6,
    sugar: 3,
    sodium: 410,
    vitamins: { vitaminC: 22, vitaminD: 0.5, vitaminB12: 1.8, iron: 3.6, calcium: 95, zinc: 3.8 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Skinless Boneless Chicken Breast (cubed)", qty: "120g" },
      { item: "Onion, Tomato, Garlic & Ginger gravy", qty: "90g" },
      { item: "Steamed Brown Rice", qty: "140g cooked" },
      { item: "Kachumber (Cucumber, Onion, Tomato, Cilantro)", qty: "70g" },
      { item: "Mustard or Olive oil", qty: "6g" }
    ],
    recipeSteps: [
      "Marinate chicken with turmeric, lemon, and salt for 10 minutes.",
      "Sauté chopped onions, ginger, and garlic in 1 tsp oil; stir in tomato puree.",
      "Add chicken cubes, sear for 3 minutes, then add 100ml water and simmer covered for 12 minutes.",
      "Serve warm with steamed brown rice and crisp kachumber salad."
    ],
    healthNote: "Lean high-biological-value protein powerhouse (38g) fostering muscle synthesis and metabolic rate enhancement."
  },
  {
    id: "l_ind_nonveg_2",
    name: "Bengali Light Fish Curry (Rohu/Pomfret) + Steamed Rice + Green Salad",
    category: "lunch",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["monsoon","winter"],
    weather: ["rainy","cold","moderate"],
    months: [7,8,9,10,11,12,1,2],
    regions: ["south_asia"],
    seasonalNote: "Fresh catch fish curry in light nigella seed broth, classic monsoon immunity food",
    isVeg: false,
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    servingSize: "Fish Curry (130g fish + 100g light broth) + Rice (130g) + Salad (60g)",
    weightGrams: 420,
    calories: 440,
    carbs: 44,
    protein: 33,
    fat: 12,
    fiber: 5,
    sugar: 2,
    sodium: 350,
    vitamins: { vitaminC: 20, vitaminD: 8.8, vitaminB12: 3.4, iron: 3.1, calcium: 110, zinc: 2.7 },
    allergens: ["seafood"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Fresh Fish Fillet (Rohu, Pomfret or Salmon)", qty: "130g" },
      { item: "Light ginger-cumin-tomato broth with cauliflower/potato", qty: "100g" },
      { item: "Steamed Rice", qty: "130g" },
      { item: "Fresh Green Salad", qty: "60g" },
      { item: "Mustard oil", qty: "5g" }
    ],
    recipeSteps: [
      "Rub fish with salt and turmeric; sear for 2 minutes in mustard oil.",
      "In the same pan, add kalonji (nigella seeds), ginger paste, and tomato puree with 1.5 cups water.",
      "Simmer the fish gently in the light broth for 8 minutes.",
      "Serve warm with steamed rice and sliced cucumbers."
    ],
    healthNote: "High omega-3 content reduces triglycerides and enhances endothelial arterial elasticity."
  },

  // Dinner - Veg (Indian)
  {
    id: "d_ind_veg_1",
    name: "Lauki (Bottle Gourd) & Chana Dal + 2 Multigrain Phulkas + Cucumber Salad",
    category: "dinner",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["summer","monsoon"],
    weather: ["hot","rainy"],
    months: [3,4,5,6,7,8],
    regions: ["south_asia"],
    seasonalNote: "Bottle gourd has 92% water content, natural hydrator for scorching sunny days",
    isVeg: true,
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    servingSize: "Lauki Chana Dal (200g) + 2 Phulkas (70g) + Cucumber Salad (60g)",
    weightGrams: 330,
    calories: 380,
    carbs: 58,
    protein: 16,
    fat: 7,
    fiber: 12,
    sugar: 4,
    sodium: 320,
    vitamins: { vitaminC: 22, vitaminD: 0, vitaminB12: 0, iron: 4.5, calcium: 130, zinc: 2.2 },
    allergens: ["gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Bottle Gourd (Lauki/Doodhi), cubed", qty: "120g" },
      { item: "Chana Dal (soaked)", qty: "40g raw" },
      { item: "Tomato, Ginger & Green Chili", qty: "40g" },
      { item: "Multigrain Phulkas (Rotis)", qty: "2 units (70g)" },
      { item: "Cold-Pressed Ghee or Mustard Oil", qty: "5g" }
    ],
    recipeSteps: [
      "In a pressure cooker, combine soaked chana dal, diced bottle gourd, turmeric, tomato, ginger, and 1.5 cups water.",
      "Cook for 3 whistles until dal is tender.",
      "In a small pan, temper cumin seeds and hing in 1 tsp ghee; pour over the dal.",
      "Serve warm with 2 soft multigrain phulkas and cool cucumber slices."
    ],
    healthNote: "High water content and soluble fiber makes bottle gourd the gold standard for evening digestion, blood pressure, and nighttime glycemic control."
  },
  {
    id: "d_ind_veg_2",
    name: "Methi Paneer Bhurji + 2 Soft Jowar / Wheat Phulkas + Mint Chaas",
    category: "dinner",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter"],
    weather: ["cold"],
    months: [11,12,1,2],
    regions: ["south_asia"],
    seasonalNote: "Winter fenugreek (methi) controls cold-induced insulin resistance",
    isVeg: true,
    prepTime: "8 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    servingSize: "Methi Paneer (160g) + 2 Phulkas (70g) + Chaas (150ml)",
    weightGrams: 380,
    calories: 410,
    carbs: 44,
    protein: 21,
    fat: 16,
    fiber: 9,
    sugar: 3,
    sodium: 350,
    vitamins: { vitaminC: 28, vitaminD: 0.3, vitaminB12: 0.7, iron: 4.8, calcium: 360, zinc: 2.9 },
    allergens: ["dairy", "gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Fresh Fenugreek (Methi) leaves, chopped", qty: "60g" },
      { item: "Crumbled Low-Fat Paneer", qty: "80g" },
      { item: "Finely Chopped Onion & Tomato", qty: "40g" },
      { item: "Jowar or Whole Wheat Rotis", qty: "2 units (70g)" },
      { item: "Fresh Mint Buttermilk", qty: "150ml" },
      { item: "Oil or Ghee", qty: "5g" }
    ],
    recipeSteps: [
      "Sauté cumin and chopped onions in 1 tsp oil until pink.",
      "Add fresh methi leaves and sauté for 3 minutes until wilted.",
      "Stir in tomatoes, turmeric, coriander powder, and salt.",
      "Add crumbled paneer, toss gently on low heat for 2 minutes.",
      "Serve warm with 2 rotis and soothing mint buttermilk."
    ],
    healthNote: "Fenugreek (methi) contains trigonelline and 4-hydroxyisoleucine, clinically proven to enhance insulin secretion and glucose tolerance."
  },

  // Dinner - Non-Veg (Indian) - Wed, Fri, Sun
  {
    id: "d_ind_nonveg_1",
    name: "Light Chicken Shorba (Broth) with Shredded Chicken + 1 Phulka + Salad",
    category: "dinner",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["winter","monsoon"],
    weather: ["cold","rainy"],
    months: [1,2,7,8,9,10,11,12],
    regions: ["south_asia"],
    seasonalNote: "Medicinal warming chicken broth that clears nasal congestion in winter",
    isVeg: false,
    prepTime: "8 mins",
    cookTime: "15 mins",
    difficulty: "Very Easy",
    servingSize: "Chicken Shorba (130g chicken + 150ml broth) + 1 Phulka (35g) + Salad (60g)",
    weightGrams: 375,
    calories: 350,
    carbs: 28,
    protein: 38,
    fat: 10,
    fiber: 5,
    sugar: 2,
    sodium: 360,
    vitamins: { vitaminC: 20, vitaminD: 0.5, vitaminB12: 1.9, iron: 3.4, calcium: 80, zinc: 3.9 },
    allergens: ["gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Shredded Lean Chicken Breast", qty: "130g" },
      { item: "Aromatic Cardamom, Clove, Black Pepper & Ginger broth", qty: "150ml" },
      { item: "Whole Wheat Soft Phulka", qty: "1 unit (35g)" },
      { item: "Cucumber & Lemon Salad", qty: "60g" },
      { item: "Ghee", qty: "4g" }
    ],
    recipeSteps: [
      "Boil chicken breast with crushed ginger, garlic, cloves, black pepper, and turmeric for 12 minutes.",
      "Shred the cooked chicken into bite-sized strips.",
      "Strain broth and temper with 1/2 tsp ghee and cumin seeds.",
      "Combine shredded chicken with warm shorba broth and fresh coriander.",
      "Serve hot with 1 soft phulka."
    ],
    healthNote: "High protein, ultra-light evening digestion that eliminates nocturnal acidity and acid reflux."
  },

  // Snack - Indian
  {
    id: "s_ind_veg_1",
    name: "Roasted Makhana (Foxnuts) with Cumin & Turmeric",
    category: "snack",
    cuisine: "indian",
    cuisineName: "Indian",
    cuisineFlag: "🇮🇳",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["south_asia","global"],
    seasonalNote: "Light year-round anti-inflammatory snack",
    isVeg: true,
    prepTime: "2 mins",
    cookTime: "5 mins",
    difficulty: "Very Easy",
    servingSize: "1 medium bowl (30g)",
    weightGrams: 30,
    calories: 125,
    carbs: 22,
    protein: 4,
    fat: 2,
    fiber: 4,
    sugar: 0,
    sodium: 140,
    vitamins: { vitaminC: 1, vitaminD: 0, vitaminB12: 0, iron: 1.4, calcium: 50, zinc: 0.9 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd", "thyroid"],
    ageRange: [1, 90],
    texture: "regular",
    ingredients: [
      { item: "Plain Foxnuts (Phool Makhana)", qty: "30g" },
      { item: "Ghee or Olive oil", qty: "3g" },
      { item: "Roasted Cumin powder, Turmeric & Rock Salt", qty: "1/2 tsp" }
    ],
    recipeSteps: [
      "Heat ghee in a pan on medium-low flame.",
      "Add makhana and roast stirring continuously for 4-5 minutes until crisp.",
      "Sprinkle cumin, turmeric, and pink rock salt; toss well.",
      "Cool slightly and enjoy crunchy guilt-free snacking."
    ],
    healthNote: "Low sodium, zero cholesterol snack packed with kaempferol antioxidant for anti-aging and anti-inflammatory benefits."
  },

  // =========================================================================
  // 🇺🇸 AMERICAN / WESTERN CUISINE
  // =========================================================================

  // Breakfast - Veg (American)
  {
    id: "b_usa_veg_1",
    name: "Cinnamon Berry Steel-Cut Oatmeal with Chia & Crushed Walnuts",
    category: "breakfast",
    cuisine: "american",
    cuisineName: "American",
    cuisineFlag: "🇺🇸",
    seasons: ["winter","autumn","spring"],
    weather: ["cold","moderate"],
    months: [9,10,11,12,1,2,3],
    regions: ["north_america","europe"],
    seasonalNote: "Warming cinnamon oatmeal with winter-stored walnuts and chia",
    isVeg: true,
    prepTime: "4 mins",
    cookTime: "8 mins",
    difficulty: "Very Easy",
    servingSize: "1 warm bowl (230g)",
    weightGrams: 230,
    calories: 270,
    carbs: 42,
    protein: 9,
    fat: 8,
    fiber: 8,
    sugar: 5,
    sodium: 110,
    vitamins: { vitaminC: 15, vitaminD: 0.4, vitaminB12: 0.3, iron: 3.2, calcium: 160, zinc: 2.1 },
    allergens: ["nuts"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Rolled / Steel-cut Oats", qty: "45g dry" },
      { item: "Low-fat milk or unsweetened almond milk", qty: "150ml" },
      { item: "Fresh Blueberries or Strawberries", qty: "40g" },
      { item: "Crushed Walnuts & Chia seeds", qty: "10g" },
      { item: "Ground Cinnamon", qty: "1/2 tsp" }
    ],
    recipeSteps: [
      "Cook oats with milk and a splash of water over medium heat for 6-8 minutes until creamy.",
      "Stir in ground cinnamon.",
      "Pour into bowl and top with fresh berries, chia seeds, and crushed walnuts.",
      "Serve warm."
    ],
    healthNote: "High soluble fiber beta-glucan lowers LDL cholesterol and cinnamon enhances peripheral insulin sensitivity."
  },

  // Breakfast - Non-Veg (American) - Wed, Fri, Sun
  {
    id: "b_usa_nonveg_1",
    name: "Classic Scrambled Eggs (2) & Avocado Whole Wheat Toast",
    category: "breakfast",
    cuisine: "american",
    cuisineName: "American",
    cuisineFlag: "🇺🇸",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["north_america","europe","global"],
    seasonalNote: "Year-round healthy fat and protein balance",
    isVeg: false,
    prepTime: "5 mins",
    cookTime: "6 mins",
    difficulty: "Very Easy",
    servingSize: "2 scrambled eggs (110g) + 1 toast (35g) + Sliced Avocado (40g)",
    weightGrams: 185,
    calories: 295,
    carbs: 19,
    protein: 17,
    fat: 17,
    fiber: 5,
    sugar: 2,
    sodium: 290,
    vitamins: { vitaminC: 8, vitaminD: 2.0, vitaminB12: 1.5, iron: 2.9, calcium: 80, zinc: 2.3 },
    allergens: ["eggs", "gluten"],
    conditions: ["diabetes", "hypertension", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Whole Eggs (whisked)", qty: "2 eggs (100g)" },
      { item: "100% Whole Wheat Sourdough or Bread", qty: "1 slice (35g)" },
      { item: "Ripe Avocado (sliced)", qty: "40g" },
      { item: "Olive oil", qty: "4g" },
      { item: "Cracked black pepper, chives & sea salt", qty: "to taste" }
    ],
    recipeSteps: [
      "Whisk eggs with a pinch of salt and pepper.",
      "Heat olive oil in a non-stick pan on low heat; stir softly with a spatula for 2-3 minutes for creamy curds.",
      "Toast the whole wheat bread until crisp.",
      "Top toast with sliced avocado and soft scrambled eggs; sprinkle fresh chives."
    ],
    healthNote: "Monounsaturated fats from avocado combined with high-biological-value egg albumin ensure prolonged morning satiety."
  },

  // Lunch - Veg (American)
  {
    id: "l_usa_veg_1",
    name: "Roasted Chickpea, Sweet Potato & Quinoa Power Bowl with Tahini",
    category: "lunch",
    cuisine: "american",
    cuisineName: "American",
    cuisineFlag: "🇺🇸",
    seasons: ["autumn","winter"],
    weather: ["cold","moderate"],
    months: [9,10,11,12,1,2],
    regions: ["north_america","europe"],
    seasonalNote: "Harvest season sweet potato & chickpea comfort bowl",
    isVeg: true,
    prepTime: "10 mins",
    cookTime: "18 mins",
    difficulty: "Easy",
    servingSize: "Chickpeas & Veggies (200g) + Quinoa (120g) + Tahini Drizzle (20g)",
    weightGrams: 340,
    calories: 440,
    carbs: 64,
    protein: 17,
    fat: 13,
    fiber: 12,
    sugar: 6,
    sodium: 310,
    vitamins: { vitaminC: 28, vitaminD: 0, vitaminB12: 0, iron: 4.6, calcium: 150, zinc: 2.9 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Cooked Garbanzo Beans (Chickpeas)", qty: "120g" },
      { item: "Cubed Sweet Potato (roasted)", qty: "80g" },
      { item: "Cooked Tricolor Quinoa", qty: "120g" },
      { item: "Baby Spinach & Chopped Cucumber", qty: "60g" },
      { item: "Tahini & Lemon Juice dressing", qty: "20g" }
    ],
    recipeSteps: [
      "Toss sweet potato cubes and chickpeas with cumin, paprika, and olive oil; roast or pan-sauté for 10 minutes.",
      "Assemble bowl with a bed of fluffy quinoa and fresh baby spinach.",
      "Add roasted chickpeas and sweet potatoes.",
      "Drizzle creamy lemon-tahini dressing over the top."
    ],
    healthNote: "Quinoa is a complete plant protein containing all 9 essential amino acids; slow-digesting complex carbs prevent glycemic surges."
  },

  // Lunch - Non-Veg (American) - Wed, Fri, Sun
  {
    id: "l_usa_nonveg_1",
    name: "Grilled Chicken Breast with Brown Rice & Steamed Broccoli",
    category: "lunch",
    cuisine: "american",
    cuisineName: "American",
    cuisineFlag: "🇺🇸",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["north_america","global"],
    seasonalNote: "Year-round clean fuel standard",
    isVeg: false,
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    servingSize: "Grilled Chicken (130g) + Brown Rice (130g) + Broccoli (100g)",
    weightGrams: 360,
    calories: 460,
    carbs: 46,
    protein: 42,
    fat: 11,
    fiber: 6,
    sugar: 2,
    sodium: 340,
    vitamins: { vitaminC: 60, vitaminD: 0.5, vitaminB12: 1.8, iron: 3.2, calcium: 90, zinc: 3.8 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Boneless Lean Chicken Breast", qty: "130g" },
      { item: "Steamed Brown Rice", qty: "130g cooked" },
      { item: "Fresh Broccoli florets (steamed)", qty: "100g" },
      { item: "Olive oil, Garlic powder, Paprika & Black Pepper", qty: "1 tsp" },
      { item: "Lemon wedge", qty: "1 unit" }
    ],
    recipeSteps: [
      "Season chicken breast with garlic powder, paprika, black pepper, and 1 tsp olive oil.",
      "Grill on a skillet for 6 minutes per side until cooked through.",
      "Steam broccoli florets for 4 minutes until vibrant green.",
      "Slice chicken breast and serve with brown rice, steamed broccoli, and fresh lemon juice."
    ],
    healthNote: "Ultra-lean high-protein gold standard meal (42g protein) accelerating muscular recovery and metabolic efficiency."
  },

  // Dinner - Veg (American)
  {
    id: "d_usa_veg_1",
    name: "Hearty Lentil & Butternut Squash Stew with Multigrain Toast",
    category: "dinner",
    cuisine: "american",
    cuisineName: "American",
    cuisineFlag: "🇺🇸",
    seasons: ["autumn","winter"],
    weather: ["cold","rainy"],
    months: [10,11,12,1,2,3],
    regions: ["north_america","europe"],
    seasonalNote: "Hearty butternut squash and lentil stew, quintessential autumn/winter dinner",
    isVeg: true,
    prepTime: "8 mins",
    cookTime: "18 mins",
    difficulty: "Very Easy",
    servingSize: "Lentil Squash Stew (280g) + 1 Multigrain Toast (35g)",
    weightGrams: 315,
    calories: 320,
    carbs: 52,
    protein: 15,
    fat: 6,
    fiber: 11,
    sugar: 4,
    sodium: 290,
    vitamins: { vitaminC: 32, vitaminD: 0, vitaminB12: 0, iron: 4.2, calcium: 110, zinc: 2.2 },
    allergens: ["gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Brown or Green Lentils", qty: "45g dry" },
      { item: "Diced Butternut Squash & Carrots", qty: "110g" },
      { item: "Vegetable Broth", qty: "200ml" },
      { item: "Multigrain Toast", qty: "1 slice (35g)" },
      { item: "Thyme, Garlic, Olive oil & Salt", qty: "1 tsp" }
    ],
    recipeSteps: [
      "In a pot, sauté garlic and thyme in 1 tsp olive oil for 1 minute.",
      "Add diced butternut squash, carrots, lentils, and vegetable broth.",
      "Simmer covered for 15-18 minutes until lentils and squash are fork-tender.",
      "Season with sea salt and cracked black pepper.",
      "Serve warm with crisp multigrain toast."
    ],
    healthNote: "High in beta-carotene (vitamin A precursor) and soluble fiber, soothing the gut lining before bedtime."
  },

  // Dinner - Non-Veg (American) - Wed, Fri, Sun
  {
    id: "d_usa_nonveg_1",
    name: "Herb Crusted Salmon Fillet with Baked Sweet Potato & Green Beans",
    category: "dinner",
    cuisine: "american",
    cuisineName: "American",
    cuisineFlag: "🇺🇸",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["north_america","europe"],
    seasonalNote: "Omega-3 rich wild salmon for cellular integrity across all seasons",
    isVeg: false,
    prepTime: "8 mins",
    cookTime: "14 mins",
    difficulty: "Easy",
    servingSize: "Salmon Fillet (130g) + Baked Sweet Potato (90g) + Green Beans (90g)",
    weightGrams: 310,
    calories: 410,
    carbs: 26,
    protein: 34,
    fat: 18,
    fiber: 5,
    sugar: 4,
    sodium: 290,
    vitamins: { vitaminC: 18, vitaminD: 11.2, vitaminB12: 3.8, iron: 2.4, calcium: 95, zinc: 2.1 },
    allergens: ["seafood"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Wild Salmon Fillet", qty: "130g" },
      { item: "Baked Sweet Potato wedges", qty: "90g" },
      { item: "Steamed French Green Beans", qty: "90g" },
      { item: "Olive oil, Rosemary, Dill & Lemon", qty: "1 tsp" }
    ],
    recipeSteps: [
      "Rub salmon with olive oil, chopped dill, rosemary, salt, and black pepper.",
      "Sear in a pan for 4 minutes per side until crisp-tender and flaky.",
      "Steam green beans for 3 minutes; toss with garlic and lemon juice.",
      "Plate the salmon with warm sweet potato and lemon garlic green beans."
    ],
    healthNote: "Superlative EPA/DHA omega-3 and 11.2mcg natural Vitamin D3, supporting cardiovascular elasticity."
  },

  // =========================================================================
  // 🇬🇷 MEDITERRANEAN CUISINE
  // =========================================================================

  // Breakfast - Veg (Mediterranean)
  {
    id: "b_med_veg_1",
    name: "Mediterranean Shakshuka with Feta & Whole Wheat Sourdough",
    category: "breakfast",
    cuisine: "mediterranean",
    cuisineName: "Mediterranean",
    cuisineFlag: "🇬🇷",
    seasons: ["all"],
    weather: ["moderate","cold","rainy"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["mediterranean","europe","global"],
    seasonalNote: "Lycopene-rich warm tomato stew with feta",
    isVeg: true,
    prepTime: "8 mins",
    cookTime: "12 mins",
    difficulty: "Easy",
    servingSize: "Tomato Pepper Stew with Feta (180g) + 1 Sourdough Slice (40g)",
    weightGrams: 220,
    calories: 265,
    carbs: 28,
    protein: 12,
    fat: 11,
    fiber: 6,
    sugar: 5,
    sodium: 340,
    vitamins: { vitaminC: 38, vitaminD: 0.3, vitaminB12: 0.4, iron: 3.2, calcium: 190, zinc: 1.8 },
    allergens: ["dairy", "gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Ripe Tomatoes & Red Bell Peppers (diced)", qty: "140g" },
      { item: "Crumbled Authentic Greek Feta", qty: "40g" },
      { item: "Whole Wheat Sourdough Bread", qty: "1 slice (40g)" },
      { item: "Extra Virgin Olive Oil", qty: "5g" },
      { item: "Garlic, Cumin, Smoked Paprika & Fresh Parsley", qty: "1 tsp" }
    ],
    recipeSteps: [
      "Heat olive oil in a skillet; sauté minced garlic, bell peppers, and tomatoes for 8 minutes until rich and saucy.",
      "Season with cumin, smoked paprika, and light salt.",
      "Crumble feta over the simmering sauce; cover for 2 minutes to soften.",
      "Garnish with chopped fresh parsley and serve with warm crusty sourdough."
    ],
    healthNote: "Lycopene from cooked tomatoes cooked in olive oil has 3x bio-absorption, protecting against vascular inflammation."
  },

  // Breakfast - Non-Veg (Mediterranean) - Wed, Fri, Sun
  {
    id: "b_med_nonveg_1",
    name: "Classic Mediterranean Shakshuka with 2 Poached Eggs & Whole Wheat Pita",
    category: "breakfast",
    cuisine: "mediterranean",
    cuisineName: "Mediterranean",
    cuisineFlag: "🇬🇷",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["mediterranean","europe","global"],
    seasonalNote: "Protein rich poached eggs in stewed tomatoes",
    isVeg: false,
    prepTime: "6 mins",
    cookTime: "12 mins",
    difficulty: "Easy",
    servingSize: "Shakshuka with 2 Eggs (180g) + 1 Whole Wheat Pita (40g)",
    weightGrams: 220,
    calories: 310,
    carbs: 26,
    protein: 18,
    fat: 14,
    fiber: 5,
    sugar: 4,
    sodium: 350,
    vitamins: { vitaminC: 35, vitaminD: 2.1, vitaminB12: 1.6, iron: 3.8, calcium: 95, zinc: 2.5 },
    allergens: ["eggs", "gluten"],
    conditions: ["diabetes", "hypertension", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Farm Eggs (poached in sauce)", qty: "2 eggs (100g)" },
      { item: "Tomato, Red Pepper & Garlic sauce", qty: "120g" },
      { item: "Whole Wheat Pita Bread", qty: "1 piece (40g)" },
      { item: "Extra virgin olive oil", qty: "5g" },
      { item: "Cumin, Paprika & Fresh Coriander/Parsley", qty: "to taste" }
    ],
    recipeSteps: [
      "Simmer diced tomatoes, peppers, garlic, and cumin in olive oil until a thick sauce forms.",
      "Make two indentations in the sauce and crack eggs directly in.",
      "Cover and simmer for 5-6 minutes until egg whites are set and yolks remain soft.",
      "Garnish with fresh parsley and serve directly with warm whole wheat pita."
    ],
    healthNote: "Traditional Mediterranean longevity breakfast rich in polyphenols and monounsaturated fatty acids."
  },

  // Lunch - Veg (Mediterranean)
  {
    id: "l_med_veg_1",
    name: "Greek Chickpea & Crisp Cucumber Tabbouleh Bowl with Tzatziki",
    category: "lunch",
    cuisine: "mediterranean",
    cuisineName: "Mediterranean",
    cuisineFlag: "🇬🇷",
    seasons: ["summer","spring"],
    weather: ["hot","moderate"],
    months: [4,5,6,7,8,9],
    regions: ["mediterranean","middle_east"],
    seasonalNote: "Refreshing crisp cucumbers, lemon, parsley & probiotic tzatziki for sunny heat",
    isVeg: true,
    prepTime: "12 mins",
    cookTime: "5 mins",
    difficulty: "Very Easy",
    servingSize: "Chickpea Tabbouleh (220g) + Tzatziki Dip (60g) + Pita (40g)",
    weightGrams: 320,
    calories: 420,
    carbs: 58,
    protein: 18,
    fat: 12,
    fiber: 13,
    sugar: 5,
    sodium: 360,
    vitamins: { vitaminC: 30, vitaminD: 0.2, vitaminB12: 0.4, iron: 4.8, calcium: 180, zinc: 2.8 },
    allergens: ["dairy", "gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Cooked Chickpeas (Garbanzo)", qty: "130g" },
      { item: "Bulgur Wheat or Quinoa", qty: "80g cooked" },
      { item: "Finely Chopped Parsley, Cucumber & Tomatoes", qty: "80g" },
      { item: "Tzatziki (Greek Yogurt, Garlic & Cucumber)", qty: "60g" },
      { item: "Whole Wheat Pita", qty: "1 unit (40g)" },
      { item: "Extra virgin olive oil & Lemon juice", qty: "1 tbsp" }
    ],
    recipeSteps: [
      "In a large bowl, toss cooked chickpeas, bulgur/quinoa, chopped parsley, cucumbers, and tomatoes.",
      "Dress with cold-pressed olive oil, fresh lemon juice, sea salt, and black pepper.",
      "Prepare tzatziki by stirring grated cucumber and garlic into thick Greek yogurt.",
      "Serve the tabbouleh with dollops of tzatziki and warm whole wheat pita."
    ],
    healthNote: "Incredible 13g prebiotic fiber profile and probiotic yogurt cultures nurturing gut microbial diversity."
  },

  // Lunch - Non-Veg (Mediterranean) - Wed, Fri, Sun
  {
    id: "l_med_nonveg_1",
    name: "Lemon Oregano Grilled Chicken with Quinoa Salad & Tzatziki",
    category: "lunch",
    cuisine: "mediterranean",
    cuisineName: "Mediterranean",
    cuisineFlag: "🇬🇷",
    seasons: ["summer","spring","autumn"],
    weather: ["hot","moderate"],
    months: [3,4,5,6,7,8,9,10],
    regions: ["mediterranean","europe"],
    seasonalNote: "Citrus oregano chicken with cooling Greek tzatziki",
    isVeg: false,
    prepTime: "10 mins",
    cookTime: "12 mins",
    difficulty: "Easy",
    servingSize: "Chicken (130g) + Quinoa Salad (140g) + Tzatziki (50g)",
    weightGrams: 320,
    calories: 450,
    carbs: 38,
    protein: 40,
    fat: 13,
    fiber: 6,
    sugar: 3,
    sodium: 350,
    vitamins: { vitaminC: 24, vitaminD: 0.6, vitaminB12: 1.8, iron: 3.6, calcium: 120, zinc: 3.9 },
    allergens: ["dairy"],
    conditions: ["diabetes", "hypertension", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Skinless Chicken Breast", qty: "130g" },
      { item: "Cooked Quinoa with Diced Cucumbers & Cherry Tomatoes", qty: "140g" },
      { item: "Greek Yogurt Tzatziki", qty: "50g" },
      { item: "Dried Oregano, Garlic, Lemon & Olive Oil", qty: "1 tbsp" }
    ],
    recipeSteps: [
      "Marinate chicken breast in lemon juice, oregano, crushed garlic, and olive oil for 10 minutes.",
      "Grill in a hot skillet for 5-6 minutes per side.",
      "Toss cooked quinoa with cucumber, cherry tomatoes, and lemon juice.",
      "Slice chicken breast over the quinoa bowl, accompanied by cool tzatziki."
    ],
    healthNote: "Exemplary Mediterranean DASH-diet meal with high potassium and lean bioavailable protein."
  },

  // Dinner - Veg (Mediterranean)
  {
    id: "d_med_veg_1",
    name: "Tuscan White Bean & Baby Kale Stew with Garlic Toast",
    category: "dinner",
    cuisine: "mediterranean",
    cuisineName: "Mediterranean",
    cuisineFlag: "🇬🇷",
    seasons: ["autumn","winter","monsoon"],
    weather: ["cold","rainy"],
    months: [10,11,12,1,2,3],
    regions: ["mediterranean","europe"],
    seasonalNote: "Warming Italian white bean & kale stew for chilly damp evenings",
    isVeg: true,
    prepTime: "8 mins",
    cookTime: "15 mins",
    difficulty: "Very Easy",
    servingSize: "White Bean Stew (270g) + 1 Garlic Toast (35g)",
    weightGrams: 305,
    calories: 330,
    carbs: 48,
    protein: 16,
    fat: 7,
    fiber: 11,
    sugar: 3,
    sodium: 310,
    vitamins: { vitaminC: 45, vitaminD: 0, vitaminB12: 0, iron: 4.8, calcium: 210, zinc: 2.4 },
    allergens: ["gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "gerd"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Cannellini (White) Beans (cooked)", qty: "130g" },
      { item: "Baby Kale or Spinach leaves", qty: "60g" },
      { item: "Diced Italian Tomatoes & Garlic broth", qty: "150ml" },
      { item: "Extra virgin olive oil", qty: "5g" },
      { item: "Multigrain Toast rubbed with garlic", qty: "1 slice (35g)" },
      { item: "Rosemary & Black Pepper", qty: "to taste" }
    ],
    recipeSteps: [
      "In a saucepan, heat olive oil and sauté minced garlic with a sprig of rosemary.",
      "Add cooked cannellini beans, diced tomatoes, and 150ml broth.",
      "Simmer for 10 minutes, lightly mashing some beans to create a creamy texture.",
      "Fold in fresh baby kale until wilted (2 minutes).",
      "Serve warm with crisp garlic-rubbed toast."
    ],
    healthNote: "White beans are exceptional sources of alpha-amylase inhibitors, naturally slowing carbohydrate breakdown and blunting glucose spikes."
  },

  // Dinner - Non-Veg (Mediterranean) - Wed, Fri, Sun
  {
    id: "d_med_nonveg_1",
    name: "Baked Mediterranean White Fish Fillet with Roasted Zucchini & Olives",
    category: "dinner",
    cuisine: "mediterranean",
    cuisineName: "Mediterranean",
    cuisineFlag: "🇬🇷",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["mediterranean","europe"],
    seasonalNote: "Light baked sea fish with heart-healthy olive oil and capers",
    isVeg: false,
    prepTime: "8 mins",
    cookTime: "12 mins",
    difficulty: "Very Easy",
    servingSize: "Fish Fillet (130g) + Zucchini & Tomatoes (130g) + 1 Small Pita (35g)",
    weightGrams: 295,
    calories: 340,
    carbs: 24,
    protein: 32,
    fat: 11,
    fiber: 4,
    sugar: 3,
    sodium: 330,
    vitamins: { vitaminC: 25, vitaminD: 7.9, vitaminB12: 3.1, iron: 2.8, calcium: 110, zinc: 2.2 },
    allergens: ["seafood", "gluten"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "White Fish Fillet (Cod / Sea Bass / Pomfret)", qty: "130g" },
      { item: "Sliced Zucchini & Cherry Tomatoes", qty: "130g" },
      { item: "Kalamata Olives (sliced)", qty: "15g" },
      { item: "Extra Virgin Olive Oil", qty: "5g" },
      { item: "Whole Wheat Small Pita", qty: "1 unit (35g)" },
      { item: "Oregano, Garlic, Lemon & Salt", qty: "to taste" }
    ],
    recipeSteps: [
      "Place fish fillet and sliced zucchini/cherry tomatoes in a baking dish or pan.",
      "Top with sliced olives, garlic, oregano, olive oil, and a squeeze of lemon.",
      "Bake or pan-steam covered for 10-12 minutes until fish is flaky.",
      "Serve hot with warm pita bread."
    ],
    healthNote: "Ultra-clean lean protein that optimizes nighttime restorative repair without heavy digestive load."
  },

  // =========================================================================
  // 🇯🇵 EAST ASIAN CUISINE
  // =========================================================================

  // Breakfast - Veg (Asian)
  {
    id: "b_asia_veg_1",
    name: "Silken Tofu, Wakame & Scallion Miso Soup with Steamed Brown Rice",
    category: "breakfast",
    cuisine: "asian",
    cuisineName: "East Asian",
    cuisineFlag: "🇯🇵",
    seasons: ["winter","monsoon","spring"],
    weather: ["cold","rainy","moderate"],
    months: [11,12,1,2,3,7,8],
    regions: ["east_asia","global"],
    seasonalNote: "Warm fermented probiotic miso soup providing internal morning warmth",
    isVeg: true,
    prepTime: "5 mins",
    cookTime: "7 mins",
    difficulty: "Very Easy",
    servingSize: "Miso Tofu Soup (220ml) + Steamed Brown Rice (90g)",
    weightGrams: 310,
    calories: 220,
    carbs: 34,
    protein: 11,
    fat: 4,
    fiber: 5,
    sugar: 2,
    sodium: 380,
    vitamins: { vitaminC: 8, vitaminD: 0, vitaminB12: 0.2, iron: 2.9, calcium: 140, zinc: 1.8 },
    allergens: ["soy"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Silken Tofu (cubed)", qty: "80g" },
      { item: "Organic Miso Paste (fermented)", qty: "15g (1 tbsp)" },
      { item: "Dried Wakame Seaweed (rehydrated)", qty: "5g" },
      { item: "Steamed Brown Rice", qty: "90g" },
      { item: "Finely sliced Scallions (Green onions)", qty: "15g" },
      { item: "Water or Shiitake broth", qty: "200ml" }
    ],
    recipeSteps: [
      "Bring 200ml water or mushroom broth to a gentle simmer with rehydrated seaweed.",
      "Add diced silken tofu for 2 minutes.",
      "Turn off the heat and dissolve 1 tbsp miso paste using a small ladle to preserve probiotic cultures.",
      "Scatter fresh scallions and serve warm with a small bowl of steamed brown rice."
    ],
    healthNote: "Fermented miso provides rich postbiotic compounds and natural isoflavones for cardiovascular wellness."
  },

  // Breakfast - Non-Veg (Asian) - Wed, Fri, Sun
  {
    id: "b_asia_nonveg_1",
    name: "Japanese Tamagoyaki (Rolled Herb Egg Omelette) with Steamed Greens & Rice",
    category: "breakfast",
    cuisine: "asian",
    cuisineName: "East Asian",
    cuisineFlag: "🇯🇵",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["east_asia"],
    seasonalNote: "Tender rolled egg omelette with seasonal steamed greens",
    isVeg: false,
    prepTime: "6 mins",
    cookTime: "6 mins",
    difficulty: "Easy",
    servingSize: "Rolled Omelette (110g) + Steamed Greens (60g) + Rice (80g)",
    weightGrams: 250,
    calories: 280,
    carbs: 26,
    protein: 16,
    fat: 12,
    fiber: 3,
    sugar: 1,
    sodium: 320,
    vitamins: { vitaminC: 14, vitaminD: 2.0, vitaminB12: 1.5, iron: 3.1, calcium: 80, zinc: 2.2 },
    allergens: ["eggs", "soy"],
    conditions: ["diabetes", "hypertension", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Fresh Eggs (beaten)", qty: "2 eggs (100g)" },
      { item: "Steamed Bok Choy / Spinach", qty: "60g" },
      { item: "Cooked Brown Rice", qty: "80g" },
      { item: "Low-sodium Soy Sauce & Mirin/Splash water", qty: "1 tsp" },
      { item: "Sesame oil", qty: "4g" }
    ],
    recipeSteps: [
      "Whisk eggs with low-sodium soy sauce and a splash of water.",
      "Heat sesame oil in a small pan; pour thin layers of egg, rolling gradually into a log.",
      "Slice the rolled omelette into thick rounds.",
      "Serve alongside flash-steamed greens and warm rice."
    ],
    healthNote: "Silky, tender texture ideal for all ages with high quality protein and minimum cooking oil."
  },

  // Lunch - Veg (Asian)
  {
    id: "l_asia_veg_1",
    name: "Edamame, Shiitake Mushroom & Tofu Stir-Fry with Soba / Brown Rice",
    category: "lunch",
    cuisine: "asian",
    cuisineName: "East Asian",
    cuisineFlag: "🇯🇵",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["east_asia","global"],
    seasonalNote: "Nutty soba with year-round available edamame & shiitake",
    isVeg: true,
    prepTime: "10 mins",
    cookTime: "10 mins",
    difficulty: "Very Easy",
    servingSize: "Tofu & Edamame Veggies (200g) + Soba/Brown Rice (130g)",
    weightGrams: 330,
    calories: 420,
    carbs: 52,
    protein: 24,
    fat: 12,
    fiber: 9,
    sugar: 3,
    sodium: 360,
    vitamins: { vitaminC: 35, vitaminD: 0.8, vitaminB12: 0, iron: 4.8, calcium: 230, zinc: 2.9 },
    allergens: ["soy"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Firm Tofu (cubed)", qty: "80g" },
      { item: "Shelled Green Edamame", qty: "50g" },
      { item: "Shiitake Mushrooms & Bok Choy", qty: "90g" },
      { item: "Cooked 100% Buckwheat Soba or Brown Rice", qty: "130g" },
      { item: "Garlic, Ginger, Low-Sodium Tamari & Sesame oil", qty: "1 tbsp" }
    ],
    recipeSteps: [
      "Heat 1 tsp sesame oil in a wok; stir-fry minced garlic and ginger for 30 seconds.",
      "Add tofu cubes, edamame, and sliced shiitake mushrooms; toss on high heat for 4 minutes.",
      "Stir in bok choy leaves and splash low-sodium tamari.",
      "Serve immediately over nutty buckwheat soba noodles or warm brown rice."
    ],
    healthNote: "Buckwheat soba contains high levels of rutin, a bioflavonoid that strengthens blood capillary walls and regulates blood pressure."
  },

  // Lunch - Non-Veg (Asian) - Wed, Fri, Sun
  {
    id: "l_asia_nonveg_1",
    name: "Teriyaki Ginger Chicken Breast Bowl with Steamed Broccoli & Jasmine Rice",
    category: "lunch",
    cuisine: "asian",
    cuisineName: "East Asian",
    cuisineFlag: "🇯🇵",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["east_asia","global"],
    seasonalNote: "Fresh ginger stimulates digestive fire in all seasons",
    isVeg: false,
    prepTime: "8 mins",
    cookTime: "12 mins",
    difficulty: "Easy",
    servingSize: "Ginger Chicken (130g) + Jasmine/Brown Rice (130g) + Broccoli (90g)",
    weightGrams: 350,
    calories: 460,
    carbs: 46,
    protein: 40,
    fat: 10,
    fiber: 5,
    sugar: 3,
    sodium: 380,
    vitamins: { vitaminC: 55, vitaminD: 0.4, vitaminB12: 1.9, iron: 3.2, calcium: 70, zinc: 3.9 },
    allergens: ["soy"],
    conditions: ["diabetes", "hypertension", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Chicken Breast Strips", qty: "130g" },
      { item: "Steamed Jasmine or Brown Rice", qty: "130g" },
      { item: "Steamed Broccoli florets", qty: "90g" },
      { item: "Grated Ginger, Garlic, Low-sodium Soy & Mirin", qty: "1 tbsp" },
      { item: "Sesame oil", qty: "4g" }
    ],
    recipeSteps: [
      "Toss chicken strips in grated ginger and 1 tsp low-sodium soy sauce.",
      "Stir-fry chicken in sesame oil for 5-6 minutes until golden and glazed.",
      "Steam broccoli florets until crisp-tender.",
      "Assemble chicken and broccoli over warm rice; sprinkle toasted sesame seeds."
    ],
    healthNote: "Fresh ginger accelerates gastric emptying and gastric motility, preventing postprandial bloat and glucose spikes."
  },

  // Dinner - Non-Veg (Asian) - Wed, Fri, Sun
  {
    id: "d_asia_nonveg_1",
    name: "Steamed Ginger-Garlic Fish Fillet with Sautéed Asian Greens & Rice",
    category: "dinner",
    cuisine: "asian",
    cuisineName: "East Asian",
    cuisineFlag: "🇯🇵",
    seasons: ["winter","monsoon","all"],
    weather: ["cold","rainy","all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["east_asia","global"],
    seasonalNote: "Steamed ginger scallion fish is the ultimate clean restorative supper",
    isVeg: false,
    prepTime: "8 mins",
    cookTime: "10 mins",
    difficulty: "Very Easy",
    servingSize: "Fish Fillet (130g) + Sautéed Greens (100g) + Rice (80g)",
    weightGrams: 310,
    calories: 340,
    carbs: 28,
    protein: 34,
    fat: 8,
    fiber: 4,
    sugar: 1,
    sodium: 320,
    vitamins: { vitaminC: 25, vitaminD: 9.0, vitaminB12: 3.4, iron: 3.2, calcium: 120, zinc: 2.6 },
    allergens: ["seafood", "soy"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "White Fish or Salmon Fillet", qty: "130g" },
      { item: "Baby Bok Choy or Spinach", qty: "100g" },
      { item: "Cooked Brown Rice", qty: "80g" },
      { item: "Julienned Fresh Ginger & Scallions", qty: "15g" },
      { item: "Sesame oil & Low-sodium Soy", qty: "1 tsp" }
    ],
    recipeSteps: [
      "Place fish on a plate, top with ginger juliennes and scallions.",
      "Steam in a steamer for 8 minutes until tender and flaky.",
      "Flash-sauté bok choy in 1/2 tsp sesame oil for 2 minutes.",
      "Drizzle light soy over the fish and serve with steamed rice."
    ],
    healthNote: "Steaming retains maximum fragile omega-3 oils and delicate water-soluble vitamins without creating advanced glycation end-products (AGEs)."
  },

  // =========================================================================
  // 🇲🇽 MEXICAN / LATIN AMERICAN CUISINE
  // =========================================================================

  // Breakfast - Veg (Mexican)
  {
    id: "b_mex_veg_1",
    name: "Black Bean & Sautéed Pepper Breakfast Tacos on Warm Corn Tortillas",
    category: "breakfast",
    cuisine: "mexican",
    cuisineName: "Mexican",
    cuisineFlag: "🇲🇽",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["latin_america","north_america"],
    seasonalNote: "Whole corn and fiber-rich black beans for steady energy",
    isVeg: true,
    prepTime: "6 mins",
    cookTime: "8 mins",
    difficulty: "Very Easy",
    servingSize: "2 Corn Tortillas (50g) + Seasoned Black Beans & Peppers (160g)",
    weightGrams: 210,
    calories: 270,
    carbs: 45,
    protein: 11,
    fat: 6,
    fiber: 9,
    sugar: 3,
    sodium: 310,
    vitamins: { vitaminC: 35, vitaminD: 0, vitaminB12: 0, iron: 3.4, calcium: 90, zinc: 1.9 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Cooked Black Beans (mashed lightly)", qty: "100g" },
      { item: "100% Whole Grain Corn Tortillas", qty: "2 units (50g)" },
      { item: "Sautéed Bell Peppers & Onions", qty: "50g" },
      { item: "Fresh Pico de Gallo (Tomato, Onion, Cilantro, Lime)", qty: "30g" },
      { item: "Pinch of Cumin & Olive oil", qty: "1 tsp" }
    ],
    recipeSteps: [
      "Warm black beans with a pinch of cumin and lime juice.",
      "Warm corn tortillas on a dry skillet for 1 minute each until pliable.",
      "Fill tortillas with warm seasoned black beans and sautéed peppers.",
      "Top with fresh zesty pico de gallo salsa."
    ],
    healthNote: "Corn tortillas are 100% naturally gluten-free; black beans provide resistant starch that feeds beneficial Bifidobacteria in the colon."
  },

  // Breakfast - Non-Veg (Mexican) - Wed, Fri, Sun
  {
    id: "b_mex_nonveg_1",
    name: "Huevos a la Mexicana (Eggs scrambled with Tomato, Onion & Pepper) on Corn Tortilla",
    category: "breakfast",
    cuisine: "mexican",
    cuisineName: "Mexican",
    cuisineFlag: "🇲🇽",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["latin_america"],
    seasonalNote: "Zesty eggs with antioxidant lycopene and vitamin C",
    isVeg: false,
    prepTime: "5 mins",
    cookTime: "6 mins",
    difficulty: "Very Easy",
    servingSize: "Scrambled Huevos (130g) + 1 Warm Corn Tortilla (25g) + Black Beans (50g)",
    weightGrams: 205,
    calories: 285,
    carbs: 22,
    protein: 17,
    fat: 14,
    fiber: 5,
    sugar: 2,
    sodium: 310,
    vitamins: { vitaminC: 22, vitaminD: 2.0, vitaminB12: 1.4, iron: 3.2, calcium: 85, zinc: 2.3 },
    allergens: ["eggs"],
    conditions: ["diabetes", "hypertension", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Farm Fresh Eggs (whisked)", qty: "2 eggs (100g)" },
      { item: "Finely Diced Tomato, Onion & Mild Pepper", qty: "50g" },
      { item: "Corn Tortilla", qty: "1 unit (25g)" },
      { item: "Cooked Black Beans", qty: "50g" },
      { item: "Olive oil", qty: "4g" }
    ],
    recipeSteps: [
      "Sauté diced onions, tomatoes, and mild peppers in olive oil for 2 minutes.",
      "Pour whisked eggs into the pan and gently scramble on medium heat for 2-3 minutes.",
      "Warm corn tortilla.",
      "Serve with warm black beans on the side."
    ],
    healthNote: "Balanced, colorful, and naturally gluten-free morning meal packed with bioavailable lutein and carotenoids."
  },

  // Lunch - Veg (Mexican)
  {
    id: "l_mex_veg_1",
    name: "Fiesta Black Bean, Roasted Corn & Guacamole Rice Bowl",
    category: "lunch",
    cuisine: "mexican",
    cuisineName: "Mexican",
    cuisineFlag: "🇲🇽",
    seasons: ["summer","spring","all"],
    weather: ["hot","moderate","all"],
    months: [3,4,5,6,7,8,9],
    regions: ["latin_america","north_america"],
    seasonalNote: "Cooling avocado guacamole and sweet corn for sunny weather",
    isVeg: true,
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Very Easy",
    servingSize: "Black Beans & Corn (170g) + Brown Rice (130g) + Guacamole (40g)",
    weightGrams: 340,
    calories: 445,
    carbs: 70,
    protein: 16,
    fat: 12,
    fiber: 14,
    sugar: 4,
    sodium: 320,
    vitamins: { vitaminC: 28, vitaminD: 0, vitaminB12: 0, iron: 4.6, calcium: 110, zinc: 2.8 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Cooked Black Beans", qty: "120g" },
      { item: "Steamed Brown Rice seasoned with cilantro & lime", qty: "130g" },
      { item: "Sweet Corn & Roasted Peppers", qty: "50g" },
      { item: "Fresh Guacamole (avocado, lime, cilantro)", qty: "40g" },
      { item: "Pico de gallo salsa", qty: "40g" }
    ],
    recipeSteps: [
      "Warm black beans with ground cumin, oregano, and lime juice.",
      "Layer cilantro-lime brown rice in a wide bowl.",
      "Top with seasoned black beans, sweet corn, and roasted peppers.",
      "Garnish with a generous dollop of fresh guacamole and pico de gallo."
    ],
    healthNote: "Incredible 14g dietary fiber content combined with monounsaturated avocado fats creates ideal sustained glucose release."
  },

  // Lunch - Non-Veg (Mexican) - Wed, Fri, Sun
  {
    id: "l_mex_nonveg_1",
    name: "Citrus Pollo Asado (Grilled Lime Chicken) with Cilantro Brown Rice & Beans",
    category: "lunch",
    cuisine: "mexican",
    cuisineName: "Mexican",
    cuisineFlag: "🇲🇽",
    seasons: ["summer","spring","all"],
    weather: ["hot","moderate","all"],
    months: [3,4,5,6,7,8,9,10],
    regions: ["latin_america"],
    seasonalNote: "Citrus-cured lean grilled chicken with cilantro brown rice",
    isVeg: false,
    prepTime: "10 mins",
    cookTime: "14 mins",
    difficulty: "Easy",
    servingSize: "Pollo Asado (130g) + Cilantro Rice (120g) + Black Beans (80g) + Salsa (40g)",
    weightGrams: 370,
    calories: 470,
    carbs: 48,
    protein: 42,
    fat: 11,
    fiber: 7,
    sugar: 3,
    sodium: 360,
    vitamins: { vitaminC: 30, vitaminD: 0.5, vitaminB12: 1.8, iron: 3.9, calcium: 95, zinc: 4.1 },
    allergens: [],
    conditions: ["diabetes", "hypertension", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "Chicken Breast", qty: "130g" },
      { item: "Lime juice, Orange juice, Garlic, Cumin & Paprika", qty: "2 tbsp marinade" },
      { item: "Cooked Brown Rice with fresh cilantro", qty: "120g" },
      { item: "Cooked Black Beans", qty: "80g" },
      { item: "Fresh Tomato Salsa", qty: "40g" }
    ],
    recipeSteps: [
      "Marinate chicken in citrus juices, minced garlic, cumin, and oregano for 10 minutes.",
      "Grill in a hot skillet for 5-6 minutes per side until charred and cooked through.",
      "Slice chicken diagonally.",
      "Serve alongside warm cilantro-lime brown rice, seasoned black beans, and fresh salsa."
    ],
    healthNote: "Massive 42g protein punch with minimal saturated fat; citrus marinade tenders meat and enhances zinc absorption."
  },

  // Dinner - Non-Veg (Mexican) - Wed, Fri, Sun
  {
    id: "d_mex_nonveg_1",
    name: "Fish a la Veracruzana (Seared White Fish in Tomato, Caper & Olive Sauce)",
    category: "dinner",
    cuisine: "mexican",
    cuisineName: "Mexican",
    cuisineFlag: "🇲🇽",
    seasons: ["all"],
    weather: ["all"],
    months: [1,2,3,4,5,6,7,8,9,10,11,12],
    regions: ["latin_america","global"],
    seasonalNote: "Coastal Veracruz style fish in light Mediterranean-Latin sauce",
    isVeg: false,
    prepTime: "8 mins",
    cookTime: "12 mins",
    difficulty: "Easy",
    servingSize: "Veracruz Fish (130g fish + 120g sauce) + Steamed Zucchini / Rice (80g)",
    weightGrams: 330,
    calories: 345,
    carbs: 22,
    protein: 33,
    fat: 11,
    fiber: 4,
    sugar: 3,
    sodium: 340,
    vitamins: { vitaminC: 28, vitaminD: 8.2, vitaminB12: 3.2, iron: 2.9, calcium: 100, zinc: 2.4 },
    allergens: ["seafood"],
    conditions: ["diabetes", "hypertension", "cholesterol", "fatty_liver", "thyroid"],
    ageRange: [1, 90],
    texture: "soft",
    ingredients: [
      { item: "White Fish Fillet (Snapper, Cod, or Tilapia)", qty: "130g" },
      { item: "Diced Tomatoes, Onions & Bell Peppers", qty: "100g" },
      { item: "Green Olives & Capers", qty: "15g" },
      { item: "Steamed Zucchini batons or Brown Rice", qty: "80g" },
      { item: "Olive oil, Oregano & Bay leaf", qty: "1 tsp" }
    ],
    recipeSteps: [
      "Sauté onions and garlic in olive oil; add tomatoes, capers, sliced olives, and oregano.",
      "Simmer the sauce for 5 minutes.",
      "Place fish fillet into the sauce, spooning sauce over the top.",
      "Cover and simmer for 6-8 minutes until fish is tender.",
      "Serve with steamed zucchini batons or brown rice."
    ],
    healthNote: "Cardioprotective Mediterranean-Mexican crossover dish rich in heart-healthy oleic acid, omega-3s, and lycopene."
  }
,

  // ==========================================
  // NEW FRUITS, SNACKS, ILLNESS & FESTIVAL DISHES
  // ==========================================
  {
    "id": "fruit_papaya_pomegranate",
    "name": "Digestive Fresh Papaya & Pomegranate Bowl with Mint",
    "category": "fruit",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "summer",
      "monsoon",
      "all"
    ],
    "weather": [
      "cold",
      "hot",
      "rainy",
      "moderate",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Rich in Papain enzymes and Punicalagins for rapid digestion and anti-inflammatory wellness",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "3 mins",
    "cookTime": "0 mins",
    "difficulty": "Very Easy",
    "servingSize": "175g Bowl (120g Papaya + 50g Pomegranate + 5g Chia)",
    "weightGrams": 175,
    "calories": 110,
    "carbs": 24,
    "protein": 2.1,
    "fat": 0.6,
    "fiber": 4.8,
    "sugar": 18,
    "sodium": 12,
    "vitamins": {
      "vitaminC": 72,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 0.8,
      "calcium": 42,
      "zinc": 0.4
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "cold",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Fresh Ripe Papaya cubes",
        "qty": "120g"
      },
      {
        "item": "Ruby Pomegranate pearls",
        "qty": "50g"
      },
      {
        "item": "Hydrated Chia seeds",
        "qty": "5g"
      },
      {
        "item": "Fresh Lime juice & torn mint leaves",
        "qty": "1/2 tsp"
      }
    ],
    "recipeSteps": [
      "Dice ripe sweet papaya into bite-sized soft cubes.",
      "Toss with juicy ruby pomegranate arils in a chilled ceramic bowl.",
      "Sprinkle hydrated chia seeds, squeeze 3 drops of lime, and garnish with bruised mint.",
      "Serve fresh at mid-morning for peak digestive enzyme activity."
    ],
    "healthNote": "Papaya contains papain and chymopapain which soothe gastritis and aid protein breakdown; pomegranate delivers potent antioxidants."
  },
  {
    "id": "fruit_citrus_berry",
    "name": "Immune-Defense Sweet Lime, Orange & Berry Medley",
    "category": "fruit",
    "cuisine": "global",
    "cuisineName": "Global",
    "cuisineFlag": "🌐",
    "seasons": [
      "winter",
      "monsoon",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "moderate",
      "all"
    ],
    "months": [
      10,
      11,
      12,
      1,
      2,
      3
    ],
    "regions": [
      "global",
      "south_asia",
      "mediterranean"
    ],
    "seasonalNote": "Peak bioavailable Vitamin C and flavonoids to bolster cellular immunity",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "4 mins",
    "cookTime": "0 mins",
    "difficulty": "Very Easy",
    "servingSize": "180g Medley (100g Sweet Lime/Orange + 45g Berries + 35g Kiwi)",
    "weightGrams": 180,
    "calories": 95,
    "carbs": 21,
    "protein": 1.8,
    "fat": 0.4,
    "fiber": 4.2,
    "sugar": 16,
    "sodium": 8,
    "vitamins": {
      "vitaminC": 85,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 0.7,
      "calcium": 50,
      "zinc": 0.5
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Mosambi (Sweet Lime) or Mandarin orange segments",
        "qty": "100g"
      },
      {
        "item": "Fresh Strawberries or Blueberries",
        "qty": "45g"
      },
      {
        "item": "Peeled Kiwi slices",
        "qty": "35g"
      },
      {
        "item": "Pinch of Ceylon cinnamon",
        "qty": "1 pinch"
      }
    ],
    "recipeSteps": [
      "Gently segment fresh sweet lime or orange, discarding seeds.",
      "Add sliced strawberries/blueberries and tender peeled kiwi.",
      "Dust with a micro-pinch of Ceylon cinnamon to assist insulin sensitivity.",
      "Enjoy immediately to absorb maximum heat-sensitive Vitamin C."
    ],
    "healthNote": "Provides over 100% of daily Vitamin C requirements with natural bioflavonoids that enhance white blood cell phagocytosis."
  },
  {
    "id": "fruit_apple_guava",
    "name": "Pectin-Dense Pink Guava & Crisp Apple Slices with Roasted Cumin",
    "category": "fruit",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "spring",
      "all"
    ],
    "weather": [
      "cold",
      "moderate",
      "all"
    ],
    "months": [
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Exceptional soluble pectin dietary fiber that controls post-meal glucose and lowers LDL",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "3 mins",
    "cookTime": "0 mins",
    "difficulty": "Very Easy",
    "servingSize": "175g Plate (90g Crisp Apple + 85g Ripe Pink Guava)",
    "weightGrams": 175,
    "calories": 105,
    "carbs": 23,
    "protein": 2.2,
    "fat": 0.6,
    "fiber": 6.8,
    "sugar": 15,
    "sodium": 14,
    "vitamins": {
      "vitaminC": 120,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 0.9,
      "calcium": 35,
      "zinc": 0.4
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "cold",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "tender",
    "ingredients": [
      {
        "item": "Fresh Crisp Apple slices (skin on for quercetin)",
        "qty": "90g"
      },
      {
        "item": "Ripe Pink or White Guava wedges",
        "qty": "85g"
      },
      {
        "item": "Roasted Cumin powder (Bhuna Jeera)",
        "qty": "1/4 tsp"
      },
      {
        "item": "Himalayan Pink Rock Salt",
        "qty": "1 pinch"
      }
    ],
    "recipeSteps": [
      "Wash apple thoroughly and slice into thin crescents retaining the nutrient-dense peel.",
      "Cut ripe pink guava into wedges.",
      "Lightly sprinkle with aromatic dry-roasted cumin powder and a touch of rock salt.",
      "Serve crisp and fresh."
    ],
    "healthNote": "Pink guava has more Vitamin C than oranges and four times the dietary fiber of grapes, blunting carbohydrate absorption."
  },
  {
    "id": "fruit_steamed_cinnamon_apple",
    "name": "Warm Soothing Steamed Cinnamon Apple & Pear (Sore Throat & Fever Friendly)",
    "category": "fruit",
    "cuisine": "global",
    "cuisineName": "Global",
    "cuisineFlag": "🌐",
    "seasons": [
      "winter",
      "monsoon",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "global",
      "south_asia",
      "american",
      "mediterranean"
    ],
    "seasonalNote": "Warm, gentle on throat, easy on gastric mucosa during infections or cold days",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "2 mins",
    "cookTime": "4 mins",
    "difficulty": "Very Easy",
    "servingSize": "170g Warm Bowl (90g Steamed Apple + 80g Soft Pear)",
    "weightGrams": 170,
    "calories": 92,
    "carbs": 22,
    "protein": 0.8,
    "fat": 0.3,
    "fiber": 4.5,
    "sugar": 16,
    "sodium": 5,
    "vitamins": {
      "vitaminC": 22,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 0.6,
      "calcium": 28,
      "zinc": 0.3
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "cold",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Peeled & Diced Sweet Red Apple",
        "qty": "90g"
      },
      {
        "item": "Soft Diced Bartlett Pear",
        "qty": "80g"
      },
      {
        "item": "Aromatic Ceylon Cinnamon powder",
        "qty": "1/4 tsp"
      },
      {
        "item": "Warm water for steaming",
        "qty": "2 tbsp"
      }
    ],
    "recipeSteps": [
      "Peel apple and pear, cutting into small even dice.",
      "Add to a small saucepan with 2 tablespoons of water and cinnamon.",
      "Cover and steam on low heat for 4 minutes until tender and translucent.",
      "Serve warm. Perfect when dealing with a sore throat, fever, or toddler transition."
    ],
    "healthNote": "Steaming breaks down insoluble cell walls, making fruit pectin immediately soothing to an inflamed gastrointestinal lining."
  },
  {
    "id": "fruit_hydrating_melon_banana",
    "name": "Electrolyte-Rich Muskmelon, Watermelon & Banana Cup",
    "category": "fruit",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "summer",
      "spring",
      "monsoon",
      "all"
    ],
    "weather": [
      "hot",
      "rainy",
      "moderate",
      "all"
    ],
    "months": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Natural potassium, magnesium, and hydration to restore fluid balance",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "3 mins",
    "cookTime": "0 mins",
    "difficulty": "Very Easy",
    "servingSize": "190g Bowl (95g Watermelon + 60g Muskmelon + 35g Banana)",
    "weightGrams": 190,
    "calories": 108,
    "carbs": 25,
    "protein": 2,
    "fat": 0.4,
    "fiber": 3.5,
    "sugar": 20,
    "sodium": 16,
    "vitamins": {
      "vitaminC": 45,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 0.8,
      "calcium": 30,
      "zinc": 0.4
    },
    "allergens": [],
    "conditions": [
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Seedless Watermelon cubes",
        "qty": "95g"
      },
      {
        "item": "Sweet Muskmelon (Cantaloupe) cubes",
        "qty": "60g"
      },
      {
        "item": "Robusta Banana slices",
        "qty": "35g"
      },
      {
        "item": "Fresh Mint leaf shred",
        "qty": "2 leaves"
      }
    ],
    "recipeSteps": [
      "Cube chilled watermelon and fragrant muskmelon.",
      "Add sliced potassium-rich banana.",
      "Gently toss with shredded mint and serve fresh."
    ],
    "healthNote": "Packed with over 450mg of natural bioavailable potassium and citrulline, preventing muscle cramps and rehydrating cells."
  },
  {
    "id": "snack_roasted_makhana",
    "name": "Ghee-Roasted Turmeric & Rock Salt Phool Makhana (Foxnuts)",
    "category": "snack",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "monsoon",
      "spring",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "moderate",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Renal and heart-healthy low-sodium crunchy snack rich in magnesium and plant protein",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "2 mins",
    "cookTime": "5 mins",
    "difficulty": "Easy",
    "servingSize": "40g Bowl (35g Makhana + 5g Pure A2 Ghee)",
    "weightGrams": 40,
    "calories": 155,
    "carbs": 24,
    "protein": 4.5,
    "fat": 4.5,
    "fiber": 3.8,
    "sugar": 0.5,
    "sodium": 120,
    "vitamins": {
      "vitaminC": 0,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 1.4,
      "calcium": 65,
      "zinc": 0.8
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "cold",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "crisp",
    "ingredients": [
      {
        "item": "Pure Phool Makhana (Foxnuts)",
        "qty": "35g"
      },
      {
        "item": "A2 Desi Cow Ghee",
        "qty": "1 tsp (5g)"
      },
      {
        "item": "Wild Turmeric (Haldi) powder",
        "qty": "1/4 tsp"
      },
      {
        "item": "Sendha Namak (Rock Salt) & Crushed Pepper",
        "qty": "1 pinch"
      }
    ],
    "recipeSteps": [
      "Heat 1 teaspoon of A2 ghee in a heavy-bottomed kadai on low flame.",
      "Add turmeric powder and crushed black pepper.",
      "Toss in raw foxnuts (makhana) and roast continuously for 4-5 minutes until ultra-crisp.",
      "Sprinkle rock salt and enjoy hot with herbal tea."
    ],
    "healthNote": "Zero cholesterol, low glycemic index, and rich in kaempferol flavonoid that fights systemic inflammation."
  },
  {
    "id": "snack_sprout_chaat",
    "name": "Tangy Sprouted Moong & Pomegranate Chaat",
    "category": "snack",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "summer",
      "monsoon",
      "winter",
      "all"
    ],
    "weather": [
      "hot",
      "cold",
      "rainy",
      "moderate",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Living enzymes, bioavailable iron, and high plant protein for afternoon vitality",
    "isVeg": true,
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "difficulty": "Easy",
    "servingSize": "160g Bowl (90g Sprouted Moong + 40g Veggies + 25g Pomegranate + 5g Lemon)",
    "weightGrams": 160,
    "calories": 145,
    "carbs": 23,
    "protein": 8.5,
    "fat": 1.2,
    "fiber": 6.2,
    "sugar": 5,
    "sodium": 180,
    "vitamins": {
      "vitaminC": 28,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 2.4,
      "calcium": 48,
      "zinc": 1.2
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "thyroid"
    ],
    "illnessSuitable": [
      "lite"
    ],
    "ageRange": [
      2,
      90
    ],
    "texture": "tender",
    "ingredients": [
      {
        "item": "Steamed Sprouted Green Moong",
        "qty": "90g"
      },
      {
        "item": "Finely Diced Cucumber & Tomatoes",
        "qty": "40g"
      },
      {
        "item": "Fresh Ruby Pomegranate pearls",
        "qty": "25g"
      },
      {
        "item": "Fresh Lemon Juice & Chaat Masala",
        "qty": "1 tsp"
      },
      {
        "item": "Chopped Fresh Coriander",
        "qty": "1 tbsp"
      }
    ],
    "recipeSteps": [
      "Steam sprouted moong for 3 minutes so it softens for gentle digestion while retaining nutrients.",
      "Toss with diced cucumber, tomatoes, and pomegranate.",
      "Drizzle fresh lemon juice and sprinkle a dash of chaat masala and fresh coriander.",
      "Serve as an energizing 4:30 PM evening snack."
    ],
    "healthNote": "Sprouting triples the Vitamin C and bioavailable iron in moong beans while pre-digesting complex starches."
  },
  {
    "id": "snack_masala_chaas",
    "name": "Probiotic Mint, Ginger & Roasted Cumin Buttermilk (Chaas)",
    "category": "snack",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "summer",
      "monsoon",
      "winter",
      "all"
    ],
    "weather": [
      "hot",
      "moderate",
      "rainy",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Cooling probiotic lactic acid cultures to replenish gut microbiome",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "2 mins",
    "cookTime": "0 mins",
    "difficulty": "Very Easy",
    "servingSize": "240ml Glass (100g Fresh Curd + 140ml Water + Herbs)",
    "weightGrams": 240,
    "calories": 72,
    "carbs": 6,
    "protein": 4.8,
    "fat": 2.2,
    "fiber": 0.5,
    "sugar": 4.5,
    "sodium": 160,
    "vitamins": {
      "vitaminC": 6,
      "vitaminD": 0.8,
      "vitaminB12": 0.6,
      "iron": 0.4,
      "calcium": 155,
      "zinc": 0.6
    },
    "allergens": [
      "dairy"
    ],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "liquid",
    "ingredients": [
      {
        "item": "Fresh Low-Fat Cow Curd (Dahi)",
        "qty": "100g"
      },
      {
        "item": "Chilled or Room Temp Water",
        "qty": "140ml"
      },
      {
        "item": "Fresh Mint & Coriander leaves",
        "qty": "6 leaves"
      },
      {
        "item": "Crushed Fresh Ginger drop",
        "qty": "2 drops"
      },
      {
        "item": "Bhuna Jeera (Roasted Cumin) & Rock Salt",
        "qty": "1/4 tsp"
      }
    ],
    "recipeSteps": [
      "Whisk fresh curd with water using a traditional wooden churner (mathani) or blender until frothy.",
      "Add freshly crushed roasted cumin powder, rock salt, and bruised mint.",
      "Serve chilled on warm days or room temperature during recovery."
    ],
    "healthNote": "Buttermilk creates a protective layer over the gastric lining, neutralizing acid and providing live Lactobacillus strains."
  },
  {
    "id": "snack_roasted_chana_almonds",
    "name": "Crunchy Roasted Bengal Gram (Chana) & Almonds",
    "category": "snack",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "monsoon",
      "spring",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "moderate",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "High satiety, zero sugar, steady sustained energy release",
    "isVeg": true,
    "prepTime": "1 min",
    "cookTime": "0 mins",
    "difficulty": "Very Easy",
    "servingSize": "55g Trail (40g Roasted Skin-on Chana + 15g Almonds)",
    "weightGrams": 55,
    "calories": 195,
    "carbs": 20,
    "protein": 9.5,
    "fat": 7.5,
    "fiber": 5.5,
    "sugar": 1.2,
    "sodium": 90,
    "vitamins": {
      "vitaminC": 1,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 2.6,
      "calcium": 75,
      "zinc": 1.3
    },
    "allergens": [
      "nuts"
    ],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "thyroid"
    ],
    "illnessSuitable": [],
    "ageRange": [
      3,
      90
    ],
    "texture": "crunchy",
    "ingredients": [
      {
        "item": "Dry-Roasted Skin-on Chana (Bengal Gram)",
        "qty": "40g"
      },
      {
        "item": "Raw or Lightly Roasted Almonds",
        "qty": "15g (approx 12 almonds)"
      }
    ],
    "recipeSteps": [
      "Combine roasted chana with whole raw almonds in a small ramekin.",
      "Enjoy as a slow-chewing, high-protein tea companion."
    ],
    "healthNote": "The brown outer husk of chana provides resistant starch that feeds healthy colon bacteria and suppresses glucose spikes."
  },
  {
    "id": "snack_steamed_dhokla",
    "name": "Steamed Low-Oil Moong Dal Dhokla with Green Mint Chutney",
    "category": "snack",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "summer",
      "monsoon",
      "winter",
      "all"
    ],
    "weather": [
      "hot",
      "cold",
      "rainy",
      "moderate",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Steamed fermentation delivers high B-vitamins with almost zero fat",
    "isVeg": true,
    "prepTime": "5 mins",
    "cookTime": "10 mins",
    "difficulty": "Easy",
    "servingSize": "140g (120g Steamed Dhokla + 20g Mint Chutney)",
    "weightGrams": 140,
    "calories": 165,
    "carbs": 24,
    "protein": 7.2,
    "fat": 3.5,
    "fiber": 4,
    "sugar": 1.5,
    "sodium": 220,
    "vitamins": {
      "vitaminC": 12,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 1.8,
      "calcium": 40,
      "zinc": 0.9
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Soaked Yellow Moong Dal Batter (fermented)",
        "qty": "100g"
      },
      {
        "item": "Ginger-Green chilli paste & Turmeric",
        "qty": "1/2 tsp"
      },
      {
        "item": "Mustard seeds & Curry leaf tempering in 1/2 tsp oil",
        "qty": "1/2 tsp oil"
      },
      {
        "item": "Fresh Mint & Coriander Chutney",
        "qty": "20g"
      }
    ],
    "recipeSteps": [
      "Pour whisked moong batter into a greased steamer plate.",
      "Steam on high heat for 10 minutes until a toothpick inserted comes out clean.",
      "Drizzle minimal mustard-curry leaf tempering on top.",
      "Cut into squares and serve with green chutney."
    ],
    "healthNote": "Fermented moong is pre-digested, easy on the pancreas, and provides sustained amino acid delivery."
  },
  {
    "id": "recov_turmeric_moong_khichdi",
    "name": "Healing Turmeric Moong Dal & Rice Khichdi with Pure Cow Ghee",
    "category": "lunch",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "monsoon",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "The gold standard Ayurvedic convalescent dish for fever, infection, or gastric recovery",
    "isVeg": true,
    "prepTime": "5 mins",
    "cookTime": "12 mins",
    "difficulty": "Easy",
    "servingSize": "320g Bowl (160g Moong-Rice Khichdi + 155g Broth consistency + 5g Ghee)",
    "weightGrams": 320,
    "calories": 290,
    "carbs": 48,
    "protein": 11.5,
    "fat": 5.5,
    "fiber": 5.5,
    "sugar": 2,
    "sodium": 260,
    "vitamins": {
      "vitaminC": 8,
      "vitaminD": 0.2,
      "vitaminB12": 0,
      "iron": 2.8,
      "calcium": 55,
      "zinc": 1.6
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "cold",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Split Yellow Moong Dal",
        "qty": "45g"
      },
      {
        "item": "White or Brown Rice",
        "qty": "45g"
      },
      {
        "item": "Pure A2 Cow Ghee",
        "qty": "1 tsp (5g)"
      },
      {
        "item": "Fresh Grated Ginger & Cumin seeds",
        "qty": "1 tsp"
      },
      {
        "item": "Wild Turmeric & Hing (Asafoetida)",
        "qty": "1/4 tsp"
      },
      {
        "item": "Sendha Namak (Rock Salt)",
        "qty": "1/2 tsp"
      }
    ],
    "recipeSteps": [
      "Wash equal portions of split moong dal and rice together.",
      "In a pressure cooker or pot, heat 1 tsp ghee, add cumin seeds, hing, and grated ginger.",
      "Add turmeric, washed dal-rice, and 4 cups of water for a soft porridge-like texture.",
      "Pressure cook for 4 whistles or simmer for 20 minutes until completely soft and melted.",
      "Serve warm. Soothing and restorative for any acute fever or digestive recovery."
    ],
    "healthNote": "Moong dal + rice creates a complete amino acid profile while requiring virtually zero enzymatic effort from a weakened stomach."
  },
  {
    "id": "recov_ginger_chicken_broth",
    "name": "Clear Ginger, Black Pepper & Shredded Chicken Immunity Soup",
    "category": "dinner",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "monsoon",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global",
      "asian"
    ],
    "seasonalNote": "Hot thermogenic bone & chicken broth that liquefies bronchial mucus and fuels lymphocyte repair",
    "isVeg": false,
    "prepTime": "5 mins",
    "cookTime": "15 mins",
    "difficulty": "Easy",
    "servingSize": "310g Warm Broth (90g Tender Shredded Chicken + 220ml Spiced Broth)",
    "weightGrams": 310,
    "calories": 195,
    "carbs": 8,
    "protein": 26,
    "fat": 4.5,
    "fiber": 2,
    "sugar": 1.5,
    "sodium": 290,
    "vitamins": {
      "vitaminC": 18,
      "vitaminD": 1.5,
      "vitaminB12": 1.2,
      "iron": 2.1,
      "calcium": 40,
      "zinc": 2.5
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "cold",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Skinless Chicken Breast & bone pieces",
        "qty": "110g"
      },
      {
        "item": "Fresh Ginger juliennes & crushed Garlic",
        "qty": "1 tbsp"
      },
      {
        "item": "Crushed Black Peppercorns",
        "qty": "1/2 tsp"
      },
      {
        "item": "Diced Carrots & Bottle Gourd (Lauki)",
        "qty": "40g"
      },
      {
        "item": "Fresh Coriander leaves & stems",
        "qty": "1 tbsp"
      }
    ],
    "recipeSteps": [
      "Simmer chicken with ginger, crushed garlic, carrots, and coriander stems in 3 cups of water for 15 minutes.",
      "Shred the tender cooked chicken breast into bite-sized shreds.",
      "Strain or retain clear broth with carrots; return shredded chicken to the broth.",
      "Season with freshly crushed black pepper and sea salt; serve steaming hot."
    ],
    "healthNote": "Carnitine, carnosine, and cysteine in hot chicken broth inhibit neutrophil migration to reduce mucosal swelling in upper respiratory infections."
  },
  {
    "id": "recov_idli_vegetable_rasam",
    "name": "Steamed Soft Rice Idlis with Warm Tomato-Pepper Rasam Broth",
    "category": "breakfast",
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "monsoon",
      "summer",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "hot",
      "moderate",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Ultra-digestible fermented steamed rice cakes floating in medicinal tamarind-pepper broth",
    "isVeg": true,
    "prepTime": "3 mins",
    "cookTime": "8 mins",
    "difficulty": "Easy",
    "servingSize": "280g Bowl (2 Idlis 100g + 180ml Piping Hot Pepper Rasam)",
    "weightGrams": 280,
    "calories": 225,
    "carbs": 42,
    "protein": 6.5,
    "fat": 2,
    "fiber": 4.2,
    "sugar": 3,
    "sodium": 280,
    "vitamins": {
      "vitaminC": 22,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 1.6,
      "calcium": 45,
      "zinc": 0.8
    },
    "allergens": [],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "illnessSuitable": [
      "fever",
      "cold",
      "viral",
      "lite"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Freshly Steamed Soft Rice & Urad Idlis (2 pcs)",
        "qty": "100g"
      },
      {
        "item": "Ripe Tomato & Tamarind water",
        "qty": "150ml"
      },
      {
        "item": "Crushed Black Pepper, Cumin & Garlic cloves",
        "qty": "1 tsp"
      },
      {
        "item": "Curry leaves & Fresh Coriander",
        "qty": "1 sprig"
      }
    ],
    "recipeSteps": [
      "Simmer mashed tomatoes with tamarind extract, crushed black pepper, cumin, and garlic for 6 minutes.",
      "Temper with mustard seeds and curry leaves in 1/2 tsp oil.",
      "Dip fresh soft idlis directly into the steaming bowl of rasam.",
      "Consume hot to break a cold, clear chest congestion, and soothe digestion."
    ],
    "healthNote": "Piperine from black pepper combined with garlic allicin enhances immune response while soft idlis deliver easy, non-taxing carbohydrates."
  },
  {
    "id": "fest_ukdiche_modak",
    "name": "Traditional Steamed Ukdiche Modak (Ganeshotsav Sacred Offering)",
    "category": "snack",
    "festivals": [
      "ganeshotsav"
    ],
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "monsoon",
      "winter",
      "all"
    ],
    "weather": [
      "rainy",
      "cold",
      "moderate",
      "all"
    ],
    "months": [
      8,
      9,
      10
    ],
    "regions": [
      "south_asia"
    ],
    "seasonalNote": "Lord Ganesha's revered delicacy: steamed handmade rice dumplings with fresh coconut and organic jaggery",
    "isVeg": true,
    "isFastingAllowed": false,
    "prepTime": "8 mins",
    "cookTime": "10 mins",
    "difficulty": "Medium",
    "servingSize": "110g (2 Handcrafted Modaks)",
    "weightGrams": 110,
    "calories": 245,
    "carbs": 44,
    "protein": 3.5,
    "fat": 6.5,
    "fiber": 3.2,
    "sugar": 16,
    "sodium": 35,
    "vitamins": {
      "vitaminC": 2,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 1.8,
      "calcium": 55,
      "zinc": 0.9
    },
    "allergens": [],
    "conditions": [
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "thyroid"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Fine Rice Flour (steamed dough / ukad)",
        "qty": "60g"
      },
      {
        "item": "Fresh Grated Coconut",
        "qty": "30g"
      },
      {
        "item": "Organic Dark Jaggery (Gur)",
        "qty": "15g"
      },
      {
        "item": "Fresh Green Cardamom & Nutmeg powder",
        "qty": "1/4 tsp"
      },
      {
        "item": "A2 Pure Ghee for folding & topping",
        "qty": "1/2 tsp (5g)"
      }
    ],
    "recipeSteps": [
      "Prepare the filling (saran): cook freshly grated coconut with organic jaggery on low flame until jaggery melts; add cardamom and nutmeg.",
      "Make the ukad: boil water with a pinch of salt and 1/2 tsp ghee; stir in rice flour, cover, and steam off heat for 5 minutes.",
      "Knead the warm dough until silky; shape into small cups, fill with coconut-jaggery mixture, and pleat into authentic modak peaks.",
      "Steam in a steamer for 10 minutes until glossy. Drizzle 2 drops of warm ghee on top before offering and enjoying."
    ],
    "healthNote": "Steamed—never fried! Provides medium-chain triglycerides (MCTs) from fresh coconut and organic iron/magnesium from jaggery."
  },
  {
    "id": "fest_puran_poli_thali",
    "name": "Festive Maharashtrian Puran Poli & Katachi Amti Thali with Rice",
    "category": "lunch",
    "festivals": [
      "ganeshotsav",
      "holi",
      "diwali"
    ],
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "monsoon",
      "spring",
      "all"
    ],
    "weather": [
      "cold",
      "hot",
      "rainy",
      "moderate",
      "all"
    ],
    "months": [
      3,
      8,
      9,
      10,
      11
    ],
    "regions": [
      "south_asia"
    ],
    "seasonalNote": "Celebratory royal festive thali with sweet chana dal poli and tangy tempered amti",
    "isVeg": true,
    "isFastingAllowed": false,
    "prepTime": "10 mins",
    "cookTime": "15 mins",
    "difficulty": "Medium",
    "servingSize": "385g Thali (1 Puran Poli 110g + Katachi Amti 150g + Steamed Rice 75g + Salad 50g)",
    "weightGrams": 385,
    "calories": 475,
    "carbs": 78,
    "protein": 14.5,
    "fat": 8.5,
    "fiber": 8.2,
    "sugar": 18,
    "sodium": 340,
    "vitamins": {
      "vitaminC": 12,
      "vitaminD": 0,
      "vitaminB12": 0,
      "iron": 3.8,
      "calcium": 75,
      "zinc": 2.1
    },
    "allergens": [
      "gluten"
    ],
    "conditions": [
      "hypertension",
      "cholesterol",
      "thyroid"
    ],
    "ageRange": [
      2,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Whole Wheat Puran Poli (chana dal, jaggery, cardamom)",
        "qty": "110g (1 large poli)"
      },
      {
        "item": "Katachi Amti (spiced chana dal strained broth)",
        "qty": "150g"
      },
      {
        "item": "Steamed Brown or Basmati Rice",
        "qty": "75g"
      },
      {
        "item": "Kachumber Salad (cucumber, tomato, lemon)",
        "qty": "50g"
      }
    ],
    "recipeSteps": [
      "Prepare sweet puran filling with boiled chana dal, jaggery, and nutmeg.",
      "Stuff inside whole wheat dough, roll thinly, and roast on an iron tawa with minimal ghee until golden spots appear.",
      "Prepare katachi amti using the strained protein broth of the boiled chana dal, tempered with goda masala, mustard, and curry leaves.",
      "Serve the warm poli alongside steamed rice, amti, and fresh crunchy kachumber."
    ],
    "healthNote": "Chana dal provides high biological value plant protein and sustained fiber, counteracting the natural sweetness of jaggery."
  },
  {
    "id": "fest_dryfruit_gujiya",
    "name": "Baked Whole Wheat & Pistachio Dry-Fruit Gujiya (Diwali & Holi Special)",
    "category": "snack",
    "festivals": [
      "diwali",
      "holi"
    ],
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "spring",
      "all"
    ],
    "weather": [
      "cold",
      "moderate",
      "all"
    ],
    "months": [
      3,
      10,
      11
    ],
    "regions": [
      "south_asia"
    ],
    "seasonalNote": "Air-baked celebratory festive crescent with wholesome nuts and roasted low-fat mawa",
    "isVeg": true,
    "isFastingAllowed": false,
    "prepTime": "8 mins",
    "cookTime": "12 mins",
    "difficulty": "Medium",
    "servingSize": "85g (1 Large Baked Gujiya)",
    "weightGrams": 85,
    "calories": 220,
    "carbs": 29,
    "protein": 6.5,
    "fat": 8.5,
    "fiber": 3.8,
    "sugar": 8,
    "sodium": 55,
    "vitamins": {
      "vitaminC": 1,
      "vitaminD": 0.4,
      "vitaminB12": 0.3,
      "iron": 1.6,
      "calcium": 85,
      "zinc": 1.1
    },
    "allergens": [
      "dairy",
      "nuts",
      "gluten"
    ],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "thyroid"
    ],
    "ageRange": [
      2,
      90
    ],
    "texture": "tender",
    "ingredients": [
      {
        "item": "Whole Wheat flour pastry dough",
        "qty": "40g"
      },
      {
        "item": "Low-Fat Roasted Khoya/Mawa & Paneer",
        "qty": "25g"
      },
      {
        "item": "Crushed Almonds, Pistachios & Chironji",
        "qty": "15g"
      },
      {
        "item": "Organic Jaggery or Stevia powder",
        "qty": "5g"
      }
    ],
    "recipeSteps": [
      "Roast low-fat khoya on low heat until aromatic; fold in crushed roasted nuts, cardamom, and minimal jaggery.",
      "Roll whole wheat dough into small circles, spoon filling inside, and crimp edges with a fork.",
      "Bake in an oven or air fryer at 180°C for 12 minutes until crisp and golden brown (zero deep frying).",
      "Enjoy guilt-free during Diwali and Holi festivities."
    ],
    "healthNote": "Contains 70% less saturated fat than conventional fried market gujiyas while delivering vitamin E and zinc from real almonds and pistachios."
  },
  {
    "id": "fest_shahi_paneer_pulao",
    "name": "Festive Shahi Low-Fat Paneer & Spiced Saffron Brown Rice Pulao",
    "category": "dinner",
    "festivals": [
      "diwali",
      "ganeshotsav"
    ],
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "monsoon",
      "all"
    ],
    "weather": [
      "cold",
      "moderate",
      "all"
    ],
    "months": [
      8,
      9,
      10,
      11,
      12
    ],
    "regions": [
      "south_asia",
      "global"
    ],
    "seasonalNote": "Royal celebratory feast rich in saffron, low-fat paneer, and whole grains for Diwali dinner",
    "isVeg": true,
    "isFastingAllowed": false,
    "prepTime": "8 mins",
    "cookTime": "14 mins",
    "difficulty": "Easy",
    "servingSize": "360g Feast (160g Shahi Paneer + 150g Saffron Rice + 50g Salad)",
    "weightGrams": 360,
    "calories": 430,
    "carbs": 48,
    "protein": 22.5,
    "fat": 14,
    "fiber": 6.5,
    "sugar": 4,
    "sodium": 390,
    "vitamins": {
      "vitaminC": 16,
      "vitaminD": 0.6,
      "vitaminB12": 1.2,
      "iron": 2.8,
      "calcium": 310,
      "zinc": 2.4
    },
    "allergens": [
      "dairy"
    ],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "thyroid"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Fresh Low-Fat Cow Milk Paneer cubes",
        "qty": "110g"
      },
      {
        "item": "Aromatic Tomato, Cashew & Melon seed puree (low oil)",
        "qty": "80g"
      },
      {
        "item": "Steamed Brown Basmati Rice infused with Kashmiri Saffron",
        "qty": "120g"
      },
      {
        "item": "Spiced Roasted Papad & Green Ribbon Salad",
        "qty": "50g"
      }
    ],
    "recipeSteps": [
      "Simmer the silky tomato-melon seed gravy with ginger, cardamom, and clove.",
      "Gently fold in fresh soft paneer cubes; simmer for 3 minutes without overcooking.",
      "Infuse warm steamed basmati rice with bloomed saffron strands.",
      "Serve the rich shahi feast hot with crisp roasted papad and fresh salad."
    ],
    "healthNote": "Delivers over 300mg of bioavailable calcium and 22g of protein while using heart-healthy cashew/melon emulsion instead of heavy cream."
  },
  {
    "id": "fest_almond_saffron_thandai",
    "name": "Protein-Enriched Almond, Rose & Saffron Thandai (Holi Special)",
    "category": "snack",
    "festivals": [
      "holi"
    ],
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "spring",
      "summer",
      "all"
    ],
    "weather": [
      "hot",
      "moderate",
      "all"
    ],
    "months": [
      2,
      3,
      4
    ],
    "regions": [
      "south_asia"
    ],
    "seasonalNote": "The signature Ayurvedic drink of Holi: cooling seeds, rich almonds, and wild saffron to rejuvenate the body",
    "isVeg": true,
    "isFastingAllowed": false,
    "prepTime": "4 mins",
    "cookTime": "0 mins",
    "difficulty": "Easy",
    "servingSize": "220ml Glass",
    "weightGrams": 220,
    "calories": 175,
    "carbs": 16,
    "protein": 8.5,
    "fat": 8,
    "fiber": 2.8,
    "sugar": 8,
    "sodium": 95,
    "vitamins": {
      "vitaminC": 4,
      "vitaminD": 1.2,
      "vitaminB12": 0.9,
      "iron": 1.4,
      "calcium": 240,
      "zinc": 1.3
    },
    "allergens": [
      "dairy",
      "nuts"
    ],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "thyroid"
    ],
    "ageRange": [
      2,
      90
    ],
    "texture": "liquid",
    "ingredients": [
      {
        "item": "Chilled Low-Fat Cow Milk",
        "qty": "190ml"
      },
      {
        "item": "Soaked & Crushed Almonds and Melon Seeds paste",
        "qty": "20g"
      },
      {
        "item": "Fennel seeds, Black Pepper & Green Cardamom powder",
        "qty": "1/2 tsp"
      },
      {
        "item": "Wild Kashmiri Saffron & Dried Rose Petals",
        "qty": "4 strands"
      },
      {
        "item": "Organic Jaggery or Stevia",
        "qty": "5g"
      }
    ],
    "recipeSteps": [
      "Blend chilled milk with soaked almond-melon seed paste and freshly pounded spices (fennel, black pepper, cardamom).",
      "Infuse with steeped saffron and aromatic dried rose petals.",
      "Serve chilled as an energizing, festive Holi drink."
    ],
    "healthNote": "Fennel seeds cool the digestive tract while crushed black pepper promotes lymphatic drainage during the spring seasonal shift."
  },
  {
    "id": "fest_farali_sama_pulao",
    "name": "Farali Sama (Barnyard Millet) & Roasted Peanut Pulao with Curd",
    "category": "lunch",
    "festivals": [
      "navratri",
      "upvas"
    ],
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "monsoon",
      "winter",
      "spring",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "hot",
      "moderate",
      "all"
    ],
    "months": [
      3,
      4,
      8,
      9,
      10,
      11
    ],
    "regions": [
      "south_asia"
    ],
    "seasonalNote": "Sattvic fasting staple rich in iron, zinc, and fiber during Navratri and Shivratri",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "5 mins",
    "cookTime": "10 mins",
    "difficulty": "Easy",
    "servingSize": "310g Meal (210g Sama Pulao + 100g Fresh Curd)",
    "weightGrams": 310,
    "calories": 345,
    "carbs": 46,
    "protein": 9.8,
    "fat": 12.5,
    "fiber": 5.8,
    "sugar": 3,
    "sodium": 240,
    "vitamins": {
      "vitaminC": 10,
      "vitaminD": 0.5,
      "vitaminB12": 0.4,
      "iron": 2.5,
      "calcium": 120,
      "zinc": 1.8
    },
    "allergens": [
      "peanuts",
      "dairy"
    ],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Barnyard Millet (Sama / Moraiyo / Vrat Rice)",
        "qty": "60g dry"
      },
      {
        "item": "Dry-Roasted Crushed Peanuts",
        "qty": "20g"
      },
      {
        "item": "Boiled & Diced Potato or Sweet Potato",
        "qty": "40g"
      },
      {
        "item": "Cumin seeds, Green Chilli & Sendha Namak in 1 tsp ghee",
        "qty": "1 tsp ghee"
      },
      {
        "item": "Fresh Set Cow Curd (Dahi)",
        "qty": "100g"
      }
    ],
    "recipeSteps": [
      "Wash sama rice and drain.",
      "Heat 1 tsp ghee in a pot; add cumin seeds, chopped green chilli, and diced sweet potato.",
      "Add sama rice, crushed peanuts, sendha namak, and 2 cups of water.",
      "Cover and simmer on low heat for 8 minutes until fluffy.",
      "Serve warm with fresh curd for a complete sattvic fast meal."
    ],
    "healthNote": "Barnyard millet is an ancient gluten-free grain with a low glycemic load and the highest iron content among all millets."
  },
  {
    "id": "fest_rajgira_sweetpotato_thalipeeth",
    "name": "Rajgira (Amaranth) & Mashed Sweet Potato Thalipeeth with Green Curd Chutney",
    "category": "breakfast",
    "festivals": [
      "navratri",
      "upvas"
    ],
    "cuisine": "indian",
    "cuisineName": "Indian",
    "cuisineFlag": "🇮🇳",
    "seasons": [
      "winter",
      "monsoon",
      "all"
    ],
    "weather": [
      "cold",
      "rainy",
      "all"
    ],
    "months": [
      1,
      2,
      3,
      4,
      8,
      9,
      10,
      11
    ],
    "regions": [
      "south_asia"
    ],
    "seasonalNote": "High-calcium amaranth flour spiced with green chillies for religious fasting days",
    "isVeg": true,
    "isFastingAllowed": true,
    "prepTime": "6 mins",
    "cookTime": "8 mins",
    "difficulty": "Easy",
    "servingSize": "210g (2 Warm Thalipeeths 140g + 70g Upvas Chutney)",
    "weightGrams": 210,
    "calories": 315,
    "carbs": 45,
    "protein": 9.2,
    "fat": 9.5,
    "fiber": 6.4,
    "sugar": 5,
    "sodium": 220,
    "vitamins": {
      "vitaminC": 14,
      "vitaminD": 0.4,
      "vitaminB12": 0.4,
      "iron": 3.2,
      "calcium": 160,
      "zinc": 1.7
    },
    "allergens": [
      "dairy"
    ],
    "conditions": [
      "diabetes",
      "hypertension",
      "cholesterol",
      "fatty_liver",
      "gerd",
      "thyroid"
    ],
    "ageRange": [
      1,
      90
    ],
    "texture": "soft",
    "ingredients": [
      {
        "item": "Rajgira (Amaranth) flour",
        "qty": "50g"
      },
      {
        "item": "Boiled & Mashed Sweet Potato",
        "qty": "50g"
      },
      {
        "item": "Crushed Roasted Peanuts",
        "qty": "15g"
      },
      {
        "item": "Sendha Namak (Rock salt) & Green Chilli paste",
        "qty": "1/2 tsp"
      },
      {
        "item": "Fresh Cow Curd (Dahi) for serving",
        "qty": "70g"
      }
    ],
    "recipeSteps": [
      "Combine rajgira flour, mashed sweet potato, crushed peanuts, sendha namak, and green chilli into a soft dough without adding excess water.",
      "Flatten into thin circular patties directly onto a butter paper or banana leaf.",
      "Roast on an iron tawa with 1/2 tsp ghee until both sides are lightly browned and crisp.",
      "Serve hot with fresh curd."
    ],
    "healthNote": "Amaranth contains twice the calcium of cow milk and is the only grain packed with all nine essential amino acids including lysine."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DISH_DATABASE };
}
