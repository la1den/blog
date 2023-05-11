module.exports = {
    title: '3yude\'s Blog',
    description: 'Less is more.',
    plugins: [
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        // 当前分类的唯一 ID
                        id: 'post',
                        // 目标文件夹
                        dirname: '_posts',
                        // `entry page` (或者 `list page`) 的路径
                        path: '/',
                        layout: 'BlogIndexPost',
                        itemLayout: 'BlogPost',
                    },
                ],
            },
        ],
    ],
    theme: '@vuepress/blog',
    themeConfig: {
        // Please head documentation to see the available options.
    }

}
