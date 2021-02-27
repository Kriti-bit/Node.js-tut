const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        //required:true,
        trim: true
    },

    email:{
        type:String,
        //required:true,
        unique:true,
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
        //required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Invalid Password')
            }
        }
    },

    tokens: [{
        token :
        { 
        type:String,
        required:true
    }
    }]
})

// userSchema.methods.toJSON = function(){
//     const user  = this
//     const userObject=user.toObject()
//     return userObject
// }

userSchema.methods.generateAuthToken = async function() {
    const user=this /////////////////////////////////////////////////////////////////// CHANGED user TO User
    const token=jwt.sign({_id: user._id.toString()},'thisisthekey')

    user.tokens=user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.methods.toJSON = function(){
    const user = this
    const userObject=user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.statics.findByCredentials = async(email,password) =>{
    const user= await User.findOne({email})

    if(!user){
        throw new Error('Unable to login')     // Exits the function here
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}


// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user = this

if (user.isModified('password')){
    user.password= await bcrypt.hash(user.password,8)
}

next()
})

const User= mongoose.model('User',userSchema)

module.exports = User