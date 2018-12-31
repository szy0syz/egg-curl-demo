'use strict';

const Controller = require('egg').Controller;

class FormController extends Controller {
  async index() {
    await this.ctx.render('form');
  }

  async handle() {
    const { username, password } = this.ctx.request.body;

    this.ctx.body = {
      success: true,
      data: {
        username,
        password,
      },
    };
  }
}

module.exports = FormController;
