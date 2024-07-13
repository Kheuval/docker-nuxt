export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: { // @see https://github.com/nuxt/nuxt/issues/27558
    server: {
      hmr: {
        protocol: "wss",
        clientPort: 443,
        path: "hmr/",
      },
    },
  },
  hooks: { // @see https://github.com/nuxt/nuxt/issues/27558
    'vite:extendConfig': (config) => {
      if (typeof config.server?.hmr === 'object') {
        config.server.hmr.protocol = 'wss';
        config.server.hmr.clientPort = 443;
        config.server.hmr.path = "hmr/";
      }
    },
  },
})
