'use strict';

const Service = require('egg').Service;
const LOG = 'log';

class LogService extends Service {

  async list() {
    return await this.app.mysql.select(LOG);
  }
}

module.exports = LogService;
