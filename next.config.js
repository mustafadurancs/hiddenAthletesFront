const path = require('path')

module.exports = {
    env: {
        stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    distDir: 'build',
    trailingSlash: true,
    optimizeFonts: false,
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
}