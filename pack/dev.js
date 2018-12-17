const Bundler = require('parcel-bundler');
const path = require('path');
const express = require('express');
const config = require('./config.js');

// 入口文件路径
const rootPath = path.resolve(__dirname, '..');
const file = path.join(rootPath, 'index.html');
const app = express();


// 使用提供的入口文件路径和选项初始化 bundler
const bundler = new Bundler(file, config);

if (module.hot) {
    module.hot.dispose(function() {
        // 模块即将被替换时
    })

    module.hot.accept(function() {
        // 模块或其依赖项之一刚刚更新时
    })
}

bundler.on('buildEnd', () => {
    // 做一些操作……
});

// app.use('/static', express.static(path.join(rootPath, 'static')))

// 让 express 使用 bundler 中间件，这将让 parcel 处理你 express 服务器上的每个请求
app.use(bundler.middleware());

// 监听 8080 端口
app.listen(9000);