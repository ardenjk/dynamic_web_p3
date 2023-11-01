"use-client";
import styles from "./WeatherCard.module.css";
import WeatherIcon from "./WeatherCardIcon";

const WeatherCard = ({
    cityName,
    cloudiness,
    currentTemperature,
    humidity,
    highTemperature,
    lowTemperature,
    weatherType,
    windSpeed,
}) => (
    <div className={styles.WeatherCardWrapper} style={{backgroundColor: `rgba(0,0,0,0.${cloudiness}`}}>
        <WeatherIcon weatherType={weatherType}/>
        <h2>{cityName}</h2>
        <p>Weather Type: {weatherType}</p>
        <p>Current Temperature: {currentTemperature}°F</p>
        <p>High Temperature: {highTemperature}°F</p>
        <p>Low Temperature: {lowTemperature}°F</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed}mph</p>
        
    </div>


/* 
        <div className={styles.WeatherCardImage}>
            <WeatherIcon weatherType={weatherType} />
        </div>
        <div className={styles.WeatherCardDetails}>
            <h2>{cityName}</h2>
            <p>Current Temperature: {currentTemperature}&deg;</p>
            <div className={styles.WeatherCardRow}>
                <div className={styles.WeatherCardColumn}>
                    <p>Weather Type: {weatherType}</p>
                    <p> High Temperature: {highTempterature}</p>
                    <p> Low Temperature: {lowTemperature}</p>
                </div>
                <div className={styles.WeatherCardColumn}></div>
                <p>Cloudiness: {cloudiness}</p>
                <p>Humidity: {humidity}</p>
                <p>Wind Speed: {windSpeed}</p>
                </div>
            </div>
        </div> */


)

export default WeatherCard;

