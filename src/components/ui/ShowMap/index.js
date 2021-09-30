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
    @media(max-width: 800px) {
        width: 65%;
        flex-direction: column;
        position: absolute;
        height: 38%;
        top: 30%;
    }
`
const Separator = styled.div`
    border-left: 1px solid grey;
    height: 50%;
    position: relative;
    left: 2%;
    top: 25%;
    @media(max-width: 800px) {
        display: none;
  }

`

const Info = styled.div`
    //border: 1px solid red;
    width: 23.2%;
    height: 70%;
    position: relative;
    left: 3%;
    top: 20%;
    @media(max-width: 800px) {
        width: 100%;
        flex-direction: column;
        height: 20%;
        text-align: center;
        margin-top: -20%;
        margin-bottom: 22%;
        margin-left: -3%;
  }
`

export { 
    DivInfos,
    Separator,
    Info
}