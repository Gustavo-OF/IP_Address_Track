import { React, useEffect, useState } from "react"
import { Route } from "react-router";
import {
  useLocation
} from "react-router-dom"

import { IpTracker } from "./components/IpTracker";
import { ShowMap } from "./components/ShowMap";
import { getIp } from "./components/useCases/getUserIP"
import { getLocationByIp } from "./components/useCases/returnLocationByIp";

import { Loader } from "./components/ui/Loader"


function App() {

  const [infoLocation, setInfoLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const location = useLocation();

  let ip = "";

  const getData = async () => {

    ip = await getIp(location.pathname.split("/")[1]) 

    setInfoLocation(await getLocationByIp(ip));

    if(infoLocation !== []) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getData();
    }
    fetchData();
  }, [location]);
  

  if(isLoading){
    return (
      <Loader></Loader>
    )
  }

  return (
      <Route path="/:ip?">
        <IpTracker></IpTracker>
        <ShowMap ip={ip} info={infoLocation}></ShowMap>
      </Route>
  );
}

export default App;
