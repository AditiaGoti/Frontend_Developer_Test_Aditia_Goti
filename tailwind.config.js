module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 8px rgba(0, 255, 255, 0.5)' },
          '50%': { 'box-shadow': '0 0 15px rgba(0, 255, 255, 0.8), 0 0 5px rgba(255, 255, 255, 0.5)' },
        },
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
