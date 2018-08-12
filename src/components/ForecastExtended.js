import React,{ Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress'
import ForecastItem from './ForecastItem'
import  transformForecast from "../services/transformForecast";
import * as Weather from '../constants/weather'
import './styles.css';

const key = '835772a66e1a0f38f8594733c3f05b15';
const api = `api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
`

/*
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
*/

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount(){
        const {city} = this.props;
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
        fetch(api)
        .then(
            data => (data.json())
        ).then(
            weather_data =>{
                const { data } = transformForecast( weather_data); 
                this.setState({data})
            }
        )
    }

    renderForecastItemDays(){
        return "render items"
        //return days.map(day => <ForecastItem weekDay={day} hour={10} data={data}/>)
        
    }

    renderProgress(){
        return(<CircularProgress size={60} thickness={7}/>)
    }

    render(){
        const {city} = this.props
        const {forecastData} = this.state;

        return(
        <div>
            <h1 className="forecast-title">{city}</h1>
            {forecastData ? 
                this.renderForecastItemDays() : 
                this.renderProgress()}
        </div>
        )
    }
} 

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;