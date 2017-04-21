import React from 'react';
import './IssData.scss';
export default class IssData extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="issdata">

        <h1>
          Where is ISS?
        </h1>

        <p>
          Longitude: {this.props.longitude}, Latitude: {this.props.latitude}
        </p>

        <p>
          Speed: {this.props.velocity}&nbsp;km/h
        </p>

      </div>
    );
  }
}
