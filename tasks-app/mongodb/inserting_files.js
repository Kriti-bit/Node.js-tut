// CRUD- create read update delete
const mongodb=require('mongodb')
const MongoClient = mongodb.MongoClient
const mongoURL='LINK'
const databaseName ='nodetut'

mongodb.MongoClient.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database')
    }
    
    const db=client.db(databaseName)

    // db.collection('users').insertOne({                              //INSERT ONE USER DETAILS AT A TIME
    //     name:'ABC',
    //     age: 22
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert database')
    //     }
    //     console.log(result.ops)
  

    db.collection('tasks').insertMany(                                 //INSERT MULTIPLE DETAILS AT ONCE
        [
            {
                description: 'Clean',
                completed:true
            },
            {
                description: 'Mop',
                completed:false           // BOOLEAN VALUES
            }
        ],(error,result)=>{        
         if(error){
      return console.log('Unable to insert docs')      
        }
        console.log(result.ops)
        
})
 })
