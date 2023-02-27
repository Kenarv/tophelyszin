/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'form-opacity': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'App-logo-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'form-animation': 'form-opacity 0.5s ease-in-out',
                'App-logo': 'App-logo-spin infinite 10s linear',
            },
        },
    },
    plugins: [],
};
