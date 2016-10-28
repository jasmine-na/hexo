---
title: hexo+github（windows版+http版），搭建Hexo博客并部署到Github
date: 2016-10-27 13:54:18
tags:
 - hexo
 - git
---
![jojo's blog](http://img.blog.csdn.net/20161026182636997)

**工具/原料**
•	Windows（Mac也是差不多，可参照）
•	Git
•	Node.js

**安装Hexo**

1、利用 npm 命令即可安装。在任意位置点击鼠标右键，选择Git Bash。

 ![jojo's blog](http://img.blog.csdn.net/20161026182730919)
 
2、输入命令：
>npm install -g hexo

>注意：-g是指全局安装hexo。

**创建Hexo文件夹**

1、新建文件夹 Hexo
2、


>cd Hexo

>hexo init   //Hexo 即会自动在目标文件夹建立网站所需要的所有文件。

>npm install   //安装依赖包

**本地查看**
•	现在我们已经搭建起本地的hexo博客了，执行以下命令(在Hexo文件夹下)，然后到浏览器输入localhost:4000看看。
>hexo generate

>hexo server

 ![jojo's blog](http://img.blog.csdn.net/20161026183033027)

**注册Github账号**
•	这里不演示了。

**创建Repository仓库**

登录github后，

![jojo's blog](http://img.blog.csdn.net/20161027093752469)

![jojo's blog](http://img.blog.csdn.net/20161027093814641)

![jojo's blog](http://img.blog.csdn.net/20161027093832188)

•	注意：创建的时候注意Repository的名字。比如我的Github账号是jasmine-na，那么我应该创建的Repository的名字是：**jasmine-na.github.io**。
(必须是Github账号名.github.io)

![jojo's blog](http://img.blog.csdn.net/20161027093143442)

**修改配置文件**
1、到你刚刚创建的Repository下，找到以下内容：

 ![jojo's blog](http://img.blog.csdn.net/20161026183141935)

2、先点击HTTPS，然后复制里面的地址。然后编辑_config.yml文件（在C:\Hexo下）。
 ![jojo's blog](http://img.blog.csdn.net/20161026183201545)

3、修改文件里面的deploy。其中的repository就改成你刚刚复制的地址。保存这个文件。


```
deploy:
  type: git
  repo: https://github.com/jasmine-na/jasmine-na.github.io.git
  branch: master
```

![jojo's blog](http://img.blog.csdn.net/20161027094431301)

（注意格式）

**完成部署**

1、下载hexo-deployer-git
>npm install hexo-deployer-git –save

2、最后一步，Git Bash下，依次键入以下指令：
（注意：每次修改本地文件后，都需要依次键入以下指令）
>hexo clean    //清除缓存文件 db.json 和已生成的静态文件 public 

>hexo generate //生成网站静态文件到默认设置的 public 文件夹

>hexo deploy //自动生成网站静态文件，并部署到设定的仓库。

hexo deploy过程中会提示你输入账号名和密码，Username是你的Github账号名称，而不是邮箱；Password就是你的Github的密码。

 ![jojo's blog](http://img.blog.csdn.net/20161026184053081)

2、OK，我们的博客就已经完全搭建起来了，在浏览器输入（当然，是你的用户名）：
http://jasmine-na.github.io/

![jojo's blog](http://img.blog.csdn.net/20161027101348580)


**Tips**
•	hexo现在支持更加简单的命令格式了，比如：
>hexo g == hexo generate

>hexo d == hexo deploy

>hexo s == hexo server

>hexo n == hexo new

**更多文章：**
[hexo+github（windows版+ssh版），搭建Hexo博客并部署到Github](http://blog.csdn.net/weixin_36401046/article/details/52937108)