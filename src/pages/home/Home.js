
import { Card } from '../../components/card/Card'
import { HomeStyle,Conteiner } from './style'
import { Header} from "../../components/header/Header"
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

export const Home = () => {
    const context = useContext(GlobalContext)

    const {pokemons, addPokedex, pokedex} = context

    const filtrandoPokemons = () => 
    pokemons.filter(
        (pokemonListado) => 
    !pokedex.find(
        (pokemonNaPokedex)=> pokemonListado.name === pokemonNaPokedex.name
         )
    )
    
    return(
        <div>
        <Header/>
        <HomeStyle>
            Todos os Pokemons
        <Conteiner >
            {filtrandoPokemons().map((pokemon)=>(
                <Card
                key = {pokemon.url}
                url = {pokemon.url}
                addPokedex = {addPokedex}/>
            ))}
        </Conteiner> 
         </HomeStyle>
         </div>
    )
}
