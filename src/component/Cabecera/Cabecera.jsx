import React from "react";
import style from "./Cabecera.module.css";
import DataDev from "../DataDev/DataDev";
import ApiWeather from "../ApiWeather/ApiWeather";

const Cabecera = () => {
    return (
        <div className={style.grid2xauto}>
            <div>
                <DataDev /> 
            </div>
            <div className={style.identificar}>
                <ApiWeather apiKey="465c3a78ea9f2167f9c62c71fba0ac1c" city="Junín" country='AR' />
            </div>
        </div>
        )
}

export default Cabecera;