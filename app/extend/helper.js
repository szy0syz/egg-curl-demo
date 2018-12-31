'use strict';
const dayjs = require('dayjs');

// 通过 ctx.helper 访问
module.exports = {
  formatDate(d) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    return dayjs(d * 1000).format('YYYY-MM-DD');
  },
};
