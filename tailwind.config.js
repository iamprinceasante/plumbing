/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.js'],
    theme: {
        extend: {
            colors: {
                primary: '#e63a16',
                secondary: '#06379a',
                accent: '#ffb800',
            },
            fontFamily: {
                display: ["'Noto Sans Japanese'", 'sans-serif'],
            },
        },
    },
    plugins: [],
};
