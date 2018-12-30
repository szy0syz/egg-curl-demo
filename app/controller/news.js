'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const list = await this.service.news.fetch();
    await this.ctx.render('newsList', { list });
  }

  async detail() {
    const { aid } = this.ctx.params;
    const { result } = await this.service.news.detail(aid);
    await this.ctx.render('newsDetail', { data: result[0] });
  }
}

module.exports = NewsController;
