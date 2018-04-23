var demoDao = require('../dao/DemoDao');

var DemoService = {
    findById: async function(id) {
        return await demoDao.findById(id);
    }
};

module.exports = DemoService;