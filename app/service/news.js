'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async fetch() {
    const url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    const res = await this.ctx.curl(url);
    const data = JSON.parse(res.data);
    return data && data.result || [];
  }

  async detail(aid) {
    const url = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    const res = await this.ctx.curl(url);
    const data = JSON.parse(res.data);
    return data;
  }
}

module.exports = NewsService;
