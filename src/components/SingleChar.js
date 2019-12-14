import React from 'react';

function SingleChar(props) {
    return (
        <div>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await props.onCharClick();
            }}>

                <input type="text" onChange={props.charSearch}></input>
                <button type="submit">Search Character</button>
                {props.apiCharLoaded &&
                    <img src={props.charImg} alt="a rick and morty character" />
                }
            </form>
        </div>
    )
}

export default SingleChar;