const request = require("request")

const forecast1=(address,callback)=>
{
    const url='LINK HERE'+encodeURIComponent(address)+''
    request({ url : url, json:true}, (error,data)=>{
        if (error) {
          callback('Unable to connect to API',undefined)
        } else if (data.body.error){
            callback('Unable to find data',undefined)
        } else if(data.body.location.length === 0){
            callback('Unable to connect. Try with another location',error)
        } else {
            callback(undefined,{
                place_name:data.body.location.name,
                temp: data.body.current.temp_c,
                humidity:data.body.current.humidity
            })
       
        }
    })
}

module.exports = forecast1

