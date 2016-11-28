---
title: 怎么在页面里引入bootstrap的css和js文件呢？
date: 2016-11-27 13:54:18
tags:
 - node
---
怎么在页面里引入bootstrap的css和js文件呢？
![这里写图片描述](http://img.blog.csdn.net/20161128111810694)
这是一个nodejs+express工程 在npm install之后或使用npm install bootstrap命令安装bootstrap之后，怎么在views/index.ejs文件中引入bootstrap.css文件呢？

在app.js里面引入这句

```
app.use("/lib",express.static(path.join(__dirname, 'node_modules')));
```

制定程序的lib库文件目录
然后在ejs里的路径里直接写`/lib/bootstrap/dist/js/bootstrap.min.js`等，你的node_modules文件夹中的bootstrap包里面的文件就会被映射，因为 这个__dirname 已经是获取当前模块文件所在目录的完整绝对路径。