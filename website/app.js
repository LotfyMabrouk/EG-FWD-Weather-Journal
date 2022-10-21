/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const key = ",&appid=a16ab30f915407678fb79c670382ca02&units=metric"
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip="
const gen = document.getElementById('generate');
const zip = document.getElementById('zip')

//Async get function
gen.addEventListener('click' , async () =>{


    console.log('here')
    const newZip = zip.value;
    const feelings = document.getElementById('feelings').value
    const res = await fetch(baseUrl+newZip+key)
    try{
        const data = await res.json()
        console.log(data)
        postData('/postData' , {date:d , temp: data.main.temp ,content : feelings })
    }
    catch(error){
        console.log("Error"+error)
    }



})
    
//POST Data function
const postData = async (url = '' , data= {}) =>{
    console.log('here in post')
    console.log(data)
    const response = await fetch(url ,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json'
            
        },
        body: JSON.stringify(data)
    }).then(get())
}

//GET Data
const get = async ()=>{
    const req = await fetch('/getData')
    try{
        const dataObj = await req.json()
        console.log(dataObj)
        document.getElementById('date').innerHTML = dataObj.date
        document.getElementById('temp').innerHTML = dataObj .temp
        document.getElementById('content').innerHTML = dataObj.content

    }
    catch(error){
        console.log("Error" + error)
    }

}