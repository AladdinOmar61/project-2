import React from 'react';
import axios from 'axios';

async function CallApi () {
    let allChars = await axios.get(`https://rickandmortyapi.com/api/character/`);
    console.log(allChars.data.results);
    return allChars.data.results
}

export default CallApi;