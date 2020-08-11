import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Power3 } from "gsap";
import { gsap } from "gsap/all";
import useFavorites from "hooks/useFavorites"
import axios from 'axios'
import "./character.scss"

import Empty from "components/Empty"

const Character = () => {
    let { id } = useParams();
    const [character, setCharacter] = useState(null)
    const { isFavorite, addFavorite, removeFavorite } = useFavorites(character);
    const [offline, setOffline] = useState(false);
    let content = useRef(null);
    let image = useRef(null);

    useEffect(() => {
        try {
            gsap.from(image, { duration: 1, opacity: 0, y: 200, ease: Power3.easeOut });
            gsap.from(content.children, { duration: 1.2, opacity: 0, y: 44, ease: Power3.easeOut, stagger: 0.1, delay: 0.5 });
        } catch (error) {
            
        }
    }, [character])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `https://rickandmortyapi.com/api/character/${id}`
                })
                setCharacter(data)
            } catch(err) {
                if(err.message === 'Network Error') setOffline(true)
            }
        }
        fetchData()
    }, [id])


    return (character ? <div className="character character--wrapper">
        <div className="character__header">
            <Link to="/">
                <span className="character__header__back">
                    <i className="material-icons">keyboard_backspace</i>
                </span>
            </Link>
        </div>
        <div className="character__content">
            <div ref={el => content = el}>
                <p className="character__content__specie">{ character.species }</p>
                <p className="character__content__name">{ character.name }</p>
                <p>{ character.status }</p>
                <p>{ character.type }</p>
                <p>{ character.gender }</p>
            </div>
            <img src={ character.image } className="character__content__image" alt={character.name} ref={el => image = el}/>
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
    </div> : (
        offline ? <Empty emoji="😬" title="¡Sin Internet!">
        Verifica que estés conectado a una red, y si persiste llama a tu proveedor de internet
      </Empty> : <Empty emoji="🤔" title="¡Algo salio mal!">
        No es posible ver la información del personaje 
      </Empty>
    ));
}
 
export default Character;