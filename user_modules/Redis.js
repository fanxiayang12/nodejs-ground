var redis = require('redis');
var logger = require("./logger");
var config = require('../config');

/**
 * Created by zhanxiaoping 
 * zhanxp@me.com
 */
function Redis() {
    this.client = null;
    this.debug = true;
    this.connected = false;

    this.connect = async function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.connected) {
                return resolve();
            }

            var url = config.redis;
            if (_this.debug) {
                logger.info('Connecting to redis...', url);
            }

            _this.client = redis.createClient(url);
            _this.client.on("error", function (err) {
                logger.error("redis Error", err);
                _this.connected = false;
                return reject(err);
            });
            _this.client.on("connect", function () {
                logger.info("redis connected");
                _this.connected = true;
                return resolve();
            });
        });
    };

    this.set = async function (key, val, seconds) {
        await this.connect();
        seconds = seconds || 0;
        await this.client.set(key, val, 'EX', seconds);
    }

    // this.expire = async function(seconds) {
    //     await this.client.expire(seconds);
    // }

    this.del = async function (key) {
        await this.connect();
        await this.client.del(key);
    }

    this.get = async function (key) {
        await this.connect();
        let _this = this;
        return new Promise(function (resolve, reject) {
            _this.client.get(key, function (err, result) {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
        //return await this.client.get(key);
    }
};

module.exports = Redis;