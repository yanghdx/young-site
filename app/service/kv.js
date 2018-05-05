'use strict';

const Service = require('egg').Service;
const KV = 'kv';
const Util = require('../util/util');

class KvService extends Service {

  async get(key) {
    return await this.app.mysql.get(KV, {
      key,
    });
  }

  async getVO(key) {
    const kv = await this.get(key);
    return kv && kv.value ? JSON.parse(kv.value) : {};
  }

  async update(key, value) {
    if (!key) {
      return false;
    }
    if (Util.isObject(value) || Util.isArray(value)) {
      value = JSON.stringify(value);
    } else {
      value = String(value);
    }

    const kv = await this.get(key);
    if (kv && !kv.id) {
      return await this.app.mysql.update(KV, {
        id: kv.id,
        value,
        updateTime: (new Date()),
      });
    }
    return await this.app.mysql.insert(KV, {
      key,
      value,
      type: '',
      createTime: (new Date()),
      updateTime: (new Date()),
    });
  }
}

module.exports = KvService;
