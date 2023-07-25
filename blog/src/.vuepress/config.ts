import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "la1den",
      description: "la1den's blog",
    }
    // ,
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "博客演示",
    //   description: "vuepress-theme-hope 的博客演示",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
