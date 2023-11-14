import { useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  // Style for display the country detail UI
  const styleBox = {
    display: 'flex',
    alignItems: 'start',
    flexDirection:'column',
    justifyContent:'start',
  }

  // Used states
  const [search, setSearch] = useState([]);
  const [country, setCountry] = useState([]);
  const [showDetail, setShowDetail] = useState(false)
  const [weather, setWeather] = useState([])

  // Name and city name of the searched country
  const countryName = country.length != 0?  country.name.common : ''
  const capital = country.length !=0? country.capital[0] : ''

//  Search for a particular country
  const apiLink = `https://studies.cs.helsinki.fi/restcountries/api/name/${search}`

  // get the countries detail after pressing enter
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(apiLink).then(response => {
      const result = response.data;
      setCountry(result);
      getCapitalWeather(result.capital[0])
    })
    
  }

  // toggle country information
  const countryDetail = () => {
    setShowDetail(prev => !prev)
  }
// Gets search keyword of the country from the input field
  const handleChange = (e) => {
    setSearch(e.target.value);
  }


  // Weather of particular countries city after putting api key in url below (city weather)
const getCapitalWeather =(city) => {
  const cityWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=apikey`
  axios.get(cityWeather).then(response => {
    return setWeather(response.data)
})
}

// Required weather information of the countries city
const weatherInfo = weather.length !=0 &&  ((weather.main.temp - 32) * 5/9).toFixed(1);
const weatherImage = weather.length !=0 && weather.weather[0].icon ;
const wind = weather.length !=0 && weather.wind.speed ;

// Display Ui of the weather details
const weatherEl = (<div>
    <h3>Temperature : {weatherInfo} celsius</h3>
    <img src={`https://openweathermap.org/img/wn/${weatherImage}@2x.png`} alt="weather image" />
    <h3>Wind : {wind} m/s </h3>
  </div>
)



  return (
    <div>
      <h1>Get Details of any Country by Searching</h1>
      <form onSubmit={handleSubmit}>
        Find Country:<input placeholder='Search for country' type="text" onChange={handleChange} value={search}/>
      </form>

      <div style={styleBox}>
          <h2>{countryName}</h2> 
          {countryName && <button onClick={countryDetail}>{showDetail? 'hide': 'show'} detail</button>}

          <div>
            {showDetail && (
              <div>
                <strong>Capital</strong> {country.capital[0]}
                <div>
                <strong>area</strong> {country.area}
                </div>

                <div>
                  <h2>Languages</h2>
{/* Display Various countries language */}
                  {Object.values(country.languages).map((language, i) => {
                    console.log(language)
                    return <p key={i}>{language}</p>
                  })}
                </div>
                <div>
                  <img src={country.flags.png} alt="Countries Flag" />
                </div>

                <div>
                  <h2>Weather in {capital}</h2>

                  {
                    weatherEl
                  }
                </div>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default App
