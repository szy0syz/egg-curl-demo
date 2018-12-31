'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546183391338_7716';

  // 配置 需要运行的 中间件
  config.middleware = [ 'printDate', 'forBindIPs' ];

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

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.api = 'http://www.phonegap100.com/';

  return config;
};
