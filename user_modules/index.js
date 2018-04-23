var MongoDB = require('./mongo/MongoDB');
var MongoDao = require('./mongo/MongoDao');
var MysqlDB = require('./mysql/MysqlDB');
var MysqlDao = require('./mysql/MysqlDao');
var api = require('./apiResult');
var Redis = require('./Redis');
var errors = require('./errors');
var logger = require('./logger');
var utils = require('./utils');
var Cache = require('./Cache');
var config = require('../config');

/**
 * Created by zhanxiaoping 
 * zhanxp@me.com
 */
var emdata = {
    mongo: new MongoDB(),
    mysql: new MysqlDB(),
    emr: new MysqlDB(),
    api: api,
    errors: errors,
    logger: logger,
    utils: utils,
    Redis: Redis,
    Cache: Cache,
    MysqlDB: MysqlDB,
    MysqlDao: MysqlDao,
    MongoDao: MongoDao
};

if (config.redis) {
    var redis = new Redis();
    redis.connect(config.redis);
    emdata.cache = redis;
} else {
    var cache = new Cache();
    emdata.cache = cache;
}

// emdata.emrs = {};
// emdata.getEmr = function(dbName) {
//     new MysqlDB()
// }
emdata.emrs = {};
emdata.getEmr = async function(dbName){
    if(!dbName) return null;
    if(this.emrs[dbName]){
        return this.emrs[dbName];
    }
    let tempEmr = Object.assign({}, config.emr);
    tempEmr.database = dbName;
    let db = new MysqlDB();
    db.debug = config.debug;
    await db.connect(tempEmr);
    this.emrs[dbName] = db;
    return db;
}

module.exports = emdata;