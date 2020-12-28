require('../src/db/mongoose')
const User=require('../src/models/user')

User.findByIdAndUpdate('5fe385443f3afc34bc7111d1',{ age: 22}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:22})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
