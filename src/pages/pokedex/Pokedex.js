import { Card } from "../../components/card/Card";
import {PokedexStyle, Conteiner} from "./styled"
import { Header } from "../../components/header/Header";
import {BASE_URL_POKEDEX} from "../../constants/url"
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const Pokedex = () =>{
const context = useContext(GlobalContext)

const {pokedex,excluirPokemon} = context

 return(
    <div>
    <Header/>
     <PokedexStyle>
        
        Meus Pokémons
    <Conteiner>
        {pokedex.map((pokemon)=>(
            <Card
            key={pokemon.name}
            url = {`${BASE_URL_POKEDEX}/${pokemon.name}`}
            
            excluirPokemon = {excluirPokemon}
                />
        ))}
    </Conteiner>
    </PokedexStyle>
    </div>
 )
}

                 
            