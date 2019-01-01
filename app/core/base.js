'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async getUserInfo() {
    return ({
      username: 'jerry_shi',
      age: 18,
      role: 'admin',
    });
  }

  async success(redirectUrl = '/') {
    await this.ctx.render('common/success', { redirectUrl });
  }

  async error(redirectUrl = '/') {
    await this.ctx.render('common/error', { redirectUrl });
  }
}

module.exports = BaseController;
