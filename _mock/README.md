# [fms](http://fmsjs.org/)-demo

Front Mock Server | 前端数据模拟服务器

> 在线预览 [demo.fmsjs.org](http://demo.fmsjs.org/)

[下载代码](https://github.com/nimojs/fms-demo/archive/master.zip)

##如果你不了解 Node 请务必阅读 [Node 安装启动测试](http://www.jb51.net/article/50837.htm)


## 目录
```shell
- doc/      # fms 生成的文档
- mock/     # 模拟后端PHP渲染HTML所需代码
- static/   # 静态资源文件
- view/     # 模拟后端渲染的PHP模板
- *.html    # html示例
- fms.js    # 启动文件
```


## 安装与启动 

```shell
npm install fms
# 或者
npm install fms -g
```

> 请务必安装 nodemon 启动项目提高调试效率 `npm install nodemon -g`

```shell
nodemon -w fms.js fms.js
```
或者

```shell
node fms.js
```
ps：修改后，需要自己手动重启
## 模拟PHP渲染

若希望打开后端渲染脚本端口请在项目根目录运行
```shell
php -S 127.0.0.1:1234 -t mock
```
