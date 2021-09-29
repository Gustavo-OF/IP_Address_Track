import { React } from "react"

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

function IpTracker() {
    return (
        <Background>
            <IpAddress>
                <H3> IP Address Tracker</H3>
                <IpAddressInput/>
                <SearchIP><H4>{`>`}</H4></SearchIP>
            </IpAddress>
        </Background>
    )
}

export { IpTracker }