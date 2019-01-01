'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = '后台管理首页';
  }
}

module.exports = IndexController;
