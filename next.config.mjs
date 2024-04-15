/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "icons.iconarchive.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rpejmymyymrjnzzzdbol.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
