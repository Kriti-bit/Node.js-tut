const path = require('path')
const express = require ('express')
const hbs=require('hbs')


const app= express()

const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
app.set('view engine', 'hbs')
app.set('views',viewsPath)
app.use(express.static(publicDirectoryPath))

hbs.registerPartials(partialsPath)

app.get('', (req,res) => {
    res.render('index',{
        title:'weather app',
        name:'Name here',
        age: 30
    })
})


app.get('/about', (req,res) => {
    res.render('about',{
        title:'About Me',
        name:'Name here',
        Temp: 50,
        Humidity:30  
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title:'Help page',
        name:'Name here',
    })
})



app.listen(3000,()=>{
    console.log("Server is up & running")
})



console.log(__dirname)
// console.log(__filename)




//req= Request
//res=Response
