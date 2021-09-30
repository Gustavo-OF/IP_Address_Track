//  Importação do React.
import { React, useState } from "react";
import { Link } from "react-router-dom";
//  Fim importação do React.

//  Importação das DIV's de fundo e do campo de texto
import {
    Background,
    IpAddress
} from "./ui/IpTracker";
//  Fim importação das DIV's

// Importação das fontes.
import {
    H3,
    H4
} from "./ui/IpTracker/fonts";
//  Fim importação das fontes.

//  Importação do campo de texto.
import {
    IpAddressInput,
} from "./ui/IpTracker/input/texts";
//  Fim importação do campo.

//  Importação dos botões
import {
    SearchIP
} from "./ui/IpTracker/input/buttons"
//  Fim importação dos botões.

//  Importação do ícone de seta para pesquisar.
import { ReactComponent as Icon } from './ui/images/icon-arrow.svg';
//  Fim importação do ícone.

/**
 * Função do módulo para renderizar a parte de cima do aplicativo. 
 * Passa o que o usuário digitou como parametro para pesquisar.
 */
function IpTracker() {
    //  Estado para capturar o que o usuário digitou.
    const [textValue, setTextValue] = useState();

    
    return (
        <Background>
            <IpAddress>
                <H3> IP Address Tracker</H3>
                <IpAddressInput onChange={e => setTextValue(e.target.value)}/>
                <Link to={{pathname: `/${textValue}`}}>
                    <SearchIP>
                        <H4>
                            <Icon/>
                        </H4>
                    </SearchIP>
                </Link>
            </IpAddress>
        </Background>
    )
}

export { IpTracker }