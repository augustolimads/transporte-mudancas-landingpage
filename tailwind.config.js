module.exports = {
  purge: ['./components/**/*.jsx', './pages/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: `#E21E1E`,
        secondary: `#00BFA5`,
        dark: `#14213D`,
        white: `#FBFBFB`,
        gray: `#E8E8E8`,
        gray2: `#C4C4C4`,
        black: `#707070`,
        black2: `#2E2E2E`,
        glass: `rgba(0,0,0,0.40)`,
      },
      boxShadow: {
        xs: ` 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
        sm: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
        md: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
        lg: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
        xlg: `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`
      },
    },
  },
  variants: {},
  plugins: [],
};
