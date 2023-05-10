
Node 自带 npm 模块，所以可以直接使用 npx 命令。万一不能用，就要手动安装一下。
```
$ npm install -g npx
```

npx 命令可以在没有全局安装 node 模块时进行使用，如：
```
$ npx mocha --version
```
npx 在没有预先安装模块的情况下会自动安装，运行完成后自动卸载





启动 vite server
```
$ npx vite
```

构建生产环境
```
$ npx vite build
```
生成的 dist 目录中的即位打包好的发行版




参考：

https://www.ruanyifeng.com/blog/2019/02/npx.html
