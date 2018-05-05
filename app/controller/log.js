'use strict';

const Controller = require('egg').Controller;

class LogController extends Controller {

  async index() {
    this.ctx.body = await this.ctx.service.log.list();
  }
}

module.exports = LogController;
