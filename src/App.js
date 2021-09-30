//  Importações do React e das rotas do React.
import { React, useEffect, useState } from "react";
import { Route } from "react-router";
import {
  useLocation
} from "react-router-dom";
//  Fim importações React e rotas.

//  Importações dos componentes de página 
import { IpTracker } from "./components/IpTracker";
import { ShowMap } from "./components/ShowMap";
//  Fim importações dos componentes

//  Importações das funcionalidades e arquivos de API.
import { getIp } from "./components/useCases/getUserIP";
import { getLocationByIp } from "./components/useCases/returnLocationByIp";
//  Fim importações das funcionalidades.

//  Importação do Loader.
import { Loader } from "./components/ui/Loader";
//  Fim importação Loader.

/**
 * Função principal que realiza a chamada da API de Geolocalização por IP e
 * retorna para os componentes.
 *  
 */
function App() {
  //  Estado para guardar as informações de acordo com o IP.
  const [infoLocation, setInfoLocation] = useState([]);
  //  Estado para que o Loader continue rodando até a requisição acabar.
  const [isLoading, setIsLoading] = useState(true);
  //  Localização da rota atual. Será necessária para o useEffect.
  const location = useLocation();
  //  Variavel para guardar o IP.
  let ip = "";
  /**
   * Função para pegar o IP do usuário, caso ele não pesquise nenhum, ou pegar
   * o que ele digitou, realizar a pesquisa na API e retornar os valores.
   */
  const getData = async () => {
    //  Pega o IP se ele digitou ou não.
    ip = await getIp(location.pathname.split("/")[1]);
    //  Realiza a pesquisa na API.
    setInfoLocation(await getLocationByIp(ip));
    //  Se o Array ficou preenchido, para o Loader.
    if(infoLocation !== []) {
      setIsLoading(false);
    }
  }

  //  Chama a função de pesquisar toda vez que a rota mudar.
  useEffect(() => {
    async function fetchData() {
      await getData();
    }
    fetchData();
  }, [location]);
  
  //  Enquanto o Loader for true, continua rodando.
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
