/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./icons/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundPosition: {
                "offset-center": "0% 70%",
            },
        },
    },
    plugins: [],
};
