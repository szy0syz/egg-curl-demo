'use strict';

module.exports = options => {
  return async function forBindIPs(ctx, next) {
    // console.log('forBindIPs - app: ', app);
    const { ip } = ctx.request;
    const { ips } = options;
    const hasBound = ips.some(item => ip === item);
    if (hasBound) {
      ctx.status = 403;
      ctx.body = {
        success: false,
        message: '无权访问',
      };
    } else {
      await next();
    }
  };
};
