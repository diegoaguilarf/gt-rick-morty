import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./searchengine.scss";

import useDebounce from "hooks/useDebounce";

import Input from "components/UI/Input";
import Button from "components/UI/Button";

const SearchEngine = ({ onChange }) => {
  const location = useLocation();

  const sizeParams = location.search.split("=").length - 1

  const [searchTerm, setSearchTerm] = useState();

  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  useEffect(() => {
    onChange(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="searchengine searchengine--wrapper">
      <div className="searchengine__input">
        <Input
          type="text"
          placeholder="Personaje"
          onChange={e => setSearchTerm(e.target.value)}
        />
        {sizeParams ? (
          <div className="searchengine__filters">
            <p className="searchengine__filters_applied">
              {sizeParams} {sizeParams === 1 ? 'filtro aplicado' : 'filtros aplicados'}
            </p>
            <Link to="/personajes">
              <p className="searchengine__filters_clear">Borrar filtros</p>
            </Link>
          </div>
        ) : null}
      </div>
      <Link to="filtros">
        <Button title="Ver filtros" className="searchengine__filters_btn"/>
      </Link>
    </div>
  );
};

export default SearchEngine;
