const express=require('express')
require('./db/mongoose')
const User=require('./models/user')

const app=express()
const port=process.env.PORT || 3000



app.use(express.json())

app.post('/users',(req,res) => {
    const user = new User(res.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/users/:id',(req,res)=>{
    const _id=req.params.id

    User.findById(_id).then((user)=>{

    if(!user){
    return resstatus(400).send()
    } 
    res.send(user)
    }).catch((e)=>{
        res.status(500).send()
    })

})



app.listen(port,()=>{
    console.log('Server is up on '+port)
})
