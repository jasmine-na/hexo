---
title: node.js 使用ejs模板引擎时后缀换成.html
date: 2016-11-27 13:54:18
tags:
 - node
---
将

```
app.set('view engine', 'jade');
```

换成

```
//将引擎修改为html
var jade = require('jade');//在app.js的头上定义jade
app.engine('html',jade.__express);//注册html模板引擎
app.set('view engine', 'html');//将模板引擎换成html
```


修改模板文件的后缀为.html。