const router = require('koa-router')()
var config = require('../config');
var weixinLink = require('node-weixin-link');

router.prefix('/qrcode')

router.get('/temporary/create', function (ctx, next) {
    var scene_id;
    weixinLink.qrcode.temporary.create(settings, config.app, scene_id, function (error, json) {
        //json.url
        //json.expire_seconds
        //json.ticket
    });
  var url = weixinOauth.createURL(appId, redirectUri, state, userInfo)
  ctx.response.redirect(url);
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a oauth/bar response'
})

module.exports = router
