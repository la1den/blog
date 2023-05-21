---
title: "上手kmonad"
date: 2023-05-20
author: la1den
---

### Install using docker
```
# Build the Docker image which will contain the binary.
docker build -t kmonad-builder .

# Spin up an ephemeral Docker container from the built image, to just copy the
# built binary to the host's current directory bind-mounted inside the
# container at /host/.
docker run --rm -it -v ${PWD}:/host/ kmonad-builder bash -c 'cp -vp /root/.local/bin/kmonad /host/'

# Clean up build image, since it is no longer needed.
docker rmi kmonad-builder
```

### config & run
安装完后在当前路径有kmonad二进制文件，运行如下：
```
sudo kmonad your_config_path.kbd
```

最简配置如下，defcfg 和 defsrc 都是必要的而且只能有一个。defcfg 里需要配置你的键盘驱动，kmonad会进行拦截然后改键。
defsrc 表示你键盘的原来的布局，键位可以和键盘的物理布局不同，但是必须和deflayer对应。deflayer可以有多个，表示你映射后的布局。defsrc和deflayer的布局必须一样， 软件是按照这个布局来进行映射的。
```
(defcfg
  ;; For Linux
  input  (device-file "/dev/input/by-id/usb-SEMICO_USB_Keyboard-event-kbd")
  output (uinput-sink "My KMonad output"
    ;; To understand the importance of the following line, see the section on
    ;; Compose-key sequences at the near-bottom of this file.
    "/run/current-system/sw/bin/sleep 1 && /run/current-system/sw/bin/setxkbmap -option compose:ralt")

  cmp-seq ralt    ;; Set the compose key to `RightAlt'
  cmp-seq-delay 5 ;; 5ms delay between each compose-key sequence press

  ;; Comment this if you want unhandled events not to be emitted
  fallthrough true

  ;; Set this to false to disable any command-execution in KMonad
  allow-cmd true
)


(defsrc
  esc  f1   f2   f3   f4   f5   f6   f7   f8   f9   f10  f11  f12        ssrq slck pause
  grv  1    2    3    4    5    6    7    8    9    0    -    =    bspc  ins  home pgup  nlck kp/  kp*  kp-
  tab  q    w    e    r    t    y    u    i    o    p    [    ]    ret   del  end  pgdn  kp7  kp8  kp9  kp+
  caps a    s    d    f    g    h    j    k    l    ;    '    \                          kp4  kp5  kp6
  lsft 102d z    x    c    v    b    n    m    ,    .    /    rsft            up         kp1  kp2  kp3  kprt
  lctl lmet lalt           spc                 ralt -    cmp  rctl       left down rght  kp0  kp.
)


(deflayer name
  _    _    _    _    _    _    _    _    _    _    _    _    _          _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _    _    _     _    _    _    _    _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _    _    _     _    _    _    _    _    _    _
  esc  _    _    _    _    _    _    _    _    _    _    _    _                         _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _    _               _         _    _    _    _
  _    _    _              _                   _    _    _    _          _    _    _    _    _
)
```
配置将键盘大小写改为了esc键。


#### 参考：

<https://github.com/kmonad/kmonad/blob/master/keymap/tutorial.kbd>



