const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const oauth = require('./routes/oauth')
const test = require('./routes/test')
const demo = require('./routes/demo')
const mq = require('./routes/mq')

var config = require('./config');
var weixinConfig = require('node-weixin-config');
//init app
weixinConfig.app.init(config.app);

// redis
// var Redis = require('./user_modules/Redis');
// var redis = new Redis();
// redis.connect();

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(oauth.routes(), oauth.allowedMethods())
app.use(test.routes(),test.allowedMethods())
app.use(demo.routes(),demo.allowedMethods());
app.use(mq.routes(),mq.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

var demoMQService = require('./services/mq/service/DemoMQService');
demoMQService.consumer();

module.exports = app
