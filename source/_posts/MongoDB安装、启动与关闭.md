---
title: 如何在Mac OS X中开启或关闭显示隐藏文件命令
date: 2016-10-27 13:54:18
tags:
 - MongoDB
---
安装包下载地址：[mongodb-win32-x86_64-2.6.6](http://pan.baidu.com/s/1eRGWWXs)

1.解压到当前文件夹，进到目录mongodb-win32-x86_64-2.6.6，在这里新建data文件夹，
![jojo's blog](http://img.blog.csdn.net/20161019140103561)

2.进到data目录下，在这里新建db文件夹，

![jojo's blog](http://img.blog.csdn.net/20161019140134843)

3.命令行进到bin目录下，输入
>mongod --dbpath ../data/db

![jojo's blog](http://img.blog.csdn.net/20161019140147143)

回车后数据库成功启动，端口号27017
![jojo's blog](http://img.blog.csdn.net/20161019140158378)

4.新打开命令行命令行进到bin目录下，输入
>mongo

按回车键

![jojo's blog](http://img.blog.csdn.net/20161019140213360)

5.进到命令行窗口，这里你可以操作数据库了，来
(1) 创建数据库
>use myMongoDB

![jojo's blog](http://img.blog.csdn.net/20161019140227784)

(2)查看所有数据库
>show dbs

![jojo's blog](http://img.blog.csdn.net/20161019140330675)


参考地址 http://www.runoob.com/mongodb/mongodb-create-database.html

6.关闭数据库，很重要，不正常关闭下次启动有可能会异常
>use admin
>db.shutdownServer()

![jojo's blog](http://img.blog.csdn.net/20161019135738938)

切换数据库启动的命令行看下，数据库已经关闭了！

![jojo's blog](http://img.blog.csdn.net/20161019140901697)