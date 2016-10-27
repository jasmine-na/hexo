---
title: hexo+github（windows版+ssh版），搭建Hexo博客并部署到Github
date: 2016-10-27 13:59:18
tags:
---
ssh优点：http部署时每次要输入github用户名密码，ssh不需要。
**首先走完http版**：http://blog.csdn.net/weixin_36401046/article/details/52942683

**设置SSH keys**

1、在Git Bash输入以下指令（任意位置点击鼠标右键），检查是否已经存在了SSH keys。
ls -al ~/.ssh

2、如果不存在就没有关系，如果存在的话，直接删除.ssh文件夹里面所有文件：
 ![jojo's blog](http://img.blog.csdn.net/20161026183423330)

3、生成密钥：(与接下来的3二选一即可)
>git config --global user.email "429359876@qq.com"  # 填写你github注册并且验证的邮箱

>git config --global user.name "jasmine-na"  # github 用户名

>ssh-keygen #  会出现下面的内容，一直按Enter键就行

>Generating public/private rsa key pair.
Enter file in which to save the key (/home/logan/.ssh/id_rsa): 
/home/logan/.ssh/id_rsa already exists.
Overwrite (y/n)?  #因为我已经生成过了所以提示我，你就一直按就行 

>最后在你的.ssh 目录下面生成 id_rsa(私钥) id_rsa.pub(公钥)俩个文件

>第二行会提示你在哪个目录下面生成文件。

3、生成密钥另外一种方法：
输入以下指令（邮箱就是你注册Github时候的邮箱）后，回车：
>ssh-keygen -t rsa -C "429359876@qq.com"

 ![jojo's blog](http://img.blog.csdn.net/20161026183438862)

然后它会提示要你输入passphrase，直接回车：

 ![jojo's blog](http://img.blog.csdn.net/20161026183459454)

然后键入以下指令：
>ssh-agent -s

 ![jojo's blog](http://img.blog.csdn.net/20161026183549938)

继续输入指令：
>ssh-add ~/.ssh/id_rsa

输入之后，出错：
 ![jojo's blog](http://img.blog.csdn.net/20161026183614204)

出错，则输入：
>eval `ssh-agent -s`
>ssh-add

 ![jojo's blog](http://img.blog.csdn.net/20161026183638360)


4、打开.ssh/id_rsa.pub，全选复制Key
 ![jojo's blog](http://img.blog.csdn.net/20161026183841596)

5、到Github
![jojo's blog](http://img.blog.csdn.net/20161027110146361)

![jojo's blog](http://img.blog.csdn.net/20161027110158205)

![jojo's blog](http://img.blog.csdn.net/20161027110206799)

6、测试：
>ssh -T git@github.com

 ![jojo's blog](http://img.blog.csdn.net/20161026183947385)

遇到警告输入“yes”，
最后输出 You've successfully authenticated 表示添加key 成功。

**编辑_config.yml文件**

修改文件里面的deploy，

修改后

```
deploy:
  type: git
  repo: git@github.com:jasmine-na/jasmine-na.github.io.git
  branch: master
```
 

**完成部署**
1、	依次键入指令：

>hexo clean

>hexo generate

>hexo deploy

2、在浏览器输入：http://jasmine-na.github.io/

 ![jojo's blog](http://img.blog.csdn.net/20161027101348580)


**更多文章：** 
[hexo+github（windows版+http版），搭建Hexo博客并部署到Github](http://blog.csdn.net/weixin_36401046/article/details/52942683)
 