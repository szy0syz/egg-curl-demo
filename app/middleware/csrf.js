'use strict';

module.exports = () => {
  return async function csrf(ctx, next) {
    // 配置全局变量
    ctx.state.csrf = ctx.csrf;
    await next();
  };
};
