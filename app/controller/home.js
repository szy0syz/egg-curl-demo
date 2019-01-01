'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.app.test('application extend: ', 'test');
    console.log('context extend: ', this.ctx.jwt());

    this.ctx.cookies.set('username', 'jerry_shi_你好', {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true, // 不允许前端使用js访问
      signed: true, // 签名验证
      encrypt: true, // 是否加密，eggjs中只有cookie加密后才能中文赋值，否则报错。
    });

    await this.ctx.render('index');
  }
}

module.exports = HomeController;
