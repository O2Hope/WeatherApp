import React from 'react';
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData'


const ForecastItem = ({weekDay, hour, data}) =>{
    return(
        <div>
            <div>
           {weekDay} {hour}
           <WeatherData data={data}/>
           </div>
        </div>
    )
}

ForecastItem.proptypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;