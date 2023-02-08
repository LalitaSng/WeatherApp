import './App.css';
import Search from './Components/search/search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div classname="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
