const request = require("request")

const url='LINK HERE'

request({ url : url, json:true}, (error,response)=>{
    if (error) {
        console.log('Unable to connect to API')
    } else if (response.body.error){
        console.log('Unable to find data')
    } else if(response.body.features.length === 0){
        console.log('Unable to connect. Try with another location')
    } else {
 console.log("Latitude is "+ response.body.features[0].center[0]+" And longitude is "+response.body.features[0].center[1])
    }
})
