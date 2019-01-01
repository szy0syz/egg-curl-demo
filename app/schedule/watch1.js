'use strict';

let i = 0;
module.exports = {
  schedule: {
    disable: true,
    interval: '3s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    ++i;
    console.log('schedule i: ', i);
    ctx.app.cache = i;
  },
};
