var mongoose=require('../mongoose');
var schemaUser=new mongoose.Schema({
		name:{
		type:String,
		unique:true,
		required:true
	},
		age:{
		type:Number,
		required:true,
		unique:true
	}
	})
var User=mongoose.model("User",schemaUser);
module.exports=User;