import { Container } from "@mui/material";
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
  const [center, setCenter] = useState([12.9237, 77.4987]);
  let DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  console.log(L.tileLayer);
  return (
    <Container maxWidth="3xl ">
      <h1 className="sub-heading text-secondary text-bold text-3xl mb-5">THE VENUE</h1>
      <div style={{ marginTop: "4rem" }}>
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        attributionControl={false}
          >
        
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <Marker position={center}>
            <Popup>R. V. College of Engineering</Popup>
          </Marker>
        </MapContainer>
      </div>
    </Container>
  );
};

export default Map;
