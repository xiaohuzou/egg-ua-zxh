'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `isIOS: ${ctx.isIOS}`;
  }
}

module.exports = HomeController;
