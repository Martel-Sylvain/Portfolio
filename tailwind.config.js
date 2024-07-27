
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#090a0a',
        customWhite: '#f5f5f5',
        customBlue: '#1AD2F6',
      },
      fontFamily: {
        font10: ['RobotoBlackItalic'],
        font11: ['RobotoThin'],
        font12: ['RobotoLight'],
        font13: ['RobotoMedium'],
        font14: ['RobotoRegular'],
        font15: ['RobotoThinItalic'],

        font20: ['KanitBold'],
        font21: ['KanitLightItalic'],
        font22: ['KanitMedium'],
        font23: ['KanitRegular'],
        font24: ['KanitSemiBoldItalic'],
        font25: ['KanitThin'],
        font26: ['KanitLight'],

        font30: ['SquareSpace'],

        font40: ['DeathStar'],
      },
    },
  },
  plugins: [],
}

