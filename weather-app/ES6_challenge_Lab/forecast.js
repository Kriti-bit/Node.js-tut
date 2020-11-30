const request = require("request")

const forecast1=(address,callback)=>
{
    const url='LINK HERE'+encodeURIComponent(address)+''
    request({ url : url, json:true}, (error,{body})=>{
        if (error) {
          callback('Unable to connect to API',undefined)
        } else if (body.error){
            callback('Unable to find data',undefined)
        } else if(body.location.length === 0){
            callback('Unable to connect. Try with another location',error)
        } else {
            callback(undefined,{
                place_name:body.location.name,
                temp: body.current.temp_c,
                humidity:body.current.humidity //Instead of writing data.body again and again we simply pass body as the argument and access it directly.
            })
       
        }
    })
}

module.exports = forecast1
