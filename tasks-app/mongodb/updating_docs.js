// CRUD- create read update delete
const mongodb=require('mongodb')
// const MongoClient = mongodb.MongoClient


const {MongoClient, ObjectID }=require('mongodb')
const mongoURL='LINK'
const databaseName ='nodetut'

mongodb.MongoClient.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database')
    }
    
    const db=client.db(databaseName)


    db.collection('users').updateOne({
        _id : new ObjectID("5fe38558dc89e832202d2e24")
    },{
        $inc:{
            age:1
        }
    }).then((client)=>{
        console.log(client)
    }).catch((error)=>{
        console.error();
    })
    
        db.collection('users').updateOne({
        _id : new ObjectID("5fe387121d4c7e2c0cucfd69")
    },{
        $set:{
            name:'ABCDEF'
        }
    }).then((client)=>{
        console.log(client)
    }).catch((error)=>{
        console.error();
    })
    
        db.collection('tasks').updateMany({
        completed:false
    },{
        $set:{
            completed:true
        }
    }).then((client)=>{
        console.log(client)
    }).catch((error)=>{
        console.error();
    })

})
