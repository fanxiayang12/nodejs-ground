var MongoDao = require('../../../user_modules/mongo/MongoDao');

var demoMongoDao = new MongoDao('emdataBI','task_list');

module.exports = demoMongoDao;