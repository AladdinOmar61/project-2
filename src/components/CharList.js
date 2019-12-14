import React from 'react';

const CharList = (props) => {
    return (
        <div>
            <button className="roster-click" onClick={props.onClick}>Click for Chars</button>
            {props.charNames.map((char, index) =>
            <div className="roster" key={index}>
                <p className="name">{char.name}</p>
                <img className="image" src={char.image} alt="list of rick and morty characters"/>
            </div>
        )}
        </div>
    )
}

export default CharList;