/**
 * Created by alex on 27/10/2016.
 */

var day=new Date().toString();

var middleware={
    requireAuthentication:function (req,res,next) {
        console.log('private route hit');
        next();
    },
    logger:function (req,res,next) {
        console.log('Request : '+req.method+''+req.originalUrl+' Date '+day);
        next();
    }
};

module.exports=middleware;