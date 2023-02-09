import './App.css';
import Search from './Components/search/search';
import CurrentWeather from './Components/current-weather/current-weather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
