import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";


export default hopeTheme({
    hostname: "https://blog.zawarudo.top",

    author: {
        name: "la1den",
        url: "https://zawarudo.top",
    },

    // pure: true,
    
    favicon: "/favicon.ico",

    iconAssets: "fontawesome",

    logo: "/logo.jpeg",

    repo: "la1den/blog",

    // docsDir: "docs",

    hotReload: true,

    blog: {
        avatar: "avatar.jpeg",
        roundAvatar: true,
        medias: {
            // Baidu: "https://example.com",
            BiliBili: "https://space.bilibili.com/34689269",
            // Bitbucket: "https://example.com",
            // Dingding: "https://example.com",
            // Discord: "https://example.com",
            // Dribbble: "https://example.com",
            // Email: "mailto:info@example.com",
            // Evernote: "https://example.com",
            // Facebook: "https://example.com",
            // Flipboard: "https://example.com",
            // Gitee: "https://example.com",
            GitHub: "https://github.com/la1den",
            // LeetCode: "https://leetcode.cn/u/la1den/"
            // Gitlab: "https://example.com",
            // Gmail: "mailto:info@example.com",
            // Instagram: "https://example.com",
            // Lark: "https://example.com",
            // Lines: "https://example.com",
            // Linkedin: "https://example.com",
            // Pinterest: "https://example.com",
            // Pocket: "https://example.com",
            // QQ: "https://example.com",
            // Qzone: "https://example.com",
            // Reddit: "https://example.com",
            // Rss: "https://example.com",
            // Steam: "https://example.com",
            // Twitter: "https://example.com",
            // Wechat: "https://example.com",
            // Weibo: "https://example.com",
            // Whatsapp: "https://example.com",
            // Youtube: "https://example.com",
            // Zhihu: "https://example.com",
            // MrHope: ["https://mrhope.site", MR_HOPE_AVATAR],
        },
    },

    locales: {
        "/": {
            // navbar
            navbar: enNavbar,

            // sidebar
            sidebar: enSidebar,

            footer: "MIT Licensed",

            displayFooter: true,

            blog: {
                description: "Less is more.",
                // intro: "/intro.html",
            },

            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },

        /**
         * Chinese locale config
         */
        // "/zh/": {
        //   // navbar
        //   navbar: zhNavbar,

        //   // sidebar
        //   sidebar: zhSidebar,

        //   footer: "默认页脚",

        //   displayFooter: true,

        //   blog: {
        //     description: "一个前端开发者",
        //     intro: "/zh/intro.html",
        //   },

        //   // page meta
        //   metaLocales: {
        //     editLink: "在 GitHub 上编辑此页",
        //   },
        // },
    },

    encrypt: {
        config: {
            // "/demo/encrypt.html": ["1234"],
            // "/zh/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
        blog: true,

        comment: {
            // @ts-expect-error: You should generate and use your own comment service
            provider: "Giscus",
        },

        // all features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },

        // uncomment these if you want a PWA
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
