'use strict';

module.exports = options => {
  return async function auth(ctx, next) {
    console.log('router middleware: ', options.title);

    await next();
  };
};
