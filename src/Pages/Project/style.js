import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #282c34;
    height:38vw;

    h1{
        color: cornflowerblue;
        border-bottom: 2px solid white;
        width: 1500px;
        margin: 50px 50px;
        padding: 10px;
    }

    @media(max-width:1300px) {
        gap: 5px;
    }

    @media(max-width:1024px){
        gap: 0px;
        height: 56vw;
    }

    @media(max-width:688px){
        gap: 0px;
        height: 118vw;
    }

    @media(max-width:415px){
        gap: 0px;
        height: 165vw;
    }

    @media(max-width:412px){
        gap: 0px;
        height: 150vw;
    }
    
    @media(max-width:410px){
        gap: 0px;
        height: 140vw;
    }
    @media(max-width:400px){
        gap: 0px;
        height: 145vw;
    }

    @media(max-width:380px){
        gap: 0px;
        height: 160vw;
    }

    @media(max-width:375px){
        gap: 0px;
        height: 120vw;
    }

    @media(max-width:360px){
        gap: 0px;
        height: 145vw;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
 
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    h2{
        font-size: larger;
        color: cornflowerblue;
        width: 500px;
    }

    h4{
        color: white;
    }

    div{
        border: 2px solid white;
    }

    @media(max-width:1020px){
        display: flex;
        flex-direction: row;
        overflow: scroll;
        align-items: flex-start;

        div{
            width: 200px;
        }
        h2{
            width: 200px;
        }
    }

    @media(max-width:680px){
        display: flex;
        flex-direction: row;
        overflow: scroll;
        align-items: flex-start;

        div{
            width: 200px;
        }
        h2{
            width: 200px;
        }
    }

    @media(max-width:415px){
        display: flex;
        flex-direction: column;
        overflow: auto;
        width: 350px;

        div{
            width: 300px;
        }

        h2{
            width: 300px;
        }
    }

    @media(max-width:400px){
        display: flex;
        flex-direction: column;
        overflow: auto;

        div{
            width: 350px;
        }

        h2{
            width: 300px;
        }
    }

    @media(max-width:380px){
        display: flex;
        flex-direction: column;
        overflow: auto;

        div{
            width: 320px;
        }

        h2{
            width: 300px;
        }
    }

    @media(max-width:395px){
        display: flex;
        flex-direction: column;
        overflow: auto;

        div{
            width: 320px;
        }

        h2{
            width: 320px;
        }
    }
`
export const DivLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg{
        width: 100px;
        height: 50px;
        cursor: pointer;
        :hover{
            transform: scale(1.05);
        }
    }
`
