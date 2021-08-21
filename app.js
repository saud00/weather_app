const city = document.getElementById('cityChange')
const btn = document.getElementById('btn')

const obj = new weather
const ui = new UI

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem('name') === null){
        cityName = 'karachi'
    }else{
        cityName=  localStorage.getItem('name')
    }
    obj.get(cityName)
    .then(res => ui.insertValues(res))
    .catch(err => console.log(err))
})

let cityName
let stateName

city.addEventListener('keyup',(e)=>{
    cityName = e.target.value

})



btn.addEventListener('click',()=>{
    obj.get(cityName)
    .then(res => ui.insertValues(res))
    .catch(err => console.log(err))
})


