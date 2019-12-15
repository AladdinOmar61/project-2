import React, { Component } from 'react';
import './App.css';

import { CallApi } from './components/CallApi';
import { CallChar } from './components/CallApi';

import CharList from './components/CharList';
import SingleChar from './components/SingleChar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCharLoaded: false,
      apiImgLoaded: false,
      charNames: [],
      charSearch: "",
      charImg: []
    }
  }

  clickForChars = async (e) => {
    e.preventDefault();
    const getChars = await CallApi();
    this.setState({
      charNames: getChars,
      apiCharLoaded: true
    })
  }

  charSearch = (e) => {
    this.setState({
      charSearch: e.target.value,
    })
  }

  onCharClick = async (e, character) => {
    character = this.state.charSearch;
    const charData = await CallChar(character);
    this.setState({
      charImg: charData,
      apiImgLoaded: true
    })
  }

  onCharSubmit = (e) => {
    e.preventDefault();
    this.setState({
      charSearch: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Ricpic and Morty-Schmorty</h1>
        <h2 className="slogan">Why the hell are you here?</h2>
        <SingleChar apiCharLoaded={this.state.apiCharLoaded} onCharClick={this.onCharClick} charSearch={this.charSearch} charImg={this.state.charImg} />
        <CharList charNames={this.state.charNames} clickForChars={this.clickForChars} />
      </div>
    );
  }
}

export default App;
