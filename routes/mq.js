const router = require('koa-router')()
var demoMQService = require('../services/mq/service/DemoMQService');

router.prefix('/mq')

router.get('/publish', async function (ctx, next) {
    var data = {id : 1};
    await demoMQService.publish(data);
    ctx.response.type = 'json';
    ctx.body = data;
})

module.exports = router
