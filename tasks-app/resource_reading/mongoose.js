const mongoose=require('mongoose')

mongoose.connect('LINK',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false 
})
