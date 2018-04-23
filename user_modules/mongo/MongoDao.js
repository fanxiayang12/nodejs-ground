const MongoDB = require('./MongoDB');

/**
 * @description     Mongo数据库操作集合
 * @author          樊夏阳
 * @usage           
 *      1、config mongo.database
 *      2、var MongoDao = require('MongoDao');
 *      3、var demoMongoDao = new MongoDao('database','collection');
 */
function MongoDao(database, collectionName) {
    this.collectionName = collectionName;
    this.database = database;
    this.db = null;

    this.connect = async function () {
        if (!this.db) {
            this.db = new MongoDB(this.database);
            await this.db.connect();
        }
    };

    this.insert = async function(data) {
        await this.connect();
        return await this.db.insert(this.collectionName, data);
    };

    this.update = async function(data) {
        await this.connect();
        return await this.db.updateById(this.collectionName, data, data._id);
    };

    this.delete = async function(query) {
        await this.connect();
        return await this.db.delete(this.collectionName, query);
    };

    this.findById = async function(id) {
        await this.connect();
        return await this.db.findOne(this.collectionName, { _id: id });
    };

    this.findByKV = async function(key, value) {
        await this.connect();
        var query = {};
        query[key] = value;
        return await this.db.findOne(this.collectionName, query);
    };

    this.find = async function(query, options) {
        await this.connect();
        return await this.db.findOne(this.collectionName, query, options);
    };

    this.list = async function(query, options) {
        await this.connect();
        return await this.db.find(this.collectionName, query, options);
    };

    this.pageList = async function(pageIndex, pageSize, query) {
        await this.connect();
        var options = { limit: pageSize, skip: (pageIndex - 1) * pageSize };
        var items = await this.db.find(this.collectionName, query, options);
        var total = await this.db.count(this.collectionName, query, null);
        return {
            items: items,
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize
        };
    };
}

module.exports = MongoDao;