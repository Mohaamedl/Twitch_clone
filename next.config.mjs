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
    },
    eslint: {
        ignoreDuringBuilds: true, // Example: Ignore ESLint warnings during build
        // You can add more configuration options here if needed
      },
      output: 'export',

      
    
};


export default nextConfig;
