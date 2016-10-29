---
title: web开发时自动刷新网页：liveReload安装，sublime 3
date: 2016-10-28 13:48:18
tags:
 - livereload
 - sublime
---
需要插件
sublime text3：View in Browser；LiveReload

chrome：liveReload

 
配置方法

**一：sublime text3**

sublime 3下载地址：

http://download.csdn.net/download/reggergdsg/9541966


**1、在sublime text3安装插件 view in browser**

注意（安装插件之前先安装Package Control：
http://blog.csdn.net/weixin_36401046/article/details/52880000，
http://devework.com/sublime-text-3-package-control.html）

```
ctrl+shift+p
```

```
输入install package回车
```
 ![jojo's blog](http://img.blog.csdn.net/20161021123610219)
 
```
view in browser
```

**2、安装成功后，修改默认的浏览器：**


```
preferences->package setting->view in browser->setting default
```

把firefox改为chrome64

![jojo's blog](http://img.blog.csdn.net/20161020221608579)

**3、在sublime text3安装插件liveReload**

```
ctrl+shift+p
```

```
输入install package回车
```


```
liveReload
```
![jojo's blog](http://img.blog.csdn.net/20161021140437368)


**4、liveReload配置**

```
preferences -> Packge Settings -> LiveReload -> Settings - Default
```


 ![jojo's blog](http://img.blog.csdn.net/20161021103511910)
 

输入以下内容保存即可

```
{
    "enabled_plugins": [
        "SimpleReloadPlugin",
        "SimpleRefresh"
    ]
}
```

**二、 chrome浏览器安装liveReload插件**

**1、**
```
方法一：进入chrome插件中心，搜索liveReload，安装即可。
```



![jojo's blog](http://img.blog.csdn.net/20161020221630579)

```
方法二：如果进不到插件中心，下载安装包安装到chrome浏览器：
```

 http://download.csdn.net/download/weixin_36401046/9659158


**2、**进入chrome扩展程序页面，将livereload中的允许访问文件网址打上勾 

![jojo's blog](http://img.blog.csdn.net/20161021103722429)


**三、测试**
重新打开sublime text3，重新启动chrome。
在sublime text3编辑一个测试html文件，

```
<html>
<meta charset="UTF-8">
<body>
<h1>开心</h1>
<p>自动刷新</p>
</body>
</html>
```

按 ctr+alt+v 在chrome浏览器中运行，编辑器下方出现livereload提示，并且点击chrome浏览器的livereload图标中间小圆点由虚变实，说明配置成功。


![jojo's blog](http://img.blog.csdn.net/20161020221647486)

 **重点内容**：只需要在sublime text3里编辑代码，按 ctr+s 保存，即可在chrome里面看到实时更新。
 
![jojo's blog](http://img.blog.csdn.net/20161021110719643)
          

**如果没有成功自动刷新，把以下走一遍：**

1、找到packages文件夹

![jojo's blog](http://img.blog.csdn.net/20161021105053386)

 ![jojo's blog](http://img.blog.csdn.net/20161021105404410)
 
2、从https://github.com/Grafikart/ST3-LiveReload 下载压缩包到本地
 
3、解压， 重命名为LiveReload，拷贝到packages中

参考文献：http://blog.csdn.net/neet007/article/details/51694643