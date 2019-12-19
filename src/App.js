import React, { Component } from 'react';
import './App.css';

import { Link, Route } from 'react-router-dom';

import { CallChar } from './components/CallApi';
import { CharPage } from './components/CallApi';

import CharList from './components/CharList';
import SingleChar from './components/SingleChar';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import soundclip from "./Audio/WUBBALUBBADUBDUB SOUND EFFECT.mp3";
import soundclip2 from "./Audio/OOOOWEEE Mr. Poopybutthole Sound Clip S2 Finale Rick and Morty.mp3";
import soundclip3 from './Audio/Oh, geez Rick and Morty S01E01.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCharLoaded: false,
      apiImgLoaded: false,
      charNames: [],
      charSearch: "",
      charImg: [],
      currPage: 1,
      votes: 0
    }
    this.sound = new Audio(soundclip);
    this.sound2 = new Audio(soundclip2);
    this.sound3 = new Audio(soundclip3)
  }

  voteUp = (e) => {
    e.preventDefault();
    this.sound2.play();
    let count = this.state.votes + 1;
    this.setState({
      votes: count
    })
  }

  voteDown = (e) => {
    e.preventDefault();
    this.sound3.play();
    if (this.state.votes === 0) {
      let count = this.state.votes - 0;
      this.setState({
        votes: count
      })
    } else {
      let count = this.state.votes - 1;
      this.setState({
        votes: count
      })
    }
  }


  nextPage = async (e) => {
    e.preventDefault();
    let next = this.state.currPage + 1;
    let pages = await CharPage(next);
    this.setState({
      currPage: next,
      charNames: pages,
      apiCharLoaded: true
    })
    console.log(this.state.currPage)
  }

  previousPage = async (e) => {
    e.preventDefault();
    let previous = this.state.currPage - 1;
    const pages = await CharPage(previous);
    this.setState({
      currPage: previous,
      charNames: pages,
      apiCharLoaded: true
    })
    console.log(this.state.currPage)
  }

  onSoundClick = (e) => {
    e.preventDefault();
    this.sound.play();
  }

  onSoundClick2 = () => {
    // e.preventDefault();
    this.sound2.play();
    console.log('popo')
  }

  clickForChars = async (e) => {
    e.preventDefault();
    const getChars = await CharPage();
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
          <Route path="/CharList" render={() => <CharList apiCharLoaded={this.apiCharLoaded} nextPage={this.nextPage} previousPage={this.previousPage} charNames={this.state.charNames} />}></Route>
          <Route path="/SingleChar" render={() => <SingleChar onSoundClick2={this.onSoundClick2} votes={this.state.votes} voteUp={this.voteUp} voteDown={this.voteDown} value={this.state.charSearch} onCharSubmit={this.onCharSubmit} apiImgLoaded={this.state.apiImgLoaded} onCharClick={this.onCharClick} charSearch={this.charSearch} charImg={this.state.charImg} />}></Route>
        </main>
        <Footer onSoundClick={this.onSoundClick} />
      </div>
    );
  }
}

export default App;
