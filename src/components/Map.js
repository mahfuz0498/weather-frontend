import React from "react";
import GoogleMapReact from "google-map-react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import mapStyle from "../mapStyle";

// const location = {
//   address: "1600 Amphitheatre Parkway, Mountain View, california.",
//   lat: 37.42216,
//   lng: -122.08427
// };

// const Map = ({ location, zoomLevel }) => (
//   <div className="map">
//     <h2 className="map-h2">Come Visit Us At Our Campus</h2>

//     <div style={{ height: "100vh", width: "100%" }} className="google-map">
//       <GoogleMapReact
//         defaultCenter={location}
//         defaultZoom={zoomLevel}
//         bootstrapURLKeys={{ key: "AIzaSyDzGTI9teC872f-dxriNut8JYigMWyJinY" }}
//       ></GoogleMapReact>
//     </div>
//   </div>
// );

const mapContainerStyle = {
  width: "50vw",
  height: "50vh"
};

const center = {
  lat: -3.7,
  lng: -38.4
};

const option = {
  style: mapStyle
};
function Map_() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_key
  });
  console.log(process.env.REACT_APP_key);
  if (loadError) return <p>Load error</p>;
  if (!isLoaded) return <p>loading map....</p>;
  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        option={option}
        onClick={e => console.log(e)}
      ></GoogleMap>
    </div>
  );
}

export default Map_;
