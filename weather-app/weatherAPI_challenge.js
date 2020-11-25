const request = require("request")

const url='LINK HERE'

request({ url : url, json:true}, (error,response)=>{
    console.log("It is currently "+ response.body.current.temp_c+ " degree celcius.")
    console.log("There is "+ response.body.current.precip_in+"% chance of rain ")
})

//OUTPUT:
//It is currently 13 degree celcius.
//There is 0% chance of rain 
