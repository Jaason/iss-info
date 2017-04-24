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

    this.getData = this.getData.bind(this);
  }

  getData() {
    let url = 'https://api.wheretheiss.at/v1/satellites/25544';

    fetch(url).then(response => response.json()).then(function(json) {
      this.setState({iss: json});
    }.bind(this)).then(function() {
      this.getAddress(this.state.iss.latitude, this.state.iss.longitude);
    }.bind(this))

  }

  getAddress(lat, lng) {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}`;

    fetch(url).then(response => response.json()).then(function(json) {
      let address = (json.status !== 'OK')
        ? 'n / a'
        : json.results[0].formatted_address;
      this.setState({geo: address});
    }.bind(this))
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 5000);
  }

  render() {

    return (
      <div className="position">

        <div className="row">
          <div className="col-xs-12 col-md-4">
            <IssData latitude={this.state.iss.latitude} longitude={this.state.iss.longitude} velocity={this.state.iss.velocity} altitude={this.state.iss.altitude} address={this.state.geo}/>
            <div className="text-center">
              <a href="https://github.com/Jaason/iss-info" className="github">Source on GitHub</a>
            </div>
          </div>
          <div className="col-xs-12 col-md-8">
            <Map latitude={this.state.iss.latitude} longitude={this.state.iss.longitude} title={this.state.title}/>
          </div>
        </div>

      </div>
    )
  }

}
