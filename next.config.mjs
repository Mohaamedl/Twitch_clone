/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    eslint:{

    },
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"example.com",
                port:"",
                pathname:"/**",
            }
        ]
    }
};

export default nextConfig;
