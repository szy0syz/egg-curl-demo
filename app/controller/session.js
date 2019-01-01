'use strict';

const Controller = require('egg').Controller;

class SessionController extends Controller {
  async index() {
    this.ctx.body = {
      session_userAge: this.ctx.session.userAge,
    };
  }
}

module.exports = SessionController;
