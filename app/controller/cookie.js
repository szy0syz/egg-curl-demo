'use strict';

const Controller = require('egg').Controller;

class CookieController extends Controller {
  async index() {
    const username = this.ctx.cookies.get('username', {
      encrypt: true,
    });

    this.ctx.body = {
      success: true,
      data: { username },
    };
  }
}

module.exports = CookieController;
