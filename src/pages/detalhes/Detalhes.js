import React, { useEffect, useState } from 'react'
import { DetalhesStyle } from './style'
import { Header } from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL_POKEDEX } from '../../constants/url'


export const Detalhes = () => {


    return(
        <div>
        <Header/>
        <DetalhesStyle>
            Detalhes
        </DetalhesStyle>
        </div>
    )
}       


