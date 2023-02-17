import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { GlobalContext } from "./GlobalContext"; 


export const GlobalState = (props)=>{
    const[pokemons, setPokemons]= useState([])
  const [pokedex, setPokedex] = useState ([])

  useEffect(() =>{
      pegarPokemons()
  },[])

  const pegarPokemons = async () =>{
      try {
          const resposta = await axios.get(BASE_URL)
          setPokemons(resposta.data.results)
      }catch(error){
          console.log("Erro ao buscar a página")
          console.log(error.resposta)
      }
  }

  const addPokedex = (pokemonAdicionado) => {
      const contemNaPokedex = pokedex.find(
          (item) => item.name === pokemonAdicionado.name)

          if (!contemNaPokedex) {
              const novaPokedex = [...pokedex, pokemonAdicionado ]
              setPokedex(novaPokedex)
          }
      }   
      
  const excluirPokemon = (pokemonExcluido) => {
      const novaPokedex = pokedex.filter(
          (pokemon) => pokemon.name !== pokemonExcluido.name
      )
      setPokedex(novaPokedex)
  }

const context = {
pokemons: pokemons,
pokedex: pokedex,
addPokedex: addPokedex,
excluirPokemon: excluirPokemon
}
    return(
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
        
    )
}