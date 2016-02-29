
## 目录
```shell
- mock/         # 模拟后端PHP渲染HTML所需代码
- static/       # 静态资源文件
- view/         # 模拟后端渲染的PHP模板
- *.html        # html示例
- fms.js        # 启动文件
- requests      # 发请求的文件夹
- response-data # 响应数据
```

## 模拟PHP渲染

若希望打开后端渲染脚本端口请在项目根目录运行
```shell
php -S 127.0.0.1:1234 -t mock
```
