const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {todo} = require('./../models/todo');

const todos = [{
	text: 'FFirst test todo'
},
{
	text:'second to do'
}];

beforeEach((done)=>{
todo.remove().then(() => {
	return todo.insertMany(todos);
}).then(()=>done());
});

describe('post /todos', ()=>{
it('should create a new todo', (done)=>{

var text = 'test to do text';
request(app)
.post('/todos')
.send({text})
.expect(200)
.expect((res)=>{
  expect(res.body.text).toBe(text);
})
.end((err, res)=>{
   if(err){
   	return done(err); 
   }
   todo.find({text}).then((todos)=>{
   	expect(todos.length).toBe(1);
   	expect(todos[0].text).toBe(text);
   	done();
   }).catch((e)=>done(e));
});


});
it('should not todo with invalid body data ', (done)=>{
	request(app)
	.post('/todos')
	.send({})
	.expect(400)
	.end((err,res)=>{
		if(err){
			return done(err);
		}
		todo.find().then((todos)=>{
   	expect(todos.length).toBe(2);
   	done();
   }).catch((e)=>done(e));
});
	});


});
describe('gett /todos', ()=>{
it('should get all todos', (done)=>{

var text = 'test to do text';
request(app)
.get('/todos')
.expect(200)
.expect((res)=>{
  expect(res.body.todos.length).toBe(2);
})
.end(done);
   
});


});