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

Unable to negotiate with 192.168.122.160 port 22: no matching key exchange method found. Their offer: diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1,diffie-hellman-group1-sha1



Unable to negotiate with 192.168.122.160 port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss

------------
##### 参考：
https://blog.csdn.net/jackghq/article/details/54974141
https://blog.csdn.net/jeikerxiao/article/details/84105529
