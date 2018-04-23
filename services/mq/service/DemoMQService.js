var demoMQDao = require('../dao/DemoMQDao');

var DemoMQService = {
    consumer: async function() {
        await demoMQDao.consumer(async function(data){
            console.log(data);
        });
    },
    publish: async function(data) {
        await demoMQDao.publish(data);
    }
};

module.exports = DemoMQService;