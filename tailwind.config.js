/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode:"class",

  theme: {
    extend: {
      colors: {
        sea: {
          '50':  '#f7f9f9',
          '100': '#e9f1f8',
          '200': '#cedfef',
          '300': '#a2bed9',
          '400': '#7096bb',
          '500': '#56749e',
          '600': '#455981',
          '700': '#364262',
          '800': '#252c43',
          '900': '#161b2a',
        },
        coral: {
          '50':  '#fdf2f2',
          '100': '#fde8e8',
          '200': '#fbd5d5',
          '300': '#f8b4b4',
          '400': '#f98080',
          '500': '#f05252',
          '600': '#e02424',
          '700': '#c81e1e',
          '800': '#9b1c1c',
          '900': '#771d1d',
        },
        pumpkin: {
          '50':  '#fff8f1',
          '100': '#feecdc',
          '200': '#fcd9bd',
          '300': '#fdba8c',
          '400': '#ff8a4c',
          '500': '#ff5a1f',
          '600': '#d03801',
          '700': '#b43403',
          '800': '#8a2c0d',
          '900': '#73230d',
        },
        orange: {
          '50':  '#fdfdea',
          '100': '#fdf6b2',
          '200': '#fce96a',
          '300': '#faca15',
          '400': '#e3a008',
          '500': '#c27803',
          '600': '#9f580a',
          '700': '#8e4b10',
          '800': '#723b13',
          '900': '#633112',
        },
        emerald: {
          '50':  '#edf4f2',
          '100': '#cbf0ee',
          '200': '#8fe9d6',
          '300': '#53d1ab',
          '400': '#1bb47c',
          '500': '#139b52',
          '600': '#11873d',
          '700': '#126832',
          '800': '#0e4828',
          '900': '#0a2c20',
        },
        submarine: {
          '50':  '#eef5f5',
          '100': '#cdf0f4',
          '200': '#96e6e6',
          '300': '#5dccc7',
          '400': '#25ada1',
          '500': '#1a927c',
          '600': '#187b63',
          '700': '#165e4e',
          '800': '#11413a',
          '900': '#0c282b',
        },
        azure: {
          '50':  '#ebf5ff',
          '100': '#e1effe',
          '200': '#c3ddfd',
          '300': '#a4cafe',
          '400': '#76a9fa',
          '500': '#3f83f8',
          '600': '#1c64f2',
          '700': '#1a56db',
          '800': '#1e429f',
          '900': '#233876',
        },
        blue: {
          '50':  '#f0f5ff',
          '100': '#e5edff',
          '200': '#cddbfe',
          '300': '#b4c6fc',
          '400': '#8da2fb',
          '500': '#6875f5',
          '600': '#5850ec',
          '700': '#5145cd',
          '800': '#42389d',
          '900': '#362f78',
        },
        indigo: {
          '50':  '#f9fafa',
          '100': '#eef0f9',
          '200': '#dbd8f2',
          '300': '#b9b4e1',
          '400': '#998bcb',
          '500': '#7f67b7',
          '600': '#674b9d',
          '700': '#4e3879',
          '800': '#362753',
          '900': '#1f1832',
        },
        cerise: {
          '50':  '#fdf2f8',
          '100': '#fce8f3',
          '200': '#fad1e8',
          '300': '#f8b4d9',
          '400': '#f17eb8',
          '500': '#e74694',
          '600': '#d61f69',
          '700': '#bf125d',
          '800': '#99154b',
          '900': '#751a3d',
        },
        
      }
    }
  }
}

