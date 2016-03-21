// 引入 node 的 fms 模块
var fms = require('fms')

fms.run({
    // Server 启动在 3000 端口
    port: 3000,
    read: ['/static/'],
    urlRewrite: [
        '/url-rewrite.html', '/index.html',
        '/url1.html', '/index.html'
    ],
    view: {
        data:{
            user: {
                name: "fms",
                type: "free"
            }
        },
        filter: function (req, data) {
            // 不允许重写 data ：
            // 错误： data = {}
            data.PAGE_PATH = req.path // req.path === location.pathname
            data.GET = req.query
            data.POST = req.body
            data.METHOD = req.method
        }
    }
})


// 数据入口
require('./requests/app');
require('./requests/city');
