const request = require("request")

const url='LINK HERE'

request({ url : url}, (error,response)=>{
    //console.log(response.body)--> to get the body content
    const data = JSON.parse(response.body)
    console.log(data.current)
})
