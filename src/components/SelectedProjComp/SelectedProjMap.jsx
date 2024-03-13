import React from "react";

const SelectedProjMap = () => {
  return (
    <div className="container-fluid SelectedProjMap">
      <div className="row px-0 w-100">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ikate+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Calculate population in area
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjMap;

// import React from "react";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

// const SelectedProjMap = ({ location }) => {
//   const mapStyles = {
//     height: "400px",
//     width: "100%",
//   };

//   const defaultCenter = {
//     lat: location.latitude,
//     lng: location.longitude,
//   };

//   return (
//     <LoadScript googleMapsApiKey="YOUR_API_KEY">
//       <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
//         <Marker position={defaultCenter} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };
