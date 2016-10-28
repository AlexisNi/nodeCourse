/**
 * Created by alex on 27/10/2016.
 */
var expess=require('express');
var app = expess();
var port=3000;
var day=new Date().toString();
var middleWare=require('./middleWare');



app.use(middleWare.logger);


app.get('/about',middleWare.requireAuthentication,function (req,res) {
    res.send('About Page!!');
});

app.use(expess.static(__dirname+'/public'));

app.listen(port,function () {
    console.log('Express Server Started'+' at Port '+port)
});

