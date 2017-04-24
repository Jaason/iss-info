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
            <div className="col-xs-12">
              <div className="panel panel-default panel-info">
                <div className="panel-heading">Orbital information</div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Speed</strong>
                    <span className="pull-right">{velocity_kmh}&nbsp;km/h ({velocity_ms}&nbsp;m/s)</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Altitude</strong>
                    <span className="pull-right">{altitude}&nbsp;km</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="panel panel-default panel-info">
                <div className="panel-heading">Ground point</div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Latitude/Longitude</strong>
                    <span className="pull-right">{this.props.latitude},{this.props.longitude}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Coordinates</strong>
                    <span className="pull-right">{dmsCoords}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Address</strong>
                    <span className="pull-right">{this.props.address}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
