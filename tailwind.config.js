module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                wedding: "url('./media/background.jpg')",
            },
            keyframes: {
                'form-opacity': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                'form-animation': 'form-opacity 0.5s ease-in-out',
            },
        },
    },
    plugins: [],
};
