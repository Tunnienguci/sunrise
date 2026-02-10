/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1a1a1a',
                secondary: '#fff',
                accent: '#c8e648',
                'text-secondary': '#555',
                'text-muted': '#888',
                'border': '#e0e0e0',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
