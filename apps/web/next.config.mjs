import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@xcarbox/ui",
    "@xcarbox/api",
    "@xcarbox/contracts",
    "@xcarbox/auth",
    "@xcarbox/cars",
    "@xcarbox/checkout",
  ],
  experimental: {
    // reactCompiler: true,
  },
};

export default withNextIntl(nextConfig);