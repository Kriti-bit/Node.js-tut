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


    db.collection('tasks').deleteMany({
        description:"Clean"
    }).then((client)=>{
        console.log(client)
    }).catch((error)=>{
        console.error();
    })

})
