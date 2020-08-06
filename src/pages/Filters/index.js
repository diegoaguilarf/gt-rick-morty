import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./filters.scss"

import Select from 'components/UI/Select'
import Button from 'components/UI/Button'

const Filters = () => {

    const [URL, setURL] = useState('/personajes')
    const [paramsObj, setParamsObj] = useState({})

    const status = [
        "alive",
        "dead",
        "unknown"
    ]
    const gender = [
        "female",
        "male",
        "genderless",
        "unknown"
    ]
    const species = ["Human", "Alien", "Humanoid", "Poopybutthole"]
    const type = ["Human with antennae", "Parasite, Cyborg", "Fish-Person", "Self-aware arm", "Cat-Person", "Human with baby legs"]

    const addParamToURL = (event, label) => {
        const value = event.target.value;
        let newArray = { ...paramsObj }
        newArray[label] = `${label}=${value}`
        
        let newURL = '/personajes'
        Object.values(newArray).forEach(param => {
            if (newURL === '/personajes') {
                newURL = `${newURL}?${param}`
            } else {
                newURL = `${newURL}&${param}`
            }
        })
        setURL(newURL)
        setParamsObj(newArray)
    }

    return (
        <div className="filters filters--wrapper">
            <div className="filters__content">
                <Select options={species} placeholder="Especie" onChange={(event) => addParamToURL(event, "species")}/>
                <Select options={status} placeholder="Estatus" onChange={(event) => addParamToURL(event, "status")}/>
                <Select options={type} placeholder="Tipo" onChange={(event) => addParamToURL(event, "type")}/>
                <Select options={gender} placeholder="Género" onChange={(event) => addParamToURL(event, "gender")}/>

                <Link to={URL}>
                    <Button title="Buscar" background="#ee474a" color="#ffffff"/>
                </Link>
            </div>
        </div>
    )
}

export default Filters;