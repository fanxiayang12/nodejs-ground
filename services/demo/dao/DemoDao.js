var MysqlDao = require('../../../user_modules/mysql/MysqlDao');

var demoDao = new MysqlDao('emdata_emr_account','emr_sys_dept');

module.exports = demoDao;