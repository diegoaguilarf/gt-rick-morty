import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import CharacterList from "components/CharacterList";
import SearchEngine from "components/SearchEngine";
import Empty from "components/Empty"

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [paginationInfo, setPaginationInfo] = useState({ count: 0 });
  const history = useHistory();

  const search = useLocation().search;
  const [page, setPage] = useState("");
  const [params, setParams] = useState(search);

  useEffect(() => {
    setParams(search)
  }, [search])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: `https://rickandmortyapi.com/api/character/${params}${page}`
        });
        setCharacters(data.results);
        setPaginationInfo(data.info);
      } catch (err) {
        setCharacters(null);
        setPaginationInfo({ count: 0 });
      }
    };
    fetchData();
  }, [params, page]);


  const handleSearch = name => {
    if (name || name === "") {
      setParams(`?name=${name}`);
      history.push("/personajes");
    }
  };

  const handlePagination = number => {
    if (params) {
      setPage(`&page=${number}`);
    } else {
      setPage(`?page=${number}`);
    }
  };

  return (
    <div>
      <SearchEngine onChange={handleSearch} />
      {characters ? (
        <CharacterList
          data={characters}
          title="Personajes"
          withPagination={true}
          count={paginationInfo.count}
          onChangePage={handlePagination}
        />
      ) : (
        <Empty emoji="🧐" title="¡Rayos Amig@!, ¿Qué estas buscando?">
          Algo ha salido mal, no encontramos esas especificaciones, ¿Seguro<br/> 
          estas en la dimensión correcta?
        </Empty>
      )}
    </div>
  );
};

export default Home;
