# GLP Weight Management Calculator

A GLP-1 medication weight loss projection tool built with **Tailwind CSS v4**.

## 🎨 Color Theme
Inspired by a purple/teal/yellow palette:
- **Purple** `#6B3FA0` — primary brand color
- **Teal** `#4BBFBF` — secondary / accent
- **Yellow** `#F5A623` — highlights / badges

---

## 🚀 Quick Start (Cursor / Local Dev)

### 1. Install dependencies
```bash
npm install
```

### 2. Start Tailwind watcher (dev mode)
```bash
npm run dev
```
This watches `src/input.css` and compiles to `dist/output.css` automatically.

### 3. Open in browser
Open `index.html` directly in your browser, or use a local server:
```bash
npx serve .
# or
python3 -m http.server
```

---

## 🏗️ Build for Production
```bash
npm run build
```
Outputs a minified `dist/output.css`.

---

## 📁 Project Structure
```
glp-calculator/
├── index.html          ← Main HTML (Tailwind utility classes)
├── src/
│   └── input.css       ← Tailwind v4 entry point + @theme tokens + custom components
├── dist/
│   └── output.css      ← Compiled CSS (generated, do not edit)
├── package.json
└── README.md
```

---

## 🔧 Tailwind v4 Key Concepts Used

| Feature | Usage |
|---|---|
| `@theme {}` | CSS-first design tokens (colors, fonts, shadows) |
| `@layer base` | Global resets + range input styling |
| `@layer components` | Pseudo-element blobs, timeline line |
| `@layer utilities` | Custom `fade-up` keyframe animation |
| Arbitrary values | `text-[clamp(2rem,5vw,3rem)]`, `shadow-[0_0_0_3px_...]` |
| CSS variables | `--range-pct` for dynamic range slider fill |

---

## 🩺 Features
- Imperial / Metric toggle
- GLP-1 medication selector (Wegovy, Ozempic, Mounjaro, Saxenda, Lifestyle)
- BMR + TDEE calorie calculation (Mifflin-St Jeor)
- Projected weight loss based on clinical trial data
- BMI before/after comparison
- Month-by-month milestone timeline
- Personalized nutrition & lifestyle tips
- Medical disclaimer

---

## 📝 Notes
- All logic is in vanilla JavaScript (no framework dependency)
- Tailwind v4 uses CSS-first config — no `tailwind.config.js` needed
- Custom pseudo-element decorations (header blobs, timeline line) live in `src/input.css`
