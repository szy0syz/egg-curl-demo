'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin', controller.admin.index.index);

  router.get('/api/products', controller.api.product.fetch);
  router.post('/api/products', controller.api.product.create);
  router.patch('/api/products', controller.api.product.patch);
  router.delete('/api/products', controller.api.product.remove);
};
