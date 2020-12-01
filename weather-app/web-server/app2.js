const express = require ('express')

const app= express()

//req= Request
//res=Response

app.get('',(req,res)=>{
    res.send('<h1>Hello Express</h1>')
})

app.get('/help',(req,res)=>{
    res.send('Help Page')
})

app.get('/about',(req,res)=>{
    res.send([{
        Name: "Name Here",
        Age: 20
    },{
        Interest:"Interests include : ___________",
        Hobbies: "Hobbies include"
    }])
})

app.get('/weather',(req,res)=>{
    res.send({
        Temp: 50,
        Humidity:30        
    })
})

app.listen(3000,()=>{
    console.log("Server is up & running")
})
