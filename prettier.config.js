/** @type {import("prettier").Config} */
const config = {
    singleQuote: true,
    semi: false,
    tabWidth: 4,
    trailingComma: 'none',
    plugins: [require.resolve('prettier-plugin-tailwindcss')]
}

module.exports = config
