import { React, useState } from "react"

import {
    Background,
    IpAddress
} from "./ui/IpTracker";

import {
    H3,
    H4
} from "./ui/IpTracker/fonts";

import {
    IpAddressInput,
} from "./ui/IpTracker/input/texts";

import {
    SearchIP
} from "./ui/IpTracker/input/buttons"

import { ReactComponent as Icon } from './ui/images/icon-arrow.svg';
import { Link } from "react-router-dom";


function IpTracker() {

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