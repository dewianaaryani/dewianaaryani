import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  remotePatterns:[
    {
      protocol: "https",
      hostname: "smpkqlmkkwawtiwkpmtd.supabase.co",
      pathname: "/storage/v1/object/**",
  
    }
  ]
  },
};

export default nextConfig;
