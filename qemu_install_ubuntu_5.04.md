Qemu install ubuntu
=======================

## 安装 ubuntu

下载 [ubuntu 5.04](http://old-releases.ubuntu.com/releases/hoary/ubuntu-5.04-install-i386.iso) 镜像。# 注意请下载 i386 架构的 iso 镜像，否则在安装时将会卡在 booting 。

使用 virtual machine mananger 进行安装。

## 配置 ssh-server

 安装 **ssh-server**
```
ubuntu $ sudo apt-get install openssh-server
```

查看已安装的服务
```
ubuntu $ dpkg -l | grep ssh
```

确认 ssh-server 是否启动成功
```
ubuntu $ ps -e | grep ssh
```

## 通过 ssh 连接 qemu 中的 ubuntu
查看 ubuntu 的 ip 地址
```
ubuntu $ ifconfig
```

ssh 连接
``` 
host $ ssh [user]@[ip]
```

## Troubleshoot

1. Unable to negotiate with 192.168.122.160 port 22: no matching key exchange method found. Their offer: diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1,diffie-hellman-group1-sha1

> The OpenSSH website has a page dedicated to legacy issues such as this one. It suggests the following approach, on the client:
> 
> ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 123.123.123.123
> or more permanently, adding
> 
> ```
> Host 123.123.123.123
>     KexAlgorithms +diffie-hellman-group1-sha1
> to ~/.ssh/config.
> ```
> 
> This will enable the old algorithms on the client, allowing it to connect to the server.

2. Unable to negotiate with 192.168.122.160 port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss

> If you really need to use SSH with Azure DevOps at the moment, you can add an entry to your ~/.ssh/config file to work around this:
> 
> ```
> Host ssh.dev.azure.com
>     User git
>     PubkeyAcceptedAlgorithms +ssh-rsa
>     HostkeyAlgorithms +ssh-rsa
> ```



------------
##### 参考：

https://blog.csdn.net/jackghq/article/details/54974141

https://blog.csdn.net/jeikerxiao/article/details/84105529

https://stackoverflow.com/questions/69875520/unable-to-negotiate-with-40-74-28-9-port-22-no-matching-host-key-type-found-th

https://askubuntu.com/questions/836048/ssh-returns-no-matching-host-key-type-found-their-offer-ssh-dss
