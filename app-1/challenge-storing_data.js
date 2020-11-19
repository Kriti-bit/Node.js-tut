const fs=require('fs')
const dataBUFFER = fs.readFileSync('1-json.json')
//console.log(dataBUFFER)
const dataJSON = JSON.parse(dataBUFFER)
//const dataJSON=dataBUFFER.toString()---------Convert to string after making changes the data
dataJSON.title='New Title'
dataJSON.author='New Author'
const datastring=JSON.stringify(dataJSON)
fs.writeFileSync('1-json.json',datastring)
//fs.readFileSync('1-json.json')
