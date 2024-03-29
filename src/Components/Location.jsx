import { Rings } from 'react-loader-spinner'
import { useState, useEffect } from "react";
import AppContainer from './Style'
import Build from './Build';
import axios from 'axios';

export default function GetLocation() {

    const [status, setStatus] = useState({ data: undefined, loading: true });
    const loader =  <AppContainer><div className="Container"><Rings color='#00BFFF' height={90} width={90} /></div></AppContainer>

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function (pos) {

            const secret = "1ee778552ee3c1acf2b9da71930cd174"
            const lat = pos.coords.latitude;
            const long = pos.coords.longitude;

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${secret}`)
                .then((response) => {

                    let icon = undefined, descr = undefined;
                    response.data.weather.forEach(i => {
                        icon = i.icon
                        descr = i.description
                    })

                    let min = response.data.main.temp_min - 273.15;
                    let max = response.data.main.temp_max - 273.15;
                    let current = response.data.main.temp - 273.15;
                    let humi = response.data.main.humidity;
                    let city = response.data.name;

                    min = Math.floor(min);
                    max = Math.floor(max);
                    current = Math.floor(current);

                    let newdata = { min: min, max: max, curent: current, humidity: humi, city: city, icon: icon, descr: descr }
                    setStatus({ data: newdata, loading: false });
                })
        });

    }, []);

    return status.loading ? loader : <Build data={status.data} />
}