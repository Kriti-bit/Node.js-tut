const path = require('path')
const geocode = require('./geocode.js')
const express = require ('express')
const hbs=require('hbs')
const forecast = require('./forecast.js')


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

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({ //if we use return then there is no need to use else statement as the control is shifted outside the function
            error:'You must add a search term'
        })
    }    
        res.send({
            products:[]
        })
    
})

app.get('/about', (req,res) => {
    if(!req.query.add){
        return res.send({ //if we use return then there is no need to use else statement as the control is shifted outside the function
            error:'Enter valid address'
        })
    }

    res.render('about',{
        title:'Weather is:',
        name:'Name of city',
        Temp: 50,
        Humidity:30  
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({ //if we use return then there is no need to use else statement as the control is shifted outside the function
            error:'Enter valid address'
        })
    }
geocode(req.query.address,(error,{place_name,longitude,latitude})=>{
            if(error){
                return res.send({error})
            }
            forecast(req.query.address,(error,forecastData)=>{
                if(error){
                    return res.send({error})
                }
                res.send({
                    forecast:forecastData,
                    place_name,
                    address:req.query.address
                })
            })
        })

        // title:'Weather is:',
        // name:'Name of city',
        // Temp: 50,
        // Humidity:30,  
        // Address: req.query.address
})

app.get('/help', (req,res) => {
    res.render('help',{
        title:'Help page',
        name:'Name here',
    })
})

app.get('*',(req,res) => {
    res.render('error_404',{
        name: 'PAGE NOT FOUND!'
    })
})

app.get('/help/*',(req,res) => {
    res.render('error_404',{
        name: 'HELP ARTICLE NOT FOUND!'
    })
})

app.listen(3000,()=>{
    console.log("Server is up & running")
})
