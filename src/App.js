import { React, useEffect, useState } from "react"
import { Route } from "react-router";
import {
  BrowserRouter as Router
} from "react-router-dom"

import { IpTracker } from "./components/IpTracker";
import { ShowMap } from "./components/ShowMap";
import { getUserIp } from "./components/useCases/getUserIP"
import { getLocationByIp } from "./components/useCases/returnLocationByIp";

import { Loader } from "./components/ui/Loader"


function App() {

  const [ip, setIP] = useState('');
  const [infoLocation, setInfoLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    setIP(await getUserIp());
    setInfoLocation(await getLocationByIp(ip));
    if(infoLocation !== []) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, []);
  

  if(isLoading){
    return (
      <Loader></Loader>
    )
  }
  return (
    <Router>
      <Route path="/">
        <IpTracker></IpTracker>
        <ShowMap ip={ip} info={infoLocation}></ShowMap>
      </Route>
    </Router>
  );
}

export default App;
