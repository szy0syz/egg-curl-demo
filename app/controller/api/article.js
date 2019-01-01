'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async index() {
    this.ctx.body = { message: 'api_article' };
  }

  async create() {
    this.ctx.body = { message: 'api_article_create' };
  }

  async patch() {
    this.ctx.body = { message: 'api_article_patch' };
  }

  async remove() {
    this.ctx.body = { message: 'api_article_remove' };
  }

  async fetch() {
    this.ctx.body = { message: 'api_article_fetch' };
  }
}

module.exports = ArticleController;
