const request = require("request")

const url='LINK HERE'

request({ url : url, json:true}, (error,response)=>{
    console.log("Latitude is "+ response.body.features[0].center[0]+" And longitude is "+response.body.features[0].center[1])
})
