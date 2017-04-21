import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.scss';

const Icon = ({text}) => (
  <div style={{
    position: 'relative',
    color: 'white',
    background: 'red',
    height: 40,
    width: 40,
    top: -20,
    left: -20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    {text}
  </div>
);

export default class Map extends React.Component {

  static defaultProps = {
    zoom: 7
  };

  constructor(props) {
    super(props);
  }

  render() {
    const centerPos = {
      lat: this.props.latitude,
      lng: this.props.longitude
    };
    return (
      <div className="map">
        <GoogleMapReact defaultZoom={this.props.zoom} center={centerPos}>
          <Icon lat={this.props.latitude} lng={this.props.longitude} text={this.props.title}/>
        </GoogleMapReact>
      </div>
    )

  }

}
