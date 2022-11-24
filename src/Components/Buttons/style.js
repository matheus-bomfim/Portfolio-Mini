import styled from "styled-components"

export const Button = styled.button`
    border: 2px solid #282c34;
    color: white;
    height: 60px;
    background-color: #282c34;
    width: 150px;
    border-radius: 10px;
    font-family: Times, serif;
    font-size: medium;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    p{
        color: white;
        text-decoration: none;
        margin: 0px;
        :hover{
            transform: scale(1.05);
        }
    }
`