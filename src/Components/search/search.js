import {useState} from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import { GEO_API_URL,geoApiOptions} from '../../api';
import { getCities } from '../../services/city';

const Search=({onSearchChange})=>{
    const [search,setSearch] = useState(null);

    const loadOptions = (inputValue)=>{
        console.log('load options',inputValue)
        // return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
         return getCities()
        // .then( response => {
          //   response.json()
        // })
        .then(response => {
            console.log(response);
            return {
                options:response?.data?.map((city)=>{
                    return{
                        value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name}, ${city.countryCode}`
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }

    const handleOnChange=(searchData)=>{
        setSearch(searchData)
        onSearchChange(searchData)
    }

    

    return (
        <AsyncPaginate
            placeholder = "Search for City"
            debounceTimeOut = {600}
            value = {search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
export default Search