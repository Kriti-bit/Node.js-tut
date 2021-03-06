const mongoose=require('mongoose')
const validator=require('validator')

mongoose.connect(Link',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User= mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim: true
    },

    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Email is invalid')
            }
        }

    },
    age:{
        type:Number,
        default : 0,
        validate(value)
        {
            if(value<0)
            {
                throw new Error('Age is always postive')
            }
        }

    },
    password:{
        type: String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Invalid Password')
            }
        }
    }
})

const me=new User ({
    name:'Kriti',
    email:'kriti@'
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!',error)
})
