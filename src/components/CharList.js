import React from 'react';

const CharList = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Click for Chars</button>
            {props.charNames.map((char, index) =>
            <div className="roster" key={index}>
                <p>{char.name}</p>
                <p>{char.status}</p>
                <img className="image" src={char.image}/>
            </div>
        )}
        </div>
    )
}

export default CharList;