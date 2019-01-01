'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546183391338_7716';

  // 配置 需要运行的 中间件
  config.middleware = [ 'compress', 'jsonp', 'printDate', 'forBindIPs', 'csrf' ];

  config.compress = {
    threshold: 1024, // 支持指定只有 body 大于 1kb 时才启用gzip压缩
  };

  // 修改 eggjs 框架默认中间件配置
  config.bodyParser = {
    jsonLimit: '5mb', // Default is 1mb
  };

  // 设置 session 的全局配置
  config.session = {
    key: 'Jerry_Serv_SESS',
    maxAge: 1000 * 60 * 10, // 10 mins
    httpOnly: true,
    encrypt: true,
    renew: true, // 每次刷新页面 session 都会被延长 maxAge
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 为 printDate 传递参数
  config.printDate = {
    name: 'jerrys',
  };

  // 为 forBindIPs 传递参数
  config.forBindIPs = {
    ips: [
      '127.0.0.1',
      '192.168.4.246',
    ],
  };

  config.api = 'http://www.phonegap100.com/';

  return config;
};
