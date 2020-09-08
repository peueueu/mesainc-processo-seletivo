export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        src:
          "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css?family=Muli:300",
        rel: "stylesheet"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["~components/bosons/main.scss", "~assets/transitions.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "@/plugins/vuex-persist", ssr: false },
    { src: "@/plugins/vue-notification", ssr: false },
    { src: "@/plugins/vue-star-rating", ssr: false }
  ],
  env: {
    API_KEY: process.env.API_KEY || ""
  },
  generate: {
    fallback: true
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  // router: {
  //   middleware: "authentication"
  // },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/localforage"],
  localforage: {
    instances: [
      {
        name: "flavorit",
        storeName: "flavorit_db"
      }
    ]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxt-lazy-load",
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    [
      "nuxt-gmaps",
      {
        key: "AIzaSyCBvfAxcxJ54CvkiGuOM0EyzIk_4dVWGI8",
        locationbias: "ipbias"
      }
    ]
  ],
  styleResources: {
    scss: ["components/bosons/*.scss"]
  },
  axios: {
    baseURL: "https://reqres.in/api"
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
