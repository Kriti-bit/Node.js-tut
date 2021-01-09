const mongoose=require('mongoose')
//const validator=require('validator')

mongoose.connect('LINK',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false 
})
