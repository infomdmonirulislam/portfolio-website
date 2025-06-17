/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: "url('/hero-background.png')",
        portfolioImage: "url('/portfolio-bg-image.png')",
      },
    },
  },
  plugins: [],
};
