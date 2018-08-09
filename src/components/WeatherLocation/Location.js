import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Location = ({city}) =>(
    <div className="locationContainer">
        <h1 className="locationTitle">{city}</h1>
    </div>
    );

    Location.prototypes = {
        city: PropTypes.string.isRequired
    }

export default Location;