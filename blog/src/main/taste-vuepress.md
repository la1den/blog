---
title: Using vuepress to build my blog
date: 2023-05-11
---

```
mkdir vuepress-starter && cd vuepress-starter
yarn init # 生成 package.json
yarn add -D vuepress
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

在 package.json 中添加一些 scripts
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
在本地启动服务器
```
# export NODE_OPTIONS=--openssl-legacy-provider
yarn docs:dev # npm run docs:dev
```


让我们首先在你的文档目录下创建一个 .vuepress 目录
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象：
```
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```
安装 blog 插件
```
yarn add -D @vuepress/plugin-blog
```
添加到config.js
```
module.exports = {
  plugins: ['@vuepress/blog'] 
}
```
安装 blog theme 
```
yarn add @vuepress/theme-blog -D
```
添加到config.js
```
// .vuepress/config.js
module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    // Please head documentation to see the available options.
  }
}
```


生成部署文件
```
yarn docs:build
```
