const {MongoClient, ObjectID }=require('mongodb')
const mongoURL='LINK'
const databaseName ='nodetut'

const id= new ObjectID()
console.log(id)
console.log(id.getTimestamp())

mongodb.MongoClient.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database')
    }
    
    const db=client.db(databaseName)


    db.collection('users').insertOne({
        _id:id,
        name:'ABC',
        age: 22
    },(error,result)=>{
        if(error){
            return console.log('Unable to insert database')
        }
        console.log(result.ops)
  
        
 })
})
