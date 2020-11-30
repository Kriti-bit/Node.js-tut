
const forecast1 = require('./forecast.js')
const geocode =require('./app2.js')
const request = require("request")

geocode ('Boston',(error,data)=>{
    if(error)
    {
       return console.log(error); 
    }
    console.log('Error',error)
    console.log('Data',data)
    forecast1('London', (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
      })
})
