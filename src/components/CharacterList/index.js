import React from 'react';
import Pagination from 'rc-pagination';
import '../../../node_modules/rc-pagination/assets/index.css';
import "./characterlist.scss"

import CharacterItem from "components/CharacterItem"

const CharacterList = ({ data, title = "", withPagination, count, onChangePage }) => {

    const onChange = (value) => {
        window.scrollTo(0, 0);
        onChangePage(value)
    }

    return (
        data ? <div className="characterlist characterlist--wrapper">
            <h3 className="characterlist__title">{ title }</h3>
            <ul className="characterlist__items">
                {data.map(item => <li key={item.id.toString()}>
                    <CharacterItem data={item} />
                </li>)}
            </ul>
            <div className="characterlist__pagination">
                {withPagination ? <Pagination total={count} pageSize={20} onChange={onChange}/> : null}
            </div>
        </div> : null
    )
}

export default CharacterList;