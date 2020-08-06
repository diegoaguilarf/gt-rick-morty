import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import CharacterList from "components/CharacterList";
import SearchEngine from "components/SearchEngine";

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [paginationInfo, setPaginationInfo] = useState({ count: 0 });
  const history = useHistory();

  const [page, setPage] = useState('')
  const [params, setParams] = useState(useLocation().search)

  useEffect(() => {
    fetchData()
  }, [params, page]);

  const fetchData = async () => {
    const { data } = await axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/character/${params}${page}`
    });
    setCharacters(data.results);
    setPaginationInfo(data.info);
  };

  const handleSearch = (name) => {
    if (name || name === '') {
      setParams(`?name=${name}`)
      history.push("/personajes")
    }
  }

  const handlePagination = (number) => {
    if (params) {
      setPage(`&page=${number}`)
    } else {
      setPage(`?page=${number}`)
    }
  }

  return (
    <div>
      <SearchEngine onChange={handleSearch} />
      <CharacterList 
        data={characters}
        title="Personajes"
        withPagination={true}
        count={paginationInfo.count}
        onChangePage={handlePagination}/>
    </div>
  );
};

export default Home;
