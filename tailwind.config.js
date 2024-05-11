import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'times-new-roman': ['"Times New Roman"', 'Sans-serif'],
                'playfair-display': ['"Playfair Display"'],
                'barlow-semi-condensed': ['"Barlow Semi Condensed"'],
            },
            colors: {
                'light-purple': '#54278f',
                'dark-purple': '#3B0187',
                'text-purple': '#8E43F0',
                'charcoal-gray': '#161925',
            }
        },
    },

    plugins: [forms],
};
