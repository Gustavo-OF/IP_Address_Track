import styled from "styled-components";
import "@fontsource/rubik"

const H4 = styled.h4`
    font-family: "Rubik";
    color: grey;
    margin: 0 auto;
    letter-spacing: 2px;
    @media(max-width: 800px) {
        text-align: center;
    }
`
const H2 = styled.h2`
    font-family: "Rubik";
    padding-top: 8%;
    color: black;
    margin: 0 auto;
    letter-spacing: 2px;
    word-break: break-all;
    @media(max-width: 800px) {
        word-break:normal;
  }
`
export { H4, H2 }