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
                {props.apiCharLoaded &&
                    <div>
                        <img src={props.charImg.image} alt={props.charImg.name} />
                        <p className="name">Name: {props.charImg.name}</p>
                        <p className="gender">Gender: {props.charImg.gender}</p>
                        <p className="status">Status: {props.charImg.status}</p>
                        <p className="species">Species: {props.charImg.species}</p>
                    </div>
                }
            </form>
        </div>
    )
}

export default SingleChar;