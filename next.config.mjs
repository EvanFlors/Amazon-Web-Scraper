/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['moongose']
    },
    images: {
        domains: ['m.media-amazon.com']
    }
};

export default nextConfig;
