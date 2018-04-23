const router = require('koa-router')()
var config = require('../config');
var weixinAuth = require('node-weixin-auth');
var weixinMessage = require('node-weixin-message');
var rawBody = require('raw-body');

// weixin ack
router.get('/', async (ctx, next) => {
  console.log('weixin is requesting with get method');
  var query = weixinAuth.extract(ctx.query);
  weixinAuth.ack(config.app.token, query, function (error, data) {
    if (!error) {
      ctx.body = data;
      return;
    }
  });
})

// weixin msg and ack
router.post('/', async (ctx, next) => {
  console.log('weixin is requesting with post method');

  var reply = weixinMessage.reply;
  var messages = weixinMessage.messages;

  // parse xml from request
  var xml = await rawBody(ctx.req, {
    length: ctx.request.length,
    limit: '1mb',
    encoding: ctx.request.charset || 'utf-8'
  });

  messages.on.text(function(message) {
    console.log(message);
    var replyMessage = reply.text(message.ToUserName,message.FromUserName,message.Content);
    ctx.body = replyMessage;
  });
  // parse message
  messages.onXML(xml);
})

module.exports = router
