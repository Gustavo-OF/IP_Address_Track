import styled from "styled-components";
import image from "../images/pattern-bg.png"

const Background = styled.div`
    width: 100%;
    height: 20rem;
    background-image: url(${image});
`

const IpAddress = styled.div`
    width: 50%;
    height: 15rem;
    //border: 1px solid red;
    margin: 0 auto;
    position: relative;
    top: 15%;
`

export { 
    Background,
    IpAddress
}