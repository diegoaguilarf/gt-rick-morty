import React from 'react';
import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
    return (
        <header className="header header--wrapper">
            <Link to="/">
                <figure className="header__brand">
                    LOGO
                </figure>
            </Link>
            <nav className="header__menu">
                <ul className="header__menu__list">
                    <li className="header__menu__list__item">
                        <Link to="/personajes/favoritos">Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;