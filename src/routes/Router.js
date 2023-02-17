import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../pages/home/Home"
import {Detalhes} from "../pages/detalhes/Detalhes"
import {Pokedex} from "../pages/pokedex/Pokedex"


export const Router = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route  index element = {<Home/>}/>
            <Route path= "/detalhes"  element={<Detalhes/>}/>
            <Route path = "/pokedex"  element={<Pokedex/>}/>        
        </Routes>
        </BrowserRouter>

    )
}