
//const MongoClient = require('mongodb').MongoClient;
     const{MongoClient, ObjectId} = require('mongodb');
     MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
      if(err){
      return console.log('unable to connect to mongodb server');
      }
      console.log('connected to mongodb server');
      db.collection('Todo').findOneAndUpdate({
        text:'to do'
      },{
        set:{
          text:'yippiee i updated this'
        }
      },{
          returnOriginal:false 
        }).then((res)=>{
          console.log(res);
        });
      
    //db.close();
     });














