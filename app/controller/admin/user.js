'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = { message: 'admin_user' };
  }

  async create() {
    this.ctx.body = { message: 'admin_user_create' };
  }

  async patch() {
    this.ctx.body = { message: 'admin_user_patch' };
  }

  async remove() {
    this.ctx.body = { message: 'admin_user_remove' };
  }

  async fetch() {
    this.ctx.body = { message: 'admin_user_fetch' };
  }
}

module.exports = UserController;
