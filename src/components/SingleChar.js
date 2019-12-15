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
                        <img className="single-img" src={props.charImg.image}/>
                        <p className="name-list"> {props.charImg.name}</p>
                        <p className="gender"> {props.charImg.gender}</p>
                        <p className="status"> {props.charImg.status}</p>
                        <p className="species"> {props.charImg.species}</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SingleChar;