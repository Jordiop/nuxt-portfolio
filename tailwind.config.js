/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      inset: {
        17: "68px",
        26: "104px",
      },
      colors: {
        "primary-light": "#f6f7f6",
        "secondary-light": "#e2e5e0",
        "ternary-light": "#c7ccc3",
        "primary-dark": "#2C3333",
        "secondary-dark": "#395B64",
        "ternary-dark": "#A5C9CA",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      }
    },
  },
}

