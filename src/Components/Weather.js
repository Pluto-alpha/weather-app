import React, { useState } from 'react';
import DisplayWeather from './DisplayWeather';
import './weather.css';


const Weather = () => {

    const APIKEY = 'efb0940d6af7fd02a6312e235bd2eb1b';
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState([]);

    async function weatherData(e) {
        e.preventDefault();
        if (city === "") {
            alert("Please enter values city and country?");
        } else {
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
            )
                .then((res) => (res.json())
                    .then((data) => (data)));
            setWeather({ data: data });
            console.log(data)
        }
    }



    return (
        <div className='weather'>
            <span className='title'>Weather App</span>
            <br />


            <form>
                <input type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='country' value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Country' />
                <button className='getweather' onClick={weatherData}>Submit</button>
            </form>

            
            {
                weather.data !== undefined ?
                    <div>
                        <DisplayWeather data={weather.data} />
                    </div>
                    :null
                        
            }
            


        </div>
    );
}

export default Weather;