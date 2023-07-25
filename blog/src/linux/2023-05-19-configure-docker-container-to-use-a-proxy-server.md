---
title: "Docker 容器内代理"
date: 2023-05-19
star: true
timeline: true
---


docker默认使用的网络是桥接，ip地址为172.17.0.1。
代理端需要能够监听到docker的网络，即172.17.0.1的网段。
使用v2ray设置listen为0.0.0.0，或者不进行设置都是可以的。

有一个比较坑的地方在于，在 `docker build` 的时候，使用 `--build-arg` 选项来指定代理，软件可能不走你的代理。
例如对于 `curl` 来说，在宿主机中，你只需要设置 `export https_proxy=http://localhost:port/` ，`curl` 就能够走代理。

而在容器中，你需要同时设置 `https_proxy` 和 `http_proxy` ，同时 `HTTP_PROXY` 和 `HTTPS_PROXY` 即使设置了你也会发现无效。
原因可能是因为不同系统的软件对代理的配置要求不同，以及可能是 docker 的客户端在作祟。
最后，你需要让容器中的代理指向 `172.17.0.1` ，容器和宿主之间是通过这个 ip 进行沟通的。

构建命令如下：
```
$ docker build --no-cache --build-arg HTTPS_PROXY=http://172.17.0.1:2081 --build-arg HTTP_PROXY=http://172.17.0.1:2081 -t kmonad-builder .
```

构建完成后可以使用 `docker rmi` 命令删除构建失败的镜像减少空间的占用。
```
$ docker rmi $(docker images | grep "none" | awk '{print $3}')
```





##### 参考：

<https://www.v2ray.com/chapter_02/01_overview.html>

<https://docs.docker.com/network/proxy/>

<https://neucrack.com/p/286>
