import React, { Component } from 'react';
// import './App.css';

class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasMine: false,
    };
  }


  render() {
    console.log(this.state);
    return (
      <div className="cell">
        This cell has a mine equals {JSON.stringify(this.state.hasMine)}
      </div>
    );
  }
}

export default Cell;
