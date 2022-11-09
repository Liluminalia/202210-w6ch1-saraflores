// imports comentadas para el deploy en netlify
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { rootState } from '../../../infrastructure/store/store';
// import { characterStatus } from '../../models/data';
// import * as ac from '../../reducer/action.creators';
import { characters } from '../../data/characters';

export function CharacterList() {
    // codigo comentado para el deploy en netlify
    // const char = useSelector((state: rootState) => state.characters);
    // const dispatcher = useDispatch();
    // useEffect(() => {
    //     dispatcher(
    //         ac.updateActionCreator(char,
    //             {(characters as characterStatus).lifeStatus:false}
    //         )
    //     );
    // }, [dispatcher]);
    return (
        <>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    {characters.map((item) => (
                        <li key={item.id} className="character col">
                            <div className="card character__card">
                                <img
                                    src={
                                        './assets/' +
                                        item.name.toLowerCase() +
                                        '.jpg'
                                    }
                                    alt={`${item.name}  ${item.family}`}
                                    className="character__picture card-img-top"
                                    height={300}
                                />
                                <div className="card-body">
                                    <h2 className="character__name card-title h4">
                                        {item.name + ' ' + item.family}
                                    </h2>
                                    <div className="character__info">
                                        <ul className="list-unstyled">
                                            <li>Edad: {item.age} años</li>
                                            <li>
                                                Estado:
                                                <i className="fas fa-thumbs-down"></i>
                                                <i className="fas fa-thumbs-up"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="character__overlay">
                                        <div className="character__actions">
                                            <button className="character__action btn">
                                                habla
                                            </button>
                                            <button className="character__action btn">
                                                muere
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <i className="emoji"></i>
                            </div>
                        </li>
                    ))}
                </ul>
                <slot></slot>
                <div className="comunications">
                    <p className="comunications__text display-1">A phrase</p>
                    <img
                        className="comunications__picture"
                        src="img/no-one.jpg"
                        alt="Name and family of speaker"
                    />
                </div>
            </div>
        </>
    );
}
