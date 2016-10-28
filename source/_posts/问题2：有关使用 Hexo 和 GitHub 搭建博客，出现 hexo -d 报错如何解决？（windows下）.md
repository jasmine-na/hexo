---
title: 问题2：有关使用 Hexo 和 GitHub 搭建博客，出现 hexo -d 报错如何解决？（windows下）
date: 2016-10-27 13:54:18
tags:
---

```
bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com': Invalid argument
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/do
cs/troubleshooting.html
Error: bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com': Invalid argument

    at ChildProcess.<anonymous> (E:\git\node_modules\hexo-util\lib\spawn.js:37:1
7)
    at emitTwo (events.js:106:13)
    at ChildProcess.emit (events.js:191:7)
    at ChildProcess.cp.emit (E:\git\node_modules\cross-spawn\lib\enoent.js:40:29
)
    at maybeClose (internal/child_process.js:850:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:215:5)
FATAL bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com': Invalid argument

Error: bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com': Invalid argument

    at ChildProcess.<anonymous> (E:\git\node_modules\hexo-util\lib\spawn.js:37:1
7)
    at emitTwo (events.js:106:13)
    at ChildProcess.emit (events.js:191:7)
    at ChildProcess.cp.emit (E:\git\node_modules\cross-spawn\lib\enoent.js:40:29
)
    at maybeClose (internal/child_process.js:850:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:215:5)
```
![jojo's blog](http://img.blog.csdn.net/20161026175323201)


我的config.yml这样配置的

```
deploy:
  type: git
  repo: https://github.com/jasmine-na/jasmine-na.github.io.git
  branch: master
```

原因：是在windows下的cmd.exe环境的缘故

![jojo's blog](http://img.blog.csdn.net/20161026175411418)

![jojo's blog](http://img.blog.csdn.net/20161026175421827)

然后我把命令切换到Git Bash 环境中运行，有提示输入github的用户名和密码，输入 hexo -d 成功上传了。