const router = require('koa-router')()
var weixinOauth = require('node-weixin-oauth');

router.prefix('/oauth')

router.get('/', function (ctx, next) {
  var url = weixinOauth.createURL(appId, redirectUri, state, userInfo)
  ctx.response.redirect(url);
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a oauth/bar response'
})

module.exports = router
