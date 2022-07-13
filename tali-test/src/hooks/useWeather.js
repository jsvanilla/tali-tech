import {useState} from 'react'

let waiting = false

function useWeather() {
  const [weather, setWeather] = useState()
  const dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const getDay = () => dayOfTheWeek[new Date().getDay()] 
  const getWeather = async ({lat, lng}) => {
    if(!waiting){
      waiting = true
      let res = await fetch(`${process.env.REACT_APP_URL}lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`,{
        method: "GET"
      })
      let data = await res.json()
      const myobject = {location: data.name, temperature: `${Math.round(data.main.temp/10)}°` , humidity: `${data.main.humidity}%`, preasure: `${data.main.pressure}Pa`, weather: data.weather[0].description, wind: `${Math.round(data.wind.speed)}kph`, day: getDay() }
      return myobject 
    }
    
  }

  return getWeather
}

export default useWeather