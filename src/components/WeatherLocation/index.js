import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from '../../services/transformWeather'
import './styles.css'

const key = '835772a66e1a0f38f8594733c3f05b15'


class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            data: null,
            city,
        }
    }

    componentWillMount() {
        this.handleUpdate();
    }
 
    handleUpdate = () => {
        const {city} = this.state;
        const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        fetch(api)
            .then(data => {
                return data.json();
            }).then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({ data })
            });
    }

    render() {
        const {onWeatherLocationClick} = this.props
        const { city, data } = this.state;
        return (
            <div className="weatherLocationContainer" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={60} thickness={7} />
}
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;