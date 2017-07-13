var koa = require('koa');
var Router = require('koa-router');
var bodyparser = require('koa-bodyparser');

var app = koa();
var router = new Router();

app.use(bodyparser());

router.get('/',function * (){
    this.body = '<form action="/post" method="post">'+
                '<input type="text" name="id"/>'+
                '<input type="submit" value="送出"/>'+
                '<form/>';
});

router.get('/get',function * (){
  console.log(this.request.query.id);
});

router.post('/post',function * (){
  console.log(this.request.body);
});

app.use(router.middleware());
app.listen(3000);
