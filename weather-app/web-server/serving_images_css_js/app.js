const path = require('path')
const express = require ('express')

// console.log(__dirname)
// console.log(__filename)

const app= express()

//req= Request
//res=Response

const publicDirectoryPath=path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather',(req,res)=>{
    res.send('The weather is'+ {
        Temp: 50,
        Humidity:30        
    })
})

app.listen(3000,()=>{
    console.log("Server is up & running")
})
