---
title: win系统下nodejs安装及环境配置
date: 2016-10-27 13:54:18
tags:
---
**1.下载安装文件：**

下载nodejs，官网：[http://nodejs.org/download/](http://nodejs.org/download/)，我这里下载的是node-v0.10.28-x86.msi，如下图：

![jojo's blog](http://img.blog.csdn.net/20161020101436118)

**2.安装nodejs：**

下载完成之后，双击"node-v0.10.28-x86.msi"，安装nodejs。

**3.环境变量配置，**便于在任意位置执行node应用：

**（1）找到node.exe所在的目录复制**，开始 —> 所有程序 —> nodejs —> 右键Node.js —>单击属性

![jojo's blog](http://img.blog.csdn.net/20161020104311195)

![jojo's blog](http://img.blog.csdn.net/20161020102428452)

**（2）加入系统环境变量PATH中**：

开始 —>  右键计算机 —>单击属性

![jojo's blog](http://img.blog.csdn.net/20161020102934126)

打开高级系统属性

![jojo's blog](http://img.blog.csdn.net/20161020103601863)

打开环境变量

![jojo's blog](http://img.blog.csdn.net/20161020103352096)

编辑 —> 将 `C:\Program Files\nodejs` 添加到用户变量的PATH中

![jojo's blog](http://img.blog.csdn.net/20161020104807651)

（注意，path之间是使用英文分号；分隔的）

确定，ok了。

