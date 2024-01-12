import { useEffect, useState } from "react";
import CityData from "./assets/components/CityData";

const API_key = "79337f5d765f93a0beda90c1fd36a5fa";

function App() {

  const [city, setCity] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(false);

  const searchWeather = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
      .then(res => res.json())
      .then(res => {
        if (res.cod === "404"){
          setError("cityError")
          setIsLoading(false)
          return ;
        }
        else {
          setError(null)
          setWeather(res)
          localStorage.setItem("city", city)
          setIsLoading(false)
        }
      })
      .catch(err => {
        setIsLoading(false);
        setError("internalError")
      })
  }

  return (
    <>
      {error && error === "cityError" ? <div className="alert alert-danger w-50 mx-auto">City Not Found</div> : ""}
      {error && error === "internalError" ? <div className="alert alert-danger w-50 mx-auto">Error Occured</div> : ""}
      <div className="container w-50 mx-auto mt-5 text-center">
        <form onSubmit={searchWeather}>
          <input
            onChange={(e) => setCity(prev => e.target.value)}
            value={city}
            className="form-control form-control-lg" type="text" placeholder="Enter Your City" />
          <button className="btn btn-primary mt-3 mb-3" type="submit">
            {isLoading ? "Getting Data..." : "Search Weather"}
          </button>
        </form>

        {weather != null && <CityData data={weather} />}

      </div>
    </>
  )
}


export default App;