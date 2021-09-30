import styled from "styled-components";

const SearchIP = styled.button`
    width: 7%;
    height: 15.8%;
    background-color: black; 
    border-radius: 20px;
    position: relative;
    top: 24%;
    left: 12%;
    border-radius: 0 13px 13px 0;
    box-shadow: none;
    border: none;
    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
        top: 23.5%;
        width: 10%;
        padding-left:4%;
  }
`

export { SearchIP }