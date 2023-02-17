import React from "react";
import {HeaderHome,HeaderPokedex,HeaderDetalhes, Button, ButtonExcluir,TodosPokemons } from "./style";
import { irParaPokedex } from "../../routes/coordinator";
import { irParaHome } from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import imagem from "../../imagens/image-header.png"

export const Header = () => {

    const navigate =useNavigate()
    const location = useLocation()
    

    if (location.pathname === "/"){
        return <HeaderHome >
        <img src={imagem}/>
        <Button onClick={()=>irParaPokedex(navigate)}>pokedex</Button>
     </HeaderHome>
    } if (location.pathname === "/pokedex"){
        return  <HeaderPokedex>
        <TodosPokemons onClick={()=>irParaHome(navigate)}>Todos os Pokémons</TodosPokemons>
        <img src={imagem}/>
        </HeaderPokedex>
    }else{ 
        return <HeaderDetalhes>
        <TodosPokemons onClick={()=>irParaHome(navigate)}>Todos os Pokémons</TodosPokemons>
        <img src={imagem}/>
        <ButtonExcluir>Excluir da Pokedex</ButtonExcluir>
        </HeaderDetalhes>
    }
}





