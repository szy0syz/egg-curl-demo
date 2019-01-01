'use strict';
const cheerio = require('cheerio');

module.exports = {
  schedule: {
    interval: '5s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    const { data } = await ctx.curl('http://news.baidu.com/');
    const $ = cheerio.load(data.toString());
    const title = $('title').text();
    console.log((new Date()).toLocaleString() + ' schedule spider:', title);
    console.log('~~~~hotnews~~~~');
    $('.hotnews a').each((index, item) => {
      console.log($(item).text());
    });
    console.log('^^^^^^^^^^^^^^');
  },
};
