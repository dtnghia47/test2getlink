import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import StyleWrapper from './StyleWrapper';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      contacts: {}
    };
  }
  componentDidMount(){
    fetch(`./data-mocks/contact.json`)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({contacts: responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: props.dataContacts.lat, lng: props.dataContacts.lng }}
      >
        {props.isMarkerShown && <Marker position={{ lat: props.dataContacts.lat, lng: props.dataContacts.lng }} />}
      </GoogleMap>
    ))
    return (
      <StyleWrapper className={`contact-wapper`}>
        <div className="contact session">
          <MyMapComponent
            isMarkerShown
            dataContacts = {this.state.contacts}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <div className="information-contact">
            <div className="contact-detail">
              <h1>CONTACT US</h1>
              <p><b>GETLINKSVN |  VIETNAM</b></p>
              <p><b>Address: </b>{this.state.contacts.address}</p>
              <p><b>Number Phone: </b>{this.state.contacts.numberPhone}</p>
            </div>
          </div>
        </div>
      </StyleWrapper>
    );
  }
}

Contact.propTypes = {
  contacts: PropTypes.object
}

export default Contact;
