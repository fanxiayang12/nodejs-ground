var MysqlDB = require('./MysqlDB');
/**
 * Created by zhanxiaoping 
 * zhanxp@me.com
 */
function MysqlDao(database, table) {
    this.table = table;
    this.db = new MysqlDB(database);
    this.insert = async function(data) {
        return await this.db.insert(this.table, data);
    };

    this.update = async function(data) {
        return await this.db.update(this.table, data);
    };

    this.findById = async function(id) {
        return await this.db.loadById(this.table, id);
    };

    this.findByKV = async function(key, value) {
        return await this.db.loadByKV(this.table, key, value);
    };

    this.find = async function(where, params) {
        var conditions = {};
        conditions.where = where;
        conditions.params = params;
        return await this.db.load(this.table, conditions);
    };

    this.list = async function(where, params,orderBy,cols) {
        var conditions = {};
        conditions.where = where;
        conditions.params = params;
        conditions.orderBy = orderBy;
        conditions.cols = cols;
        return await this.db.list(this.table, conditions);
    };
    
    this.count = async function(where,params){
        var conditions = {};
        conditions.where = where;
        conditions.params = params;
        return await this.db.count(this.table,conditions);
    };

    this.delete=async function(where,params){
        var conditions={};
        conditions.where=where;
        conditions.params=params;
        
        return await this.db.delete(this.table,conditions);
    };
    this.pageList = async function(pageIndex, pageSize, where, params,orderBy) {
        var conditions = {};
        conditions.where = where;
        conditions.params = params;
        conditions.limit = pageSize;
        conditions.orderBy = orderBy;
        conditions.skip = pageSize * (pageIndex - 1);
        console.log(this.table);
        var items = await this.db.list(this.table, conditions);
        var total = await this.db.count(this.table, conditions);
        return {
            items: items,
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize
        };
    };

}

module.exports = MysqlDao;