---
title: 问题1：有关使用 Hexo 和 GitHub 搭建博客，出现 hexo -d 报错如何解决？（windows下）
date: 2016-10-27 13:54:18
tags:
 - hexo
 - git
---

```
INFO  Deploying: git
INFO  Clearing .deploy_git folder...
INFO  Copying files from public folder...
warning: LF will be replaced by CRLF in 2016/10/26/hello-world/index.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in archives/2016/10/index.html.
The file will have its original line endings in your working directory.
```

![jojo's blog](http://img.blog.csdn.net/20161026173849741)

这个问题是这样解决的
第一删除你hexo 下面的.deploy_git文件夹
第二 运行 
![jojo's blog](http://img.blog.csdn.net/20161026173519752)
第三 重新 hexo clean
hexo g
hexo d
第四 打开自己的网址，进行验证是否成功
![jojo's blog](http://img.blog.csdn.net/20161026173532085)

