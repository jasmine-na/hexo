---
title: Vue.js实践：一个Node.js+mongoDB+Vue.js的博客内容管理系统
date: 2016-11-27 13:54:18
tags:
 - node
 - vue
---
**项目来源**
以前曾用过WordPress搭建自己的博客网站，但感觉WordPress很是臃肿。所以一直想自己写一个博客内容管理器。

正好近日看完了Vue各个插件的文档，就用着Vue尝试写了这个简约的博客内容管理器（CMS）。

**完成的功能**

 - 一个基本的博客内容管理器功能，如后台登陆，发布并管理文章等 支持markdown语法编辑
 - 支持代码高亮 
 - 可以管理博客页面的链接
 - 博客页面对移动端适配优化 
 - 账户管理(修改密码)
 - 页面足够大气、酷炫~

于是，为了彰显一贯的酷炫，我给后台写了一套星空主题。。。

**登陆页面**

![这里写图片描述](http://img.blog.csdn.net/20161128134443650)

**后台管理页面**

![这里写图片描述](http://img.blog.csdn.net/20161128133623161)
但博客页面最后没用后台的星空主题，主要是觉得黑色不太好搭配。

于是我想，既然前端都是用Vue.js写的，那就参chao考xi一下Vue.js尤雨溪的博客样式吧！

在这基础上博客页面又加了自己写的canvas动画，应该是足够优雅了~
![这里写图片描述](http://img.blog.csdn.net/20161128134724018)

[Demo](http://115.28.90.175:90/#)

登陆后台按钮在页面最下方“站长登陆”，可以以游客身份登入后台系统。

[源码](https://github.com/ycwalker/CMS-of-Blog)

**用到的技术和实现思路**
前端：Vue全家桶

```
Vue.js
Vue-Cli
Vue-Resource
Vue-Validator
Vue-Router
Vuex
Vue-loader
```

后端

```
Node.js
mongoDB (mongoose)
Express


```
工具和语言

```
Webpack
ES6
SASS
Jade
```


整体思路

```
Node服务端除了主页外，不做模板渲染，渲染交给浏览器完成
Node服务端不做任何路由切换的内容，这部分交给Vue-Router完成
Node服务端只用来接收请求，查询数据库并用来返回值
```

所以这样做前后端几乎完全解耦，只要约定好restful风格的数据接口，和数据存取格式就OK啦。

后端我用了mongoDB做数据库，并在Express中通过mongoose操作mongoDB，省去了复杂的命令行，通过Javascript操作无疑方便了很多。

简单的说一下Vue的各个插件：

```
Vue-Cli:官方的脚手架，用来初始化项目
Vue-Resource：可以看作一个Ajax库，通过在跟组件引入，可以方便的注入子组件。子组件以this.$http调用
Vue-Validator：用来验证表单
Vue-Router：官方的路由工具，用来切换子组件，是用来做SPA应用的关键
Vuex：控制组件中数据的流动，使得数据流动更加清晰，有迹可循。通过官方的vue-devtools可以无缝对接
Vue-loader：webpack中对Vue文件的加载器
```

文件目录
![这里写图片描述](http://img.blog.csdn.net/20161128134956412)
我将前端的文件统一放到了src目录下，其中的mian.js是webpack的入口。

所有页面分割成一个单一的vue组件，放在componentss中，通过入口文件mian.js，由webpack打包生成，生成的文件放在public文件夹下。

后端文件放在server文件夹内，这就是基于Express的node服务器，在server文件夹内执行
```
node www
```

就可以启动Node服务器，默认侦听3000端口。
**关于Vue-Cli**
我只是使用了simple的template，相对于默认的template，simple的配置简单得多，但已经有了浏览器自动刷新，生产环境代码压缩等功能。

```
vue init simple CMS-of-Blog
```

<p>以下是Vue-Cli生成的webpack的配置文件，我只做了一点小改动。</p>
<p>话说React.js里就没用像Vue-Cli这样好用的脚手架，还是Vue.js简单优雅。。</p>
**Webpack.config.js**

```
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: 'build.js',
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
            , {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}
```

可以看出尤大大帮我们把浏览器自动刷新，热加载和生产环境的代码压缩都写好了，简直超贴心。

然而实际项目中，我还是碰到一个麻烦的问题，下面是package.json中的script脚本

```
"scripts": {
    "dev": "webpack-dev-server --inline --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules",
    "watch": "webpack --progress --color --watch",
    "server": "supervisor ./server/www"
  },
```

运行

```
npm run dev
```

后，浏览器在8080端口开了一个服务器，然而这个服务器是用来服务前端页面的，也就是说，从这里启动服务器而不是开启Node服务器会造成数据无法交互，毕竟这个服务器不能连接数据库。但这个端口是可以在文件修改之后自动刷新浏览器的。

然后，通过分别执行

```
npm run watch
npm run server
```

来侦听文件改动，并重启Node服务器，此时浏览器是不能自动刷新的。找了一些方法但终归没解决。习惯了自动浏览器刷新，碰到这种情况蛮蛋疼的。

于是只好这样：

在修改样式的时候使用8080端口的服务器，在修改数据交互的时候手动刷新在3000端口服务器的浏览器。

虽然不是很方便，但至少通过supervisor不用自己重启Node服务器了。。。

**关于Vue-Router**
因为写的是但也应用（SPA），服务器不负责路由，所以路由方面交给Vue-Router来控制。

下面是根组件，路由控制就在这里，组件挂载在body元素下：

**main.js**

```
let router = new VueRouter()

router.map({
    '/': {
        component: Archive
    },
    'login': {
        component: Login
    },
    '/article': {
        component: Article
    },
    '/console': {
        component: Console,
        subRoutes: {
            '/': {
                component: ArticleList
            },
            '/editor': {
                component: Editor
            },
            '/articleList': {
                component: ArticleList
            },
            '/menu': {
                component: Links
            },
            'account': {
                component: Account
            },
        },
    },
})
let App = Vue.extend({
    data(){
        return {}
    },
    components: {Waiting,Pop,NightSky,MyCanvas},
    http: {
        root: '/'
    },
    computed: {
        waiting: ()=>store.state.waiting,
        pop:()=>store.state.popPara.pop,
        bg:()=>store.state.bg,
    },
    store
})

router.start(App, 'body')
```

**对应的文档首页 index.html**

```
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <title>Blog-CMS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <waiting v-if="waiting"></waiting>
    <pop v-show="pop"></pop>
    <component :is="bg"></component>
    <router-view></router-view>
    <script src="public/build.js"></script>
  </body>
</html>
```

可以看到路由控制在body元素下的router-view中。之前的waiting，pop和component元素分别是等待效果（就是转圈圈）的弹出层，信息的弹出层，和背景样式的切换。

其实这个index.html是有express通过jade生成的，实际项目中并没有html文件，我是把生成好的html放在这里方便展示。

关于Vue-loader
Vue-loader是Vue官方支持webpack的工具，用来将组件写在一个文件里。之前的目录中，有很多分割好的vue文件，每一个文件是一个独立的组件。

比如，这是一个弹出层的组件：

**Pop.vue**

```
<template>
    <div class="shade">
        <div class="content">
            <p>{{getPopPara.content}}</p>
            <div class="button">
                <button class="ok" @click="ok">确定</button>
                <button class="cancel" @click="cancel"
                        v-if="getPopPara.cb2">取消
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {getPopPara} from '../vuex/getters'
    export default{
        vuex: {
            getters: {
                getPopPara,
            }
        },
        methods: {
            ok(){
                let fn = this.getPopPara.cb1
                typeof fn == 'function' && fn()
            },
            cancel(){
                let fn = this.getPopPara.cb2
                typeof fn == 'function' && fn()
            }
        }

    }
</script>
<style lang="sass">
    @import "../SCSS/Pop.scss";
</style>

```
每一个vue文件都有三个部分（其实是可选的），分别是template，script和style，这也很好理解，就是把html，JS和CSS合并在一起写了嘛。

这个弹窗组件，通过vuex获得其他组件传递过来的参数，参数是一个对象，包括弹出层的展示信息和点击确定或取消时的回调函数。

因为编辑器不支持在vue文件中用sass语法，所以我把sass文件放在外部，通过@import引入。

关于Vue-Resource
Vue-Resource可以看成一个与Vue集成的Ajax库，用来创建xhr和获取xhr的response。

因为和Vue高度集成，所以在vue组件中使用很方便。

Article.vue

```
<template>
    <div class="wrap">
        <my-header></my-header>
        <section class="article">
            <article class="post-block">
                <div class="post-title">{{title}}</div>
                <div class="post-info">{{date}}</div>
                <div class="post-content"
                 v-html="content | marked">
                </div>
            </article>
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import myHeader     from './MyHeader.vue'
    import myFooter     from './MyFooter.vue'
    import marked       from '../js/marked.min.js'
    import {bgToggle}   from '../vuex/actions'

    export default{
        data(){
            return {
                title: '',
                date: '',
                content: ''
            }
        },
        filters: {
            marked
        },
        created(){
            let id = this.$route.query.id
            this.$http.get('/article?id=' + id)
                    .then((response)=> {
                        let body = JSON.parse(response.body)
                        this.content = body.content
                        this.title = body.title
                        let d = new Date(body.date)
                        this.date = d.getFullYear() + '年' +
                                (d.getMonth() + 1) + '月' +
                                d.getDate() + '日'
                    }, (response)=> {
                        console.log(response)
                    })
        },
        components: {
            myHeader,
            myFooter
        },
        ready(){
            this.bgToggle('MyCanvas')
        },
        vuex:{
            actions:{
                bgToggle
            }
        }
    }
</script>
<style lang="sass">
    @import "../SCSS/Article.scss";
</style>

```

Article.vue组件种在created生命周期时创建并发送了一个xhr的get请求，在获取成果后把response对象中的属性在赋值给data中相应的属性，vue会自动更新视图。

博客所支持的markdown语法的关键所在也在这个组件里。

```
<div class="post-content">
       {{{content | marked}}}
</div>
```

通过引入markdown的filter使得输出的html直接被转换成html结构，还是很方便的。

**关于后端**
后端是用node.js作为服务器的，使用了最流行Express框架。

主体是由Express生成，本身十分精简。在实践中修改的地方主要是添加了各种前端发送的get和post请求。

```
router.get('/article', function (req, res, next) {
    var id = req.query.id
    db.Article.findOne({_id: id}, function (err, doc) {
        if (err) {
            return console.log(err)
        } else if (doc) {
            res.send(doc)
        }
    })
})
```

比如这个请求处理来自前端的get请求，通过mongoose来查询数据库并返回数据。

前端页面通过promise控制异步操作，把得到的数据放入组件的data对象中，Vue侦测变化并更新视图。

数据库的初始化文件放在了init.js中，第一次运行的时候会新建名为admin的用户，初始密码为111，可以在控制台的账号管理中修改。

后记
其实还有很多很多没有在这篇文章提及的地方。毕竟这个博客框架相对是比较大的东西。

写过这个博客管理器后，感受还是蛮多的，对Vue.js中的数据绑定，组件化和数据流了解的更深入了一层，同时也对Node.js的后端有了一次优雅的实践。

所以，学过东西之后，实践是非常有必要的。前端很多时候就是不断踩坑的过程。一路踩坑再爬坑，获益匪浅。。。