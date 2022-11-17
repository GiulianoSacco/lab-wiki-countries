import { Routes, Route } from "react-router-dom"
import "./App.css";
import NavBar from "./components/NavBar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import { useState, useEffect } from "react";
import axios from "axios"


const apiURL = "https://ih-countries-api.herokuapp.com/countries"


function App() {
  const [countriesData, setCountries] = useState([])

  useEffect(() => {
    const apiCAll = async () => {
      const res = await axios.get(apiURL)
      console.log(res)
      setCountries(res.data)
    }

    apiCAll()
  }, [])

  return <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<CountriesList places={countriesData} />} />
      <Route path="/:countryId" element={<CountryDetails places={countriesData} />} />
    </Routes>
  </div>;
}
export default App;