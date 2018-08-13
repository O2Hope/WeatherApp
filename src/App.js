import React, { Component } from 'react';
import store from './store'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import Posts from './components/Posts'
import './App.css';
import PostForm from './components/Posts/PostForm';

const cities = [
  'Mexico',
  'Argentina',
  'Chile',
  'Colombia',
  'Guatemala'
]

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    }
  }

  handleOnSelectedLocation = city => {
    this.setState({ city })
  }

  render() {
    const { city } = this.state;
    return (
      <Provider store={store}>
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <AppBar title="WeatherApp"></AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleOnSelectedLocation} />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {
                    city &&
                      <ForecastExtended city={city} />
                  }
                </div>
              </Paper>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
                  <Posts/>
            </Col>
            <Col xs={12} md={6}>
            <PostForm/>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
