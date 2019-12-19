import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { Link, Route } from 'react-router-dom';

import { CallApi } from './components/CallApi';
import { CallChar } from './components/CallApi';

import CharList from './components/CharList';
import SingleChar from './components/SingleChar';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import soundclip from "./Audio/WUBBALUBBADUBDUB SOUND EFFECT.mp3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCharLoaded: false,
      apiImgLoaded: false,
      charNames: [],
      charSearch: "",
      charImg: [],
      currPage: 1
    }
    this.onSoundClick = this.onSoundClick.bind(this);
    this.sound = new Audio(soundclip);
  }

  CharPage = async () => {
    const page = await axios.get(`https://rickandmortyapi.com/api/character/?page=${this.state.currPage}`);
    console.log(page);
    return page;
}

  onSoundClick = (e) => {
    e.preventDefault();
    console.log('wubba');
    this.sound.play();
  }

  clickForChars = async (e) => {
    e.preventDefault();
    const getChars = await CallApi();
    this.setState({
      charNames: getChars,
      apiCharLoaded: true,
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
      apiImgLoaded: true,
      charSearch: ""
    })
  }

  onCharSubmit = (e) => {
    e.preventDefault();
    this.setState({
      charSearch: "",
      apiImgLoaded: true
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <nav>
          <ul>
            <div className="home-anim">
              <li><Link className="nav-home" to="/">Home</Link></li>
            </div>
            <div className="char-anim">
              <li onClick={this.clickForChars}><Link className="nav-list" to="/CharList">RicPics</Link></li>
            </div>
            <div className="search-anim">
              <li><Link className="nav-char" to="/SingleChar">Search</Link></li>
            </div>
          </ul>
        </nav>
        <main>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route path="/CharList" render={() => <CharList pageNum={this.pageNum} clickForPages={this.clickForPages} charNames={this.state.charNames} />}></Route>
          <Route path="/SingleChar" render={() => <SingleChar value={this.state.charSearch} onCharSubmit={this.onCharSubmit} apiImgLoaded={this.state.apiImgLoaded} onCharClick={this.onCharClick} charSearch={this.charSearch} charImg={this.state.charImg} />}></Route>
        </main>
        <Footer onSoundClick={this.onSoundClick} />
      </div>
    );
  }
}

export default App;
