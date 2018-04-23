var demoMongoDao = require('../dao/DemoMongoDao');

var demoMongoService = {
    findById: async function (id) {
        return await demoMongoDao.findById(id);
    },
    findByKV: async function (key, value) {
        return await demoMongoDao.findByKV(key, value);
    }
};

module.exports = demoMongoService;