const Bundler = require('parcel-bundler');
const path = require('path');
const { config } = require('./config');

// 入口文件路径
const rootPath = path.resolve(__dirname, '..');
const file = path.join(rootPath, 'index.html');
const dist = path.join(rootPath, 'dist');


// 使用提供的入口文件路径和选项初始化 bundler
const bundler = new Bundler(file, config);


bundler.on('buildEnd', () => {

});
