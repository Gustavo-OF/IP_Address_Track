import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

import { Fragment, React } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { 
  DivInfos,
  Separator,
  Info 
} from "./ui/ShowMap"

import {
  H4,
  H2
} from "./ui/ShowMap/fonts"

function ShowMap(props) {
  return (
    <Fragment>
    <DivInfos>
      <Info>
        <H4>
          IP ADDRESS
        </H4>
        <H2>
          {props.ip}
        </H2>
      </Info>
      <Separator/>
      <Info>
      <H4>
          LOCATION
        </H4>
        <H2>
          {props.info.location.city}, {props.info.location.country} {props.info.location.infoLocation}
        </H2>
      </Info>
      <Separator/>
      <Info>
      <H4>
          TIMEZONE
        </H4>
        <H2>
          UTC {props.info.location.timezone}
        </H2>
      </Info>
      <Separator/>
      <Info>
      <H4>
          ISP
        </H4>
        <H2>
          {props.info.as.name}
        </H2>
      </Info>
    </DivInfos>
    <div>
      <MapContainer center={[props.info.location.lat, props.info.location.lng]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "28rem", zIndex:"-1"}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.info.location.lat, props.info.location.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </Fragment>
  )
}

export { ShowMap }