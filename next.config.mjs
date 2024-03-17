import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontendNav : true,
  aggressiveFrontEndNavCaching : true,
  reloadOnOnline : true,
});

export default withPWA({
  images: {
    domains: ['places.googleapis.com'],
  },
});