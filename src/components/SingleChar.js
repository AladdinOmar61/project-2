import React from 'react';

function SingleChar(props) {
    return (
        <div>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await props.onCharClick();
            }}>
                <div className="search-n-click">
                    <input value={props.value} className="search-bar" type="text" placeholder="Pick a number between 1-493" onChange={props.charSearch} ></input>
                    <button onSubmit={props.onCharSubmit} className="find-button" type="submit">Find Ric Pic</button>
                </div>
                {props.apiImgLoaded &&
                    <div className="char-info">
                        <img className="single-img" src={props.charImg.image} alt="" />
                        <button className="morty" onClick={props.voteUp}>Give this a morty</button>
                        <button className="schmorty" onClick={props.voteDown}>Give this a schmorty</button>
                        <p>{props.votes}</p>
                        <p className="name-list">Name: {props.charImg.name}</p>
                        <p className="gender">Gender: {props.charImg.gender}</p>
                        <p className="status">Status: {props.charImg.status}</p>
                        <p className="species">Species: {props.charImg.species}</p>
                        <div className="ricpic-votes">
                        </div>
                    </div>
                }
            </form>
        </div>
    )
}

export default SingleChar;