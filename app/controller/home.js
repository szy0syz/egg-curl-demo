'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.app.test('我是test');
    console.log('context extend: ', this.ctx.jwt());
    await this.ctx.render('index');
  }
}

module.exports = HomeController;
