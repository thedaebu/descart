/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                destination: process.env.NODE_ENV === "development" ?
                "http://127.0.0.1:5000/api/:path*" :
                "/api/",
                source: "/api/:path*"
            }
        ]
    }
};

module.exports = nextConfig;
