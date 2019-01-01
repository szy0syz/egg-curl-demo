'use strict';

const Controller = require('egg').Controller;

class CookieController extends Controller {
  async index() {
    const username = this.ctx.cookies.get('username', {
      encrypt: true,
    });

    if (username) {
      this.ctx.body = {
        success: true,
        data: { username },
      };
    } else {
      this.ctx.body = {
        success: false,
        message: 'cookie is null',
      };
    }
  }
}

module.exports = CookieController;
