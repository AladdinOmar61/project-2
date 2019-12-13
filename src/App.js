import React, { Component } from 'react';
import './App.css';
import CallApi from './components/CallApi';
import CharList from './components/CharList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charNames:[]
    }
  }

  clickForChars = async (e) => {
    e.preventDefault();
    const getChars = await CallApi();
    this.setState({
      charNames: getChars
    })
  }
  

  render() {
    return (
      <div className="App">
        <h1>Ricpic and Morty-Schmorty</h1>
        <h2>Why the hell are you here?</h2>
        <CharList charNames={this.state.charNames} onClick={this.clickForChars}/>
      </div>
    );
  }
}

export default App;
