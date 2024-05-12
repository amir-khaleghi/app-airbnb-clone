/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'a0.muscache.com',
        protocol: 'https',
      },

      {
        hostname: 'kutfdqxasgjxovjyrglc.supabase.co',
        protocol: 'https',
      },
      {
        hostname: 'aws-0-eu-central-1.pooler.supabase.com',
        protocol: 'https',
      },
      {
        hostname: 'dchba.org',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
