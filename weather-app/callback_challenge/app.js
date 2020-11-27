const forecast1 =require("./forecast.js")
const request = require("request")
forecast1('London', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })
