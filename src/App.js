import React, { Component } from 'react';

import axios from 'axios';
import Cars from './components/Cars/Cars'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loaded: false
    }
  }

  async componentDidMount() {
    const response = await axios.post("https://app.joindrover.com/api/web/vehicles?vehicle_type=Consumer");

    if(response.status !== 200) return alert('Sorry, it\'s taking longer than expected to find you a car');

    this.setState({
      data: response.data.data,
      loaded: true
    });
  }

  searchGearHandler = (event,index) => {
    const cars = this.state.data
    const { search } = this.state;
    let gear;

    this.setState({search: event.target.value});

    cars.map((car) => {
      gear = car.transmission;
      return gear;
    });

    if(search !== '' && gear.indexOf( search === -1 )) {
      //console show's what's being searched
      console.log(search);
      return;
    }

    if(gear.indexOf(search > 0)){
      //console show's what's being searched
      console.log(search);
      return
    }

  }

  render() {
    return (
      <div className="App">
        <input placeholder="Transmission Type" type="text" onChange={this.searchGearHandler} />
        <Cars cars={this.state.data}/>
      </div>
    );
  }
}

export default App;
