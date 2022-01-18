import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./WeatherAPI.module.css";

function WeatherAPI() {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const dataFetch = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=2db01bd738ca4de89fe185506221701&q=Vancouver&aqi=no"
    );

    setFetchedData(dataFetch);
    setLoading(false);
  };

  return (
    <div className={classes.weather_display_container}>
      {fetchedData.data ? (
        <div>
          <p>
            Location: <strong>{fetchedData.data.location.name}, BC</strong>
          </p>
          <p>
            Temperature:
            <strong> {fetchedData.data.current.temp_c} degrees </strong>
          </p>
          <small>
            Feels like: {fetchedData.data.current.feelslike_c} degrees
          </small>
          <div className={classes.icon_container}>
            <img
              src={fetchedData.data.current.condition.icon.replace(
                /^/,
                "https:"
              )}
              alt="an icon of the current weather"
            />
            <p>
              <strong>{fetchedData.data.current.condition.text}</strong>
            </p>
          </div>
          <p>
            Wind speed:
            <strong> {fetchedData.data.current.wind_kph} km/h</strong>
          </p>
        </div>
      ) : (
        <p> Error in get request! </p>
      )}
    </div>
  );
}

export default WeatherAPI;
