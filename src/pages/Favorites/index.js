import React from 'react';
import useFavorites from "hooks/useFavorites"
import CharacterList from "components/CharacterList"

const Favorites = () => {
    const { favorites } = useFavorites()

    return (<div>
        <CharacterList data={favorites} title="Personajes Favoritos"/>
    </div>);
}
 
export default Favorites;