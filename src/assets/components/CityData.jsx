function CityData({ data }) {

  const city = localStorage.getItem("city");


  return (
    <>
      <div className="card border-info mb-3 text-center " >
        <div className="card-header border-success container text-center">
          City : {city.toUpperCase()}
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather Icon"
            style={{ height: 50, width: 50 }} className="float-right img-fluid" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Sky : {data.weather[0].description.toUpperCase()}</h5>
          <p className="card-text">Latitude : {data.coord.lat}º <br /> Longitude : {data.coord.lon}º</p>
          <p className="card-text">Average Temperature : {Math.round(data.main.temp - 273.15)}ºC</p>
          <p className="card-text">Humidity : {data.main.humidity}%</p>
          <p className="card-text">Visibility : {data.visibility} mts</p>
        </div>
      </div>

    </>
  )
}


export default CityData;