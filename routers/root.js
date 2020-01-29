"use strict";
const Router = require("koa-router");
const router = Router();

router.get("/", async (ctx, next) => {
  console.log("at root................");
  await next();
});

router.get("/validate-order/:orderNumber/:emailPhone", async (ctx, next) => {
  console.log('validateOrder')
  console.log(ctx.params.orderNumber);
  console.log(ctx.params.emailPhone);
  ctx.nextapp.render(ctx.req, ctx.res, '/item-select', {
    orderNumber: ctx.params.orderNumber,
    emailPhone: ctx.params.emailPhone
  });
  await next();
});

module.exports = router;
