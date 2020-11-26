const request = require("request")
const geocode = (address, callback)=>{
    const url='LINK'+encodeURIComponent(address)+'HERE'
    request({ url : url, json:true}, (error,data)=>{
        if (error) {
          callback('Unable to connect to API',undefined)
        } else if (data.body.error){
            callback('Unable to find data',undefined)
        } else if(data.body.features.length === 0){
            callback('Unable to connect. Try with another location',error)
        } else {
            callback(undefined,{
                place_name:data.body.features[0].place_name,
                latitude: data.body.features[0].center[0],
                longitude:data.body.features[0].center[1]
            })
       
        }
    })
}

geocode('New York',(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
    console.log('Place Name',place_name)
})
