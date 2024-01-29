const withNextIntl = require('next-intl/plugin')(
  './src/i18n.js'
)

module.exports = withNextIntl({
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks'
    ]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false
  }
})