import React from 'react';
import IssData from './shared/IssData';
import Map from './shared/Map';
require('styles/app.scss');

export default class Position extends React.Component {

  constructor() {
    super();
    this.state = {
      iss: [],
      title: 'ISS'
    };

    this.getPosition = this.getPosition.bind(this);
  }

  getPosition() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544').then(response => response.json()).then(function(json) {
      this.setState({iss: json});
    }.bind(this))
  }

  componentDidMount() {
    this.getPosition();
    setInterval(this.getPosition, 5000);
  }

  render() {

    return (
      <div className="position">

        <IssData latitude={this.state.iss.latitude} longitude={this.state.iss.longitude} velocity={this.state.iss.velocity} altitude={this.state.iss.altitude}/>
        <Map latitude={this.state.iss.latitude} longitude={this.state.iss.longitude} title={this.state.title}/>

      </div>
    )
  }

}
