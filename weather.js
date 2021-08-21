class weather{
    constructor(){
        this.key = '777b1a38a5955598aaa93d2905654ea3'
    }

    

    async get(city){

        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.key}`)
        console.log(data)
        const display = await data.json()
        console.log(display)
        savetoLS(display)
       return display
    }
}

const savetoLS=(e)=>{
    const name = e.city.name
    localStorage.setItem('name',name)
}