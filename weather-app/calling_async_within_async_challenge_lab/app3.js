
const forecast1 = require('./forecast.js')
const geocode =require('./app2.js')
const request = require("request")

const input = process.argv[2]

if(!input)
{
    return console.log("Please provide a valid address")
}
else
{
geocode (input,(error,data)=>{
    if(error)
    {
       return console.log(error); 
    }
    console.log('Error',error)
    console.log('Data',data)
    forecast1(input, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
      })
})
}
