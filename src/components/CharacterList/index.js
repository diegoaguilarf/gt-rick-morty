import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap/all";
import Pagination from 'rc-pagination';
import '../../../node_modules/rc-pagination/assets/index.css';
import "./characterlist.scss"

import CharacterItem from "components/CharacterItem"

const CharacterList = ({ data, title = "", withPagination, count, onChangePage }) => {
    let list = useRef([]);
    useEffect(() => {
        gsap.from(list.current, { duration: 0.15, opacity: 0, stagger: 0.2 });
    }, [data])

    const onChange = (value) => {
        window.scrollTo(0, 0);
        onChangePage(value)
    }

    return (
        data ? <div className="characterlist characterlist--wrapper">
            <h3 className="characterlist__title">{ title }</h3>
            <ul className="characterlist__items">
                {data.map((item, i) => <li key={item.id.toString()} ref={el => list.current[i] = el}>
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