---
title: "docker依赖管理"
date: 2023-07-29
---

## 同个compose文件中不同的服务构建依赖问题

使用extend选项进行依赖的管理

例子：

``` dockerfile
services:
  common:
    image: busybox
    environment:
      TZ: utc
      PORT: 80
  cli:
    extends:
      service: common
    environment:
      PORT: 8080
```

cli服务依赖于common命令，使用extends进行配置后则会先构建common再构建cli，避免从From找不到对应的镜像。

## reference

<https://docs.docker.com/compose/compose-file/05-services/>
