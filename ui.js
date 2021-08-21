
class UI{
    constructor(){
        this.heading = document.getElementById('heading')
        this.condition = document.getElementById('condition')
        this.centi = document.getElementById('centi')
        this.faren = document.getElementById('faren')
        this.ul = document.getElementById('ul')
        this.img =document.getElementById('img')
        this.card =document.getElementById('card')

    }

    insertValues(data){
        console.log(data)
        console.log(data.list[0])

        const icon = data.list[0].weather[0].icon.charAt(2)

        if(icon == 'd'){
            this.card.style = 'background-image: url("bg.jpg")'
        }else{
            this.card.style = 'background-image: url("bgn.jpg")'
        }

        const feelsC = (Math.round(((data.list[0].main.feels_like - 273.15)*1.8)+32)) + '&#8451;'
        const feelsF = (Math.round(((data.list[0].main.feels_like - 273.15)*1.8)+32)) + 'F'
        
        this.heading.innerText = data.city.name
        this.condition.innerText = data.list[0].weather[0].description
        this.centi.innerHTML = (Math.round(data.list[0].main.temp_max - 273.15)) + '&#8451;'
        this.faren.innerHTML = (Math.round(((data.list[0].main.temp_max - 273.15)*1.8)+32)) + 'F'
        this.img.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)

        this.ul.innerHTML = `
        <li class="list-group-item lead "><small>humadity: ${data.list[0].main.humidity}%</small></li>
        <li class="list-group-item lead "><small>From sealevel: ${data.list[0].main.sea_level}</small></li>
        <li class="list-group-item lead"><small> feelsLike: ${feelsC}  (${feelsF})</small></li>
        <li class="list-group-item  lead"><small>Wind speed: ${data.list[0].wind.speed}</small></li>`
    }



}
