var koa = require('koa');
var Router = require('koa-router');

var app = koa();
var router = new Router();

router.get('/params/:name/:message',function * (){
    this.body = this.params.name + ' say ' + this.params.message;
});

app.use(router.middleware());
app.listen(3000);
