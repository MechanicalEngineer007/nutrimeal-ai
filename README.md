# NutriMeal AI - Personalized Nutrition & Daily Meal Planner

A clinically grounded, machine learning-driven web application designed to generate **easy-to-make, day-wise meal recommendations** with **exact portion weights (grams)**, satisfying daily nutrient targets (Calories, Carbohydrates, Protein, Healthy Fats, Fiber, Vitamins C, D, B12, Iron, Calcium, and Zinc).

---

## 🌟 Advanced Features

### 1. 📅 12-Month Year-Round & Seasonal Engine
- **Full Year Integration**: Select any month from January through December.
- **Weather & Climate Modes**:
  - **❄️ Cold / Winter**: Warming thermogenic spices (ginger, black pepper, turmeric, cardamom), hearty slow-cooked stews, root vegetables, and calorie-sustaining comfort meals.
  - **☀️ Hot / Sunny**: Cooling natural hydrators (cucumber, bottle gourd, mint, fresh buttermilk), high electrolytes, light grains, and easily digestible proteins.
  - **🌧️ Rainy / Monsoon**: Gut-protective cooked meals (yellow moong dal, ginger-scallion broths, light vegetable khichdi) designed to bolster immunity during high-humidity pathogen cycles.
  - **🍃 Moderate / Pleasant**: Seasonal spring/autumn harvest balance.

### 2. 🌍 Regional Earth Geography (Local Market Availability)
- **🇮🇳 South Asia (India)**: In-season local dals, gourds, leafy greens, sprouts, and traditional grains.
- **🇺🇸 North America**: Fresh squash, seasonal berries, oats, sweet potatoes, wild salmon, and cruciferous vegetables.
- **🇬🇷 Mediterranean & Europe**: Cannellini beans, kale, extra virgin olive oil, authentic feta, tomatoes, and sea fish.
- **🇯🇵 East Asia**: Fermented miso, wakame, silken tofu, bok choy, soba, and steamed ginger white fish.
- **🇲🇽 Latin America / Tropics**: Black beans, whole corn tortillas, avocado, sweet corn, and lime-marinated lean poultry.

### 3. 🍽️ Interactive Meal Intake Tracker
- Log whether you ate each suggested meal:
  - **✅ 100% Eaten**: Full plate consumed as planned.
  - **🌗 50% Eaten**: Partial consumption recorded.
  - **❌ Skipped**: Missed or uneaten meal.

### 4. ⚡ Next-Day Nutritional Compensation Engine
- If you skip a meal or eat only a few items, NutriMeal AI calculates the exact deficit (e.g., `-320 kcal` and `-22g protein`).
- **Clinically Safe Auto-Rebalancing**:
  - The next day's meal plan automatically applies a **portion boost (+10% to +18%)** and injects a **Targeted Metabolic Recovery Booster Snack** (e.g., egg whites / sprouted chana / paneer chaas).
  - Capped to prevent glucose spikes or digestive strain for diabetic and hypertensive users.

### 5. 🤖 Machine Learning Preference & Adherence Engine
- **Supervised Online Learning**: Uses a multi-feature regression model that updates its weights in real-time via **Stochastic Gradient Descent (SGD)** whenever you log a meal.
- **Features Analyzed**:
  - Preparation time affinity
  - Historical eating adherence per ingredient and dish
  - Caloric budget fit
  - Protein density
  - Weather, season, and regional market availability
- **Explainable AI (XAI)**: Displays an adherence score (e.g., `🤖 96% ML Match`) with clear rationales for why the dish was chosen.

---

## 🚀 Running the Applications

### 🖥️ 1. Windows Desktop Application
The app includes a dedicated desktop mode that runs in a standalone application window (no URL bar, no browser tabs, native desktop framing):
- **1-Click Launch**: Double-click `start.bat` or run `desktop/launch_desktop_app.bat`.
- **Install Desktop Shortcut**: Run `desktop/create_desktop_shortcut.bat` to install a desktop shortcut with the official app icon.
- **Python Desktop Runner**: Run `python desktop/desktop_launcher.py`.

### 📱 2. Android Native Application
- Native source code located in [`android/`](android/) built with Jetpack Compose, Material 3, and offline WebKit WebView engine.
- To build the APK:
  ```bash
  cd android
  ./gradlew assembleDebug
  ```

### 🌐 3. Web & Offline Browser Mode
- Open `index.html` directly in any modern web browser (Edge, Chrome, Firefox, Safari).
- Works 100% offline with zero external network or CDN calls.
