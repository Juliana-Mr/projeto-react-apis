import React, { useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { irParaDetalhes } from "../../routes/coordinator"
import { CardStyle, Texto, ImagemStyle, ImagemFundo, ButtonDetalhes, Button } from "./style"



export const Card = ({url, addPokedex, excluirPokemon}) => {

    const navigate = useNavigate()

    const location = useLocation()

    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        buscarPokemon()
    },[])

    const buscarPokemon = async () => {
        try{
            const resposta = await axios.get(url)
            setPokemon(resposta.data)
        }catch (error){
            console.log("Erro ao buscar página")
            console.log(error)
        }
        }
   
return(
    <CardStyle>
          <Texto>{pokemon.name}</Texto>
      
   
        <ImagemStyle src = {pokemon.sprites?.other?.["official-artwork"].front_default} alt={pokemon.name}/>
     

       
       
        <ButtonDetalhes onClick={()=>irParaDetalhes(navigate, pokemon.name)}>
            Detalhes
        </ButtonDetalhes>
       {location.pathname === "/"?(
            <Button onClick={()=>addPokedex(pokemon)}>Capturar</Button>
        ) : (
            <Button onClick={()=>excluirPokemon(pokemon)}>Excluir</Button>
        ) }


      
    </CardStyle>
)
}
