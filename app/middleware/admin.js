'use strict';

module.exports = () => {
  return async function admin(ctx, next) {
    // 如果session 没有存 用户信息 表示没有登录，则转入首页
    if (ctx.session && ctx.session.userinfo) {
      console.log('~~[info]: session.userinfo ', ctx.session.userinfo);
      await next();
    } else {
      // if (ctx.request.url === '/') {
      //   await next();
      // } else {
      //   console.log('您还没登录');
      //   ctx.redirect('/');
      // }

      console.log('您还没登录');
      ctx.redirect('/');
    }
  };
};
