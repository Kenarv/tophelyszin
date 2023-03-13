module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                'tablet': '640px',
                // => @media (min-width: 640px) { ... }
          
                'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'desktop': '1280px',
                // => @media (min-width: 1280px) { ... }
            },

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
