'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async index() {
    this.ctx.body = { message: 'admin_actilce' };
  }

  async create() {
    this.ctx.body = { message: 'admin_actilce_create' };
  }

  async patch() {
    this.ctx.body = { message: 'admin_actilce_patch' };
  }

  async remove() {
    this.ctx.body = { message: 'admin_actilce_remove' };
  }

  async fetch() {
    this.ctx.body = { message: 'admin_actilce_fetch' };
  }
}

module.exports = ArticleController;
