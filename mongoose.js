var mongoose=require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test1:test11@ds131041.mlab.com:31041/newangular');
console.log("mongodb connect...")
module.exports=mongoose;