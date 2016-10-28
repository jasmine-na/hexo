---
title: grunt livereload nodemon grunt集成自动重启（实例）
date: 2016-10-27 13:54:18
tags:
 - grunt
 - livereload
---
1、安装express-generator：

参见[http://blog.csdn.net/weixin_36401046/article/details/52860827](http://blog.csdn.net/weixin_36401046/article/details/52860827) 

2、在D盘下新建目录grunt-liveredload-demo，打开命令行，进入grunt-liveredload-demo目录，

初始化myapp这个项目目录

```
> express myapp
```
![jojo's blog](http://img.blog.csdn.net/20161020110418979)

```
> cd myapp
```

```
> npm install
```


3、在项目根目录myapp下新建Gruntfile.js文件，配置Gruntfile.js文件，内容如下：

```
module.exports=function(grunt){ 
    //任务配置 
    grunt.initConfig({ 
    	watch:{
    		html:{
    			files:['views/**'],
    			option:{
    				livereload:true
    			}
    		}
    	},
    	nodemon:{
    		dev:{
    			script:'bin/www',
    			options:{
    				env:{
    					port:3000
    				}
    			}
    		}
    	},
    	concurrent:{
    		tasks:['nodemon','watch'],
    		options:{
               logConcurrentOutput:true
    		}
    		
    	}
    }); 
    //载入任务 
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-nodemon'); 
    grunt.loadNpmTasks('grunt-concurrent'); 
    //注册任务 
    grunt.registerTask('serve',['concurrent']); 
} 
```


4、安装grunt、grunt-contrib-watch、grunt-nodemon、grunt-concurrent四个模块:

```
> npm install grunt --save-dev
```
```
> npm install grunt-contrib-watch --save-dev
```
```
> npm install grunt-nodemon --save-dev
```
```
> npm install grunt-concurrent --save-dev
```

![jojo's blog](http://img.blog.csdn.net/20161020141702197)



5、启动grunt

```
>grunt serve
```

![jojo's blog](http://img.blog.csdn.net/20161020142203231)

6、修改文件，app就可以自动重启了