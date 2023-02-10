import './App.css';
import Search from './Components/search/search';
import CurrentWeather from './Components/current-weather/current-weather';
import {WEATHER_API_URL,WEATHER_API_KEY} from './api'
import {useState} from 'react';
import Forecast from './Components/forecast/forecast';

function App() {
  const [currentWeather,setCurrentWeather] = useState(null)
  const [forecastWeather,setForecastWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [latitude,longitude] = searchData.value.split(" ")

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
     const ForecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)

     Promise.all([CurrentWeatherFetch,ForecastWeatherFetch])
     //Promise.all([CurrentWeatherFetch])
    .then(async(response)=>{
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()

      setCurrentWeather({city:searchData.label,...weatherResponse})
      setForecastWeather({city:searchData.label,...forecastResponse})
    })
    .catch((err)=>console.log(err))
  }

  console.log(currentWeather)
  console.log(forecastWeather)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather&&<CurrentWeather data={currentWeather}/>}
      {forecastWeather&&<Forecast data={forecastWeather}/>}
    </div>
  );
}

export default App;
