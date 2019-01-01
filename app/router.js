'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  const auth = app.middleware.auth({ title: 'auth middleware' });

  router.get('/', controller.home.index);
  router.get('/loginIn', controller.home.loginIn);
  router.get('/loginOut', controller.home.loginOut);

  router.get('/cookie', controller.cookie.index);
  router.get('/session', controller.session.index);

  router.get('/form', auth, controller.form.index);
  router.post('/form', controller.form.handle);

  router.get('/news', controller.news.index);
  router.get('/news/:aid', controller.news.detail);

  // ---------------------------------- //

  router.get('/admin', controller.admin.index.index);

  router.get('/admin/article', controller.admin.article.index);
  router.post('/admin/article', controller.admin.article.create);
  router.patch('/admin/article', controller.admin.article.patch);
  router.delete('/admin/article', controller.admin.article.remove);

  router.get('/api/users', controller.api.user.fetch);
  router.post('/api/users', controller.api.user.create);
  router.patch('/api/users', controller.api.user.patch);
  router.delete('/api/users', controller.api.user.remove);
};
