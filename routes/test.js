const router = require('koa-router')()
var logger = require('../user_modules/logger');

const demoMongoService = require('../services/mongo/service/DemoMongoService');

const Redis = require('../user_modules/Redis');
var redis = new Redis();

router.prefix('/test')

router.get('/error', function (ctx, next) {
    logger.error('logger.error');
    ctx.body = 'this is a oauth/bar response'
})

router.get('/info', function (ctx, next) {
    logger.info('logger.info');
    ctx.body = 'info';
})

router.get('/findById', async function (ctx, next) {
    var key = ctx.query.key;
    var value = ctx.query.value;
    var data = await demoMongoService.findByKV(key,value);
    ctx.response.type = 'json';
    ctx.body = data;
})

router.get('/redis/set', async function (ctx, next) {
    var key = ctx.query.key;
    var value = ctx.query.value;
    var expire = ctx.query.expire;
    await redis.set(key,value,expire);
    ctx.body = 'okay';
})

router.get('/redis/get', async function (ctx, next) {
    var key = ctx.query.key;
    var value = await redis.get(key);
    ctx.body = value;
})

module.exports = router
