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
      },

      {
        hostname: 'kutfdqxasgjxovjyrglc.supabase.co',
      },
    ],
  },
};

export default nextConfig;
