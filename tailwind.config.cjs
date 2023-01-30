/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-color": "hsl(0, 0%, 20%)",
        "title-color-dark": "hsl(0, 0%, 0%)",
        "text-color": "hsl(0, 0%, 46%)",
        "body-color": "hsl(0, 0%, 98%)",
        "container-color": "#fff",
      },

      gridTemplateColumns: {
        "116": '116px repeat(2, 1fr)',
        "max-content": "max-content"
      },

      keyframes: {
        profile_image: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },

      animation: {
        "waving-image": "profile_image 8s ease-in-out infite 1s",
      },
    },
  },
  plugins: [],
};
