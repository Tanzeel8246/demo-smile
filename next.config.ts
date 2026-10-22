import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export -> upload the generated `out/` CONTENTS to the
  // smile.codehubb.com subdomain docroot. No Node server needed, no basePath.
  output: "export",
  // Emit /treatments/index.html style files so every route works on plain hosts.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
