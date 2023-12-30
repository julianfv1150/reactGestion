import React, { useState, useEffect } from 'react';
import styles from "./ApiWeather.module.css"

const ApiWeather = ({ apiKey, city, country }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&lang=es&appid=${apiKey}`
                );
                if(!res.ok){
                    throw new Error('Filed to fetch weather data');
                }
                const data = await res.json();
                setWeatherData(data);
            } catch (error){
                console.error(error + 'Error de salida del weatherCatch');
            };
        };
        fetchData();
    }, [apiKey, city, country ])
    
    if (!weatherData) {
        return <div>Loading...</div>;
    }
    try {
        const timestamp = weatherData.dt;
        const miliseg = new Date(timestamp * 1000);
        const hora = miliseg.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const floorTemp = Math.floor(weatherData.main.temp);

        if(!weatherData){
            throw new Error('Filed read time');
        }
        const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        return (
            <div className={styles.grid}>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <h2>{weatherData.name}</h2>
                    <img src={iconUrl} alt="Weather Icon" />
                </div>
                <div>
                    <p>Temp: {floorTemp} °C</p>
                    <p>Hora: {hora}</p>
                    <p>Estado: {weatherData.weather[0].description}</p>
                </div> 
            </div>    
        );
    } catch (error){
        console.error(error + 'Error de salida de la hora');
        return 'La hora falló';
    };  
};

export default ApiWeather;