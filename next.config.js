/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...
};

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [
    /* ... */
  ];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
