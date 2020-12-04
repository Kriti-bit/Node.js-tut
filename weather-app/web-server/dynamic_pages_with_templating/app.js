const path = require('path')
const express = require ('express')
const app= express()
const publicDirectoryPath=path.join(__dirname,'../public')
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index',{
        title:'weather app',
        name:'Name here',
        age: 30
    })
})


app.get('/about', (req,res) => {
    res.render('about',{
        Temp: 50,
        Humidity:30  
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title:'Help page',
    })
})



app.listen(3000,()=>{
    console.log("Server is up & running")
})






// console.log(__dirname)
// console.log(__filename)




//req= Request
//res=Response
