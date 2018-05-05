    //const MongoClient = require('mongodb').MongoClient;
     const{MongoClient, ObjectId} = require('mongodb');
     MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
      if(err){
      return console.log('unable to connect to mongodb server');
      }
      console.log('connected to mongodb server');
       /* //deletemany
        db.collection('Todo').deleteMany({text:"hello"}).then((res)=>{
         console.log(res.result.n);
        })*/
        //deleteone
      //   db.collection('Todo').deleteOne({text:"hello"}).then((res)=>{
      //    console.log(res.result.n);
      // });
        //find and delete one
 db.collection('Todo').findOneAndDelete({text:"hello"}).then((res)=>{
         console.log(res.value);
      });
    //db.close();
     });














