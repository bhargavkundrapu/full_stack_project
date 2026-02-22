/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'fk-blue': '#2874f0',
                'fk-yellow': '#ffe11b',
                'fk-text': '#212121',
                'fk-light-gray': '#f1f3f6'
            }
        },
    },
    plugins: [],
}
