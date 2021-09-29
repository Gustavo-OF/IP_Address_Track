import styled from "styled-components";

const DivInfos = styled.div`
    width: 65%;
    height: 10rem;
    //border: 1px solid red;
    position: absolute;
    margin-top: -7%;
    margin-left: 16%;
    background-color: #efefef;
    border-radius: 25px;
    display: inline-flex;
    box-shadow: 0px 3px #d1cdcd;
`
const Separator = styled.div`
    border-left: 1px solid grey;
    height: 50%;
    position: relative;
    left: 2%;
    top: 25%;

`

const Info = styled.div`
    //border: 1px solid red;
    width: 23.2%;
    height: 70%;
    position: relative;
    left: 3%;
    top: 20%;
`

export { 
    DivInfos,
    Separator,
    Info
}