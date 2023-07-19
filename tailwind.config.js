/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        '560': '560px',
        '360': '360px',
      },
      width: {
        '560': '560px',
        '360': '360px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}
