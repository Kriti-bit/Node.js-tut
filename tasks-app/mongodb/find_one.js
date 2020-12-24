// CRUD- create read update delete
const mongodb=require('mongodb')
// const MongoClient = mongodb.MongoClient


const {MongoClient, ObjectID }=require('mongodb')
const mongoURL='Link'
const databaseName ='nodetut'

mongodb.MongoClient.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database')
    }
    
    const db=client.db(databaseName)

     db.collection('users').findOne({name:'Jen'},(error,client)=>{
         if(error){
             return console.log('Unable to connect')
         }
         else{
             console.log(client)
         }
     })

    db.collection('users').findOne({_id : new ObjectID("5fe383acc7111d0")},(error,client)=>{
        if(error){
            return console.log('Unable to connect')
        }
        else{
            console.log(client)
        }
    })

      db.collection('users').find({age:19}).toArray((error,user)=>{
        if(error){
            return console.log('Error')
        }
        else{
            console.log(user)
        }
    })

    db.collection('users').find({age:19}).count((error,result)=>{
        if(error){
            return console.log('Faced Error')
        }
        else{
            console.log(result)
        }
    })
    
        db.collection('tasks').findOne({_id : new ObjectID("5fe487121d4c7e2c0cdcfd69")},(error,client)=>{
        if(error){
            return console.log('Unable to connect')
        }
        else{
            console.log(client)
        }
    })


    db.collection('tasks').find({completed:false}).toArray((error,user)=>{
        if(error){
            return console.log('Error')
        }
        else{
            console.log(user)
        }
    })
})
