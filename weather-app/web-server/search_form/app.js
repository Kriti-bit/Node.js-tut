console.log("This is the client side server")

// fetch('http://localhost:3000/weather?address=Boston').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         } else{
//         console.log("Place Name: "+data.place_name),
//         console.log("Latitude: "+data.address)
//     }
//     })
// })

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const MessageOne=document.querySelector("#message-1")
const MessageTwo=document.querySelector("#message-2")

//MessageOne.textContent="From JavaScript"

weatherForm.addEventListener('submit',(e)=>
{
    e.preventDefault()

    const location=search.value
    fetch('http://localhost:3000/weather?address='+encodeURIComponent(location)).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            MessageOne.textContent=data.error
            console.log(data.error)
        } else{
        console.log("Place Name: "+data.place_name),
        console.log("Temperature: "+data.temp),
        MessageOne.textContent=data.place_name
        MessageTwo.textContent=data.forecast.temp
    }
    })
})

    console.log(location)
})



// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
