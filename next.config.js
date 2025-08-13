/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for static site generation
  output: 'export',
  
  // Optimize images
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'i.ibb.co'],
  },
  
  // Enable trailing slashes for better SEO
  trailingSlash: true,
  
  // Optimize bundle size
  swcMinify: true,
  
  // Enable compression
  compress: true,
};

export default nextConfig;
