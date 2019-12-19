// import React from 'react';
import axios from 'axios';

export const CallApi = async () => {
    const allChars = await axios.get(`https://rickandmortyapi.com/api/character/?page=1`);
    console.log(allChars);
    return allChars.data.results
}

export const CallChar = async (character) => {
    const getChar = await axios.get(`https://rickandmortyapi.com/api/character/${character}`)
    console.log(getChar.data.image);
    return getChar.data;
}