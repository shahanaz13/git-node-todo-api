    //const MongoClient = require('mongodb').MongoClient;
     const{MongoClient, ObjectId} = require('mongodb');
     MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
      if(err){
      return console.log('unable to connect to mongodb server');
      }
      console.log('connected to mongodb server');
         /*db.collection('Todo').insertOne({
      text:'something to do',
      completed:false
     },(err, result)=>{
      if(err){ 
         return console.log('unable to insert to do',err);
      }
     console.log(JSON.stringify(result.ops, undefined, 2));
     });
         db.collection('Users').insertOne({
            name:'fathima shahanaz',
            age:22
         },(error, res)=>{

            if(error){
                return console.log('cannot insert values to users',err);
            }
            console.log(res);
         });*/
         db.collection('Todo').find(
            _id = new ObjectId('5aed64b0ec69d7124c0c3498')
         ).toArray().then((doc)=>{
            console.log(JSON.stringify(doc, undefined, 2));
         },(err)=>{
            console.log(err);
         });
         db.collection('Todo').find().count().then((count)=>{
            console.log(count);
         },(err)=>{
            console.log(err);
         });

    db.close();
     });

















