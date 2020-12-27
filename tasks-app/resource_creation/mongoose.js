const mongoose=require('mongoose')


mongoose.connect('LINK',{
    useNewUrlParser:true,
    useCreateIndex:true
})


const me=new User ({
    name:'ABC',
    email:'ABC@ABC.com'
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!',error)
})
