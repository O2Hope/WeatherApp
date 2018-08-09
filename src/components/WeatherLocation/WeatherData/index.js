import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import PropTypes from 'prop-types'
import './styles.css';

const WeatherData = ({data}) => {
    const {temperature, weatherState, humidity, wind} = data;
    return(
        <div className="weatherDataContainer">
            <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
            <WeatherExtraInfo wind={wind} humidity={humidity}></WeatherExtraInfo>
        </div>
    )
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;