import React from 'react';

function SingleChar(props) {
    return (
        <div>
            <form onChange={props.onCharSubmit} onSubmit={async (e) => {
                e.preventDefault();
                await props.onCharClick();
            }}>

                <input type="text" onChange={props.charSearch}></input>
                <button type="submit">Search Character</button>
                <div className="char-info">
                    <div>
                        <img className="single-img" src={props.charImg.image} alt=""/>
                        <p className="name-list">Name: {props.charImg.name}</p>
                        <p className="gender">Gender: {props.charImg.gender}</p>
                        <p className="status">Status: {props.charImg.status}</p>
                        <p className="species">Species: {props.charImg.species}</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SingleChar;