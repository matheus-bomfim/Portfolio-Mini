import styled from "styled-components"

export const Head = styled.header`
    display:flex;
    flex-direction: row;
    gap: 910px;
    align-items: center;
    justify-content: center;
    background-color: #282c34;
    border-bottom: 2px solid red;
    
    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 10px;
        align-items: center;
    }
    img{
        width: 50px;
        height: 50px;
    }
    h1{
        font-size: 20px;
        color: cornflowerblue;
        cursor: pointer;
    }

    ul{
        display: flex;
        flex-direction: row;
        gap: 50px;
    }

    li{
        list-style: none;
        cursor: pointer;
    }
    li:hover{
        transform: scale(1.1);
    }

    p{
        color: white;
    }

    @media(max-width:1300px) {
        gap: 800px
    }

    @media(max-width:1024px){
        gap: 600px;
    }

    @media(max-width:1000px) {
        gap: 500px;
    }

    @media(max-width:750px) {
        gap: 200px;
    }
    
    @media(max-width:450px){
        gap: 140px;

        ul{
            gap: 12px;
        }
    }

`