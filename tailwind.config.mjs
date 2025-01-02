/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        BG1: "url('/images/main-section/main.webp')",
        BG2: "url('/images/main-section/main-1.webp')",
        BG3: "url('/images/main-section/main-2.webp')",
        BG4: "url('/images/main-section/main-3.webp')",
        BG5: "url('/images/main-section/main-4.webp')",
        BG6: "url('/images/main-section/main-5.webp')",
      }
    },
  },
  plugins: [],
};
