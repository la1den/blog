---
title: "编译 linux 2.6.10 内核"
date: 2023-03-30
---


## 安装依赖包
```
$ sudo apt-get install build-essential libncurses-dev gcc make libc6-dev
```
----------
> ubuntu 5.04 ios 文件中没有 libncurses 需要手动编译[安装](https://geeksww.com/tutorials/operating_systems/linux/tools/how_to_download_compile_and_install_gnu_ncurses_on_debianubuntu_linux.php)

```
$ apt-get install g++
$ wget http://ftp.gnu.org/pub/gnu/ncurses/ncurses-5.4.tar.gz
$ tar xzf ncurses-5.4.tar.gz
$ cd ncurses-5.4
$ ./configure 
$ make
$ make install
```

## 编译

下载并解压好内核后，进入内核的目录
```
$ cp -v /boot/config-$(uname -r) .config 
$ make menuconfig 
```




##### 参考：

<https://geeksww.com/tutorials/operating_systems/linux/tools/how_to_download_compile_and_install_gnu_ncurses_on_debianubuntu_linux.php>
<https://askubuntu.com/questions/509663/c-preprocessor-lib-cpp-fails-sanity-check>
<https://www.51cto.com/article/663841.html>

