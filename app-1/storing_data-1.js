const fs=require('fs')
const book= {
    title:'Book Name Here',
    author:'Author of the book'
}
const bookJSON = JSON.stringify(book)


fs.writeFileSync('1-json.json', bookJSON)
console.log(bookJSON)
const dataBUFFER = fs.readFileSync('1-json.json')
console.log(dataBUFFER)// Prints the bit value of the data stored in the json file
