'use strict';

// 通过 app.test() 访问
module.exports = {
  test(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    console.log('app extend: ', param);
  },
};
