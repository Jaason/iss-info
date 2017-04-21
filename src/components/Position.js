import React from 'react';
import IssData from './shared/IssData';
import Map from './shared/Map';
require('styles/app.css');

export default class Position extends React.Component {

  constructor() {
    super();
    this.state = {
      iss: [],
      title: 'ISS'
    };

  }

  getPosition() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544').then(response => response.json()).then(json => {
      this.setState({iss: json});
    })

  }

  componentDidMount() {
    this.getPosition();
  }

  render() {

    return (
      <div className="position">

        <IssData latitude={this.state.iss.latitude} longitude={this.state.iss.longitude} velocity={this.state.iss.velocity}/>
        <Map latitude={this.state.iss.latitude} longitude={this.state.iss.longitude} title={this.state.title}/>

      </div>
    )
  }

}
