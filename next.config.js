module.exports = async (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  };

  const defaultConfig = {};
  return withPlugins([], nextConfig)(phase, { defaultConfig });
  // return withPlugins([], nextConfig)(phase, { undefined }); // also works
};
