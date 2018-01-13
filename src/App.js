import React, { Component } from 'react';
import './App.css';
import CharComponent from './Components/CharComponent/CharComponent';
import ValidationComponent from './Components/ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    word: "",
    wordArr: [],
    wordLength: 0
  }
  wordDisplayHandler = (event) => {
    this.setState({ word: event.target.value })
    const wordArray = this.state.word.split('');
    this.setState({ wordArr: wordArray });
  }

  deleteLetterHandler = (index) => {
    const lettersAry = [...this.state.wordArr]; //ary copied!
    lettersAry.splice(index, 1);
    this.setState({ wordArr: lettersAry });
    const joinedBack = lettersAry.join('');
    this.setState({ word: joinedBack });
  }
  render() {
    const wordLength = this.state.word.length;
    const wordArray = this.state.word.split('');
    const letterComp = wordArray.map((letter, index) => {
      return (
        <CharComponent
          key={index + "a"}
          letter={letter}
          click={this.deleteLetterHandler.bind(this, index)} />
      )
    })
    
    return (
      <div className="App">
        <h1>word 2 letters</h1>
        <p>a react app (list conditionals assignment)</p>

        <input
          type="text"
          onChange={(event) => this.wordDisplayHandler(event)}
          value={this.state.word} />

        <p>{this.state.word} length is: {this.state.word.length}</p>
        <ValidationComponent
          wordLength={wordLength} />
        {letterComp}
      </div>
    );
  }
}

export default App;
