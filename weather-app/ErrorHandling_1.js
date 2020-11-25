const request = require("request")

const url='LINK HERE'

request({ url : url, json:true}, (error,response)=>{
    if (error) {
        console.log('Unable to connect to API')
    } else if (response.body.error){
        console.log('Unable to find data')
    } else if(response.body.current.length === 0){
        console.log('Unable to connect. Try with another location')
    } else {
    console.log("It is currently "+ response.body.current.temp_c+ " degree celcius.")
    console.log("There is "+ response.body.current.precip_in+"% chance of rain ")
    }
})
