import React from 'react';

const CharList = (props) => {
    return (
        <div>
            <button className="roster-click" onClick={props.onClick}>Click for Chars</button>
            {props.charNames.map((char, index) =>
            <div className="roster" key={index}>
                <img className="image" src={char.image} alt="list of rick and morty characters"/>
                <p className="name">Name: {char.name}</p>
                <p>ID: {char.id}</p>
            </div>
        )}
        </div>
    )
}

export default CharList;