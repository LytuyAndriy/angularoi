//підключаєм модуль express
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var User=require('./models/user');
//прописуєм шлях до папки dist  є статичним обєк.
app.use(express.static(__dirname+'/dist/first-app'));
app.get('/',function(req,res){
	res.sendFile(__dirname+'/dist/first-app/index.html')
})

/*var users=[{name:'Petro',
		  age:34},{name:'Ivan',
		  age:27},{name:'Andriy',
		  age:28},{name:'Taras',
		  age:30},{name:'Misha',
		  age:25}]*/

app.get('/getusers',(req,res)=>{
	User.find((err,data)=>{

	console.log(data);
	res.send(data);
})
})
app.post('/adduser',(req,res)=>{
	console.log(req.body);
	var user=new User(req.body);
	user.save((err,data)=>{
		console.log(data);
		res.send('adduser')
	})
})
app.post('/removeuser',(req,res)=>{
	console.log('remove');
	console.log(req.body);
	User.remove({_id:req.body.id},(err,data)=>{console.log('remove user')
})
})
app.listen(process.env.PORT||8080);
console.log('Run Server!');


