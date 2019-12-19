import React from 'react';

const CharList = (props) => {
    return (
        <div>
            {props.charNames.map((char, index) =>
                <div className="roster" key={index}>
                    <div>
                        <img className="image" src={char.image} alt="list of rick and morty characters" />
                        <p className="name">Name: {char.name}</p>
                        <p className="identity">ID: {char.id}</p>
                    </div>
                </div>
            )}
            {!props.apiCharLoaded &&
                <div>
                    <button className="previous" onClick={props.previousPage}>Previous</button>
                    <button className="next" onClick={props.nextPage}>Next</button>
                </div>
            }
        </div>
    )
}

export default CharList;