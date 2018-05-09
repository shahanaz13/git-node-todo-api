var express =require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

 var app = express();
 app.use(bodyparser.json());
 app.post('/todos', (req, res)=>{
 	//console.log(req.body);
 	var todo1 =new todo({
 		text:req.body.text
 	});
 	todo1.save().then((doc)=>{
 		res.send(doc)
 	},(e)=>{
 		res.status(400).send(e);
 	});
 });
 app.get('/todos',(req,res)=>{
 	todo.find().then((todos)=>{
 		res.send({todos});
 	},(e)=>{
 		res.status(400).send(e);
 	});
 });

 app.listen(3000,()=>{
 	console.log('server is up on port 3000');
 });
 module.exports = {app};
 







