/**
 * Created by alex on 27/10/2016.
 */
var expess=require('express');
var app = expess();
var port=3000;
var day=new Date().toString();
var middleware={
    requireAuthentication:function (req,res,next) {
        console.log('private route hit');
        next();
    },
    logger:function (req,res,next) {
        console.log('Request : '+req.method+''+req.originalUrl+' Date ' +day);
        next();
    }
};


app.use(middleware.logger);


app.get('/about',middleware.requireAuthentication,function (req,res) {
    res.send('About Page!!');
});

app.use(expess.static(__dirname+'/public'));

app.listen(port,function () {
    console.log('Express Server Started'+' at Port '+port)
});

