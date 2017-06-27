jasmine-na

# hexo博客
基于hexo等实现

>预览地址：https://jasmine-na.github.io/

### **项目介绍**
>1. 基于hexo实现的个人博客；
>2. 参考文档1：http://blog.csdn.net/weixin_36401046/article/details/52942683；
>3. 参考文档2：http://blog.csdn.net/weixin_36401046/article/details/52937108

### **功能**
>1. 文章；
>2. 标签；
>3. 相册；
>4. 留言；

## 开发

``` bash
# 全局安装hexo
npm install -g hexo

# 克隆项目
git clone https://github.com/jasmine-na/jasmine-na.git

# 下载依赖install dependencies
npm install

# 启动服务
hexo server

```
浏览器访问 http://localhost:4000
## 发布/完成部署
```
# 下载hexo-deployer-git
npm install hexo-deployer-git –save

# 清除缓存文件 db.json 和已生成的静态文件 public
hexo clean

# 生成网站静态文件到默认设置的 public 文件夹
hexo generate

# 自动生成网站静态文件，并部署到设定的仓库。
hexo deploy
```
效果预览：http://jasmine-na.github.io/

