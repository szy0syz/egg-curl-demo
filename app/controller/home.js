'use strict';

// const Controller = require('egg').Controller;
const BaseController = require('../core/base');

class HomeController extends BaseController {
  async index() {
    this.app.test('application extend: ', 'test');
    console.log('context extend: ', this.ctx.jwt());

    await this.ctx.render('index');
  }

  async login() {
    await this.ctx.render('login');
  }

  async handleLogin() {
    const { username, password } = this.ctx.request.body;
    if (username === 'jerry' && password === '4444') {
      console.log('*[info]: 登录成功');
      await this.success();
    } else {
      console.log('*[warnning]: 登录失败');
      await this.error();
    }
  }

  async loginIn() {
    this.ctx.cookies.set('username', 'jerry_shi_你好', {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true, // 不允许前端使用js访问
      signed: true, // 签名验证
      encrypt: true, // 是否加密，eggjs中只有cookie加密后才能中文赋值，否则报错。
    });

    this.ctx.session.userAge = 28;
    this.ctx.session.userinfo = {
      username: 'jerry_shi',
      userage: 18,
      role: 'admin',
    };

    this.ctx.body = {
      success: true,
      message: '登录成功',
    };
  }

  async loginOut() {
    this.ctx.cookies.set('username', null);
    this.ctx.session.userAge = null;
    console.log('清除cookie - username');
    console.log('清除session - userAge');
    this.ctx.redirect('/cookie');
  }
}

module.exports = HomeController;
