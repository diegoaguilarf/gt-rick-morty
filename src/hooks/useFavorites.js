import { useState, useEffect } from "react";

const useFavorites = data => {

    const [isFavorite, setIsFavorite] = useState(false);
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        getFavorites()
        if (data) {
            validateFavorite()
        }
    }, [])

    useEffect(() => {
      if (data) {
        validateFavorite()
      }
    }, [data])

  const getFavorites = () => {
    let newFavoritesData = JSON.parse(localStorage.getItem("favoriteCharacters"))
    if(!newFavoritesData || newFavoritesData.length === 0) setFavorites(null)
    else setFavorites(newFavoritesData)
  };

  const validateFavorite = () => {
    let favoriteCharacters = localStorage.getItem("favoriteCharacters");
    favoriteCharacters = JSON.parse(favoriteCharacters);
    if (favoriteCharacters) {
      const existFavorite = favoriteCharacters.find(item => item.id === data.id);
      setIsFavorite(existFavorite ? true : false);
    }
  };

  const addFavorite = () => {
    let favoriteCharacters = localStorage.getItem("favoriteCharacters");
    if (favoriteCharacters) {
      favoriteCharacters = JSON.parse(favoriteCharacters);
      localStorage.setItem(
        "favoriteCharacters",
        JSON.stringify([data, ...favoriteCharacters])
      );
    } else {
      localStorage.setItem("favoriteCharacters", JSON.stringify([data]));
    }
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    let favoriteCharacters = localStorage.getItem("favoriteCharacters");
    favoriteCharacters = JSON.parse(favoriteCharacters);
    const indexFavoriteCharacter = favoriteCharacters.findIndex(item => item.id === data.id);
    favoriteCharacters.splice(indexFavoriteCharacter, 1);

    localStorage.setItem("favoriteCharacters", JSON.stringify(favoriteCharacters));
    setIsFavorite(false);
  };

  return { favorites, isFavorite, addFavorite, removeFavorite };
};

export default useFavorites;
