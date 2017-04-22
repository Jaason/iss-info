import React from 'react';

import {ddToDms} from '../../helpers/coordinates'
import './IssData.scss';
export default class IssData extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let velocity_kmh = Math.round(this.props.velocity);
    let velocity_ms = Math.round(velocity_kmh / 3.6);
    let velocity_mph = Math.round(velocity_kmh * 0.62137119223733);
    let altitude = Math.round(this.props.altitude);
    let dmsCoords = ddToDms(this.props.latitude, this.props.longitude);
    return (
      <div className="issdata">

        <h1>
          Where is International Space Station?
        </h1>

        <p className="text-muted">
          autoupdate every 5 seconds
        </p>
        <div className="panels">
          <div className="row">
            <div className="col-xs-3">
              <div className="panel panel-default panel-info">
                <div className="panel-heading">Orbital speed</div>
                <ul className="list-group">
                  <li className="list-group-item">{velocity_kmh}&nbsp;km/h</li>
                  <li className="list-group-item">{velocity_ms}&nbsp;m/s</li>
                  <li className="list-group-item">{velocity_mph}&nbsp;mph</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="panel panel-default panel-info">
                <div className="panel-heading">Ground point</div>
                <ul className="list-group">
                  <li className="list-group-item">Longitude: {this.props.longitude}</li>
                  <li className="list-group-item">Latitude: {this.props.latitude}</li>
                  <li className="list-group-item">&nbsp;{dmsCoords}</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="panel panel-default panel-info">
                <div className="panel-heading">Other information</div>
                <ul className="list-group">
                  <li className="list-group-item">
                    Altitude: {altitude}&nbsp;km
                  </li>
                  <li className="list-group-item">&nbsp;</li>
                  <li className="list-group-item">&nbsp;</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="panel panel-default panel-info">
                <div className="panel-heading">&nbsp;</div>
                <ul className="list-group">
                  <li className="list-group-item">&nbsp;</li>
                  <li className="list-group-item">&nbsp;</li>
                  <li className="list-group-item">&nbsp;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
