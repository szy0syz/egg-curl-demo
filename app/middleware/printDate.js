'use strict';

module.exports = options => {
  return async function printDate(ctx, next) {
    console.log('content extend - jwt: ', ctx.jwt());
    console.log('printDate middleware options: ', options);
    console.log('printDate middleware print: ', new Date().toLocaleDateString());
    await next();
  };
};
