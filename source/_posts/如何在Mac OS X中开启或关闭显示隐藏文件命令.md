---
title: 如何在Mac OS X中开启或关闭显示隐藏文件命令
date: 2016-10-27 13:54:18
tags:
---

打开终端，输入：
>defaults write com.apple.finder AppleShowAllFiles -bool true 

此命令显示隐藏文件
>defaults write com.apple.finder AppleShowAllFiles -bool false

此命令关闭显示隐藏文件

命令运行之后需要重新加载Finder：快捷键option+command+esc，选中Finder，重新启动即可