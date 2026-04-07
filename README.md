# Amruta Bhosale — Portfolio (React)

A modern, responsive portfolio built with React 18.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
amruta-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Ticker.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Numbers.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Strengths.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── index.js
└── package.json
```

---

## 📸 Adding Your Photo

1. Place your photo file (e.g. `photo.jpg`) inside the `/public` folder.
2. Open `src/components/Hero.jsx`.
3. Find the `photo-placeholder` div and replace it with:

```jsx
<img
  src={process.env.PUBLIC_URL + '/photo.jpg'}
  alt="Amruta Bhosale"
/>
```

---

## 🎨 Color Theme

All colors are CSS variables in `src/styles/global.css`:

| Variable       | Value     | Usage              |
|----------------|-----------|--------------------|
| `--rose`       | `#FF3CAC` | Primary accent     |
| `--violet`     | `#784BA0` | Gradient mid       |
| `--indigo`     | `#2B86C5` | Gradient end       |
| `--grad-main`  | rose→violet→indigo | Buttons, text highlights |

---

## ✨ Features

- ☀️ / 🌙 Dark / Light theme toggle
- Scroll-triggered reveal animations
- Animated skill progress bars with count-up
- Animated stat counters (Numbers section)
- Floating photo with gradient ring
- Scrolling skill ticker
- Tabbed experience section
- Cursor glow effect (desktop)
- Fully responsive (mobile, tablet, desktop)
- No external animation libraries — pure CSS + JS

---

## 🛠 Tech Stack

- React 18
- CSS Modules (co-located per component)
- IntersectionObserver API for scroll animations
- CSS custom properties for theming
- Google Fonts: Syne + Cabinet Grotesk
