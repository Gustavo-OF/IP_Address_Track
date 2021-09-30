//  Importação do React.
import { Fragment, React } from "react";
//  Fim importação do React.

//  Importação do CSS e JS do Leaflet.
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
//  Fim importação Leaflet.

//  Importação do Leaflet para o React.
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
//  Fim importação do Leaftlet React.

//  Importação das DIV's do componente.
import { 
  DivInfos,
  Separator,
  Info 
} from "./ui/ShowMap";
//  Fim importação das DIV's.

//  Importação das fontes.
import {
  H4,
  H2
} from "./ui/ShowMap/fonts";
//  Fim importações das fontes.

//  Importação do ícone de localização.
import {
  icon
} from "./ui/ShowMap/icons"
//  Fim importação do ícone de localização.

/**
 * Função do módulo para mostrar as informações trazidas pelo App.js e renderizar o mapa
 * do Leaflet.
 * @param {Array} props 
 * @returns 
 */

function ShowMap(props) {
  /**
   * Função para atualizar o mapa após ser feita uma nova pesquisa.
   * @param {Array} props 
   * @returns 
   */
  function UpdateMap(props) {
      const map = useMap();
      map.setView([props.props.lat, props.props.lng], 13);
      return null;
    }

  return (
    <Fragment>
    <DivInfos>
      <Info>
        <H4>
          IP ADDRESS
        </H4>
        <H2>
          {props.info.ip}
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
        <UpdateMap props={props.info.location}/>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={[props.info.location.lat, props.info.location.lng]}>
        </Marker>
      </MapContainer>
    </div>
    </Fragment>
  )
}

export { ShowMap }