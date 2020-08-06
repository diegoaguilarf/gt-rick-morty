import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import useFavorites from "hooks/useFavorites"
import axios from 'axios'
import "./character.scss"

const Character = () => {
    let { id } = useParams();

    const [character, setCharacter] = useState(null)

    const { isFavorite, addFavorite, removeFavorite } = useFavorites(character);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const { data } = await axios({
            method: "GET",
            url: `https://rickandmortyapi.com/api/character/${id}`
        })
        setCharacter(data)
    }

    return (character ? <div className="character character--wrapper">
        <div className="character__header">
            <Link to="/">
                <span className="character__header__back">
                    <i className="material-icons">keyboard_backspace</i>
                </span>
            </Link>
        </div>
        <div className="character__content">
            <div>
                <p className="character__content__specie">{ character.species }</p>
                <p className="character__content__name">{ character.name }</p>
                <p>{ character.status }</p>
                <p>{ character.type }</p>
                <p>{ character.gender }</p>
            </div>
            <img src={ character.image } className="character__content__image"/>
        </div>
        <div className="character__actions">
            {isFavorite ? (
            <i className="material-icons favorite" onClick={() => removeFavorite()}>
                favorite
            </i>
            ) : (
            <i className="material-icons" onClick={() => addFavorite()}>
                favorite_border
            </i>
            )}
        </div>
    </div> : null);
}
 
export default Character;