import styled from "styled-components";
import imagem from "../../imagens/fundo-card.png"


export const CardStyle = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
background: #729F92;
border-radius: 12px;
width: 450px;
height: 220px;
background-image: url(${imagem});
background-size:58%;
background-repeat:no-repeat;
background-position-x:189px;
background-position-y: 0px;
`



export const Texto = styled.p`

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;

`

export const ImagemStyle = styled.img`
margin-top: -30%;
`



export const ButtonDetalhes = styled.button`

width: 74px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
margin-top: 10%;
margin-left:20%;
`


export const Button = styled.button`
width: 146px;
height: 38px;
background: #FFFFFF;
border-radius: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #0F0F0F;
margin-top: 5%;
margin-left:15%;
`