import React, { Component } from 'react';
// import './App.css';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    console.log(this.state);
    return (
      <div className="board">
        This is a board
      </div>
    );
  }
}

export default Board;
