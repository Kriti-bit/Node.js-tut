const express = require ('express')

const app= express()

//req= Request
//res=Response

app.get('',(req,res)=>{
    res.send('Hello Express')
})

app.get('/help',(req,res)=>{
    res.send('Help Page')
})

app.get('/about',(req,res)=>{
    res.send('The About Page')
})

app.get('/weather',(req,res)=>{
    res.send('Weather Page')
})

app.listen(3000,()=>{
    console.log("Server is up & running") //displayed in the terminal when the server is running
})
