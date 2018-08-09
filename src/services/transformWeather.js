import * as Weather from '../constants/weather'

//Get the icon to show

const getWeatherState = weather => {
    const { id } = weather[0];
    if(id < 300)
        return Weather.THUNDER;
    else if(id <400)
        return Weather.DRIZZLE;
    else if(id < 600)
        return Weather.RAIN
    else if(id < 700)
        return Weather.SNOW
    else if(id === 800)
        return Weather.SUN
    return Weather.CLOUDY;
}
//Destructuring weather_data to data
const transformWeather = weather_data => {
    const { weather } = weather_data;
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather);

    const data = {
        humidity,
        temperature: Math.floor(temp),
        weatherState,
        wind: `${speed} m/s`,
    };

    return data;
}

export default transformWeather;