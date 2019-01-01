'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/api/users', controller.api.user.fetch);
  router.post('/api/users', controller.api.user.create);
  router.patch('/api/users', controller.api.user.patch);
  router.delete('/api/users', controller.api.user.remove);

  router.get('/api/article', controller.api.article.fetch);
  router.post('/api/article', controller.api.article.create);
  router.patch('/api/article', controller.api.article.patch);
  router.delete('/api/article', controller.api.article.remove);

  router.get('/api/products', controller.api.product.fetch);
  router.post('/api/products', controller.api.product.create);
  router.patch('/api/products', controller.api.product.patch);
  router.delete('/api/products', controller.api.product.remove);
};
