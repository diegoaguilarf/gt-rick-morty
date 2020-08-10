import React from 'react';
import { Link } from 'react-router-dom';
import useFavorites from "hooks/useFavorites"

import CharacterList from "components/CharacterList"
import Empty from "components/Empty";

const Favorites = () => {
    const { favorites } = useFavorites()

    return (<div>
        {favorites ? 
            <CharacterList data={favorites} title="Personajes Favoritos"/>
            :
            <Empty emoji="😟" title="No tienes personajes favoritos" buttonRoute="/personajes" buttonText="VER PERSONAJES">
                Échale un ojo a la <Link to="/personajes">lista de personajes</Link>, si
                te gusta alguno
                <br />
                solo debes oprimir el corazón y automáticamente lo guardaras
                <br />
                en tu lista de favoritos
            </Empty>
        }
    </div>);
}
 
export default Favorites;