// NOTE: Sentry's withSentryConfig is temporarily disabled to diagnose HMR instability.
// To re-enable, uncomment the import and wrap `nextConfig` with `withSentryConfig(nextConfig, {...})`.
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
};

export default nextConfig;