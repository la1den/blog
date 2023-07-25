import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
    "/": [
    ],
    "/main/": [
        {
            text: "Main",
            link: "",
            icon: "home",
            children: "structure"
        }
    ],
    "/linux/": [
        {
            text: "Linux",
            icon: "desktop",
            link: "/linux/",
            children: "structure",
        },
    ],
});

