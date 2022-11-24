import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 120px;
    width: 100%;
    background-color: #282c34;
    border-top: 2px solid red;
    position: fixed;
    align-items: center;
    justify-content: center;
    gap: 500px;
    svg{
        width: 70px;
        height: 50px;
    }

    @media(max-width:1300px) {
        gap: 200px;
    }

    @media(max-width:1024px){
        gap: 20px;
    }

    @media(max-width:688px){
        gap: 100px;
    }

    @media(max-width:450px){
        gap: 30px;
        width: 400px;
    }

    @media(max-width:375px){
        gap: 30px;
        width: 380px;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    cursor: pointer;
`

export const TextContact = styled.h2`
    color: ${props => props.colorText || "white"};
    
    @media(max-width:450px){
        display: none;
    }

    @media(max-width:688px){
        display: none;
    }

`