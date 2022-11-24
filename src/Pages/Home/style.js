import styled from "styled-components"
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #282c34;
    height:38vw;
    width: inherit;
    gap: 100px;
    justify-content: center;

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
    @media(max-width:390px){
        gap: 0px;
        height: 117vw;
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
export const DivWelcome = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        border-bottom: 2px solid white;
        color: white;
    }
    span{
        color: cornflowerblue;
    }
    h3{
        color: white;
        margin: 0px 0px 0px 0px;
    }

    @media(max-width:450px){
        h1{
            font-size: medium;
        }
        h3{
            font-size: medium;
        }
    }
`

export const DivLanguages = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        color: white;
    }
`

export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    gap: 35px;

    img{
        width: 120px;
        height: 120px;
    }

    @media(max-width:1300px) {
        gap: 5px;

        img{
            width: 100px;
            height: 100px;
        }

    }
    @media(max-width:450px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        
       img{
        width: 51px;
        height: 50px;
       }
    }

    @media(max-width:688px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`