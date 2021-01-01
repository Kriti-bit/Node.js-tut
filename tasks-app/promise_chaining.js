require('../src/db/mongoose')
const { countDocuments } = require('../src/models/user')
const User=require('../src/models/user')

// User.findByIdAndUpdate('5fe385443f3afc34bc7111d1',{ age: 22}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:22})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeandCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count= await User.countDocuments({age})
    return count
}

updateAgeandCount ('5fe3825ab69974174842f074',22).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
