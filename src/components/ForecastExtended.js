import React,{ Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import * as Weather from '../constants/weather'
import './styles.css';

const data = {
    temperature: 40,
    humidity: 20,
    weatherState: Weather.SNOW,
    wind: '100 m/s'
}

const days= [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]

class ForecastExtended extends Component{

    renderForecastItemDays(){
        return days.map(day => <ForecastItem weekDay={day} hour={10} data={data}/>)
        
    }

    render(){
        const {city} = this.props
        return(
        <div>
            <h1 className="forecast-title">{city}</h1>
            {this.renderForecastItemDays()}
        </div>
        )
    }
} 

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;