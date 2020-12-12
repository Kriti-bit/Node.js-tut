const request = require("request")

const geocode = (address, callback)=>{
    const url='https://api.mapbox.com '+encodeURIComponent(address)+'.json?Link'


    request({ url : url, json:true}, (error,{body}={})=>{
        if (error) {
          callback('Unable to connect to API',undefined)
        } else if (body.error){
            callback('Unable to find data',undefined)
        } else if(body.features.length === 0){
            callback('Unable to connect. Try with another location',error)
        } else {
            callback(undefined,{
                place_name:body.features[0].place_name,
                latitude: body.features[0].center[0],
                longitude:body.features[0].center[1]
            })
       
        }
    })
}
module.exports = geocode

