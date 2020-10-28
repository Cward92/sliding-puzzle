import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Components/Tile.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { value: 0, clickable: false, },
        { value: 1, clickable: false, },
        { value: 2, clickable: true, },
        { value: 3, clickable: false, },
        { value: 4, clickable: false, },
        { value: 5, clickable: false, },
        { value: 6, clickable: false, },
        { value: 7, clickable: true, },
        { value: 8, clickable: false, },
        { value: 9, clickable: false, },
        { value: 10, clickable: false, },
        { value: 11, clickable: false, },
        { value: 12, clickable: false, },
        { value: 13, clickable: false, },
        { value: 14, clickable: false, },
        { value: 15, clickable: false, },
      ],
      emptyIndex: 4,
    }

    this.winCondition = this.winCondition.bind(this);
    this.determineClickable = this.determineClickable.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.shuffleMe = this.shuffleMe.bind(this);
  }

  componentDidMount() {
    let emptyIndex = getRandomInt(16);
    this.setState({ emptyIndex: emptyIndex });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.emptyIndex !== prevState.emptyIndex){
      this.determineClickable();
    }
  }

  winCondition() {
    for (let i = 0; i < this.state.tiles.length; i++) {
      if (this.state.tiles[i].value !== i) {
        return false;
      }
    }
    console.log('you win');
  };


  determineClickable() {
    // make copy of state.tiles
    let emptyIndex = this.state.emptyIndex;
    let arr = this.state.tiles;
    // using a for-loop, determine if element in array is clickable or not
    for (let i = 0; i < this.state.tiles.length; i++) {
      if (i === emptyIndex + 4 ||
        i === emptyIndex - 4 ||
        (i === emptyIndex + 1 && (emptyIndex !== 3 && emptyIndex !== 7 && emptyIndex !== 11)) ||
        (i === emptyIndex - 1 && (emptyIndex !== 4 && emptyIndex !== 8 && emptyIndex !== 12))) {
        arr[i].clickable = true;
      } else {
        arr[i].clickable = false;
      }
    }

    this.setState({ tiles: arr }); // set state to new array with changed clickable properties
  }

  async shuffleMe() {
    let history = [];
    //for 100 moves
    for (let i = 0; i < 50; i++) {
      let clickable = [...this.state.tiles].filter(function (tile, index) {
        if (tile.clickable == true) {
          tile['index'] = index;
          return tile;
        }
      })
      let clickableIndex = clickable[getRandomInt(clickable.length)].index;
      while(history.includes(clickableIndex)){
        clickableIndex = clickable[getRandomInt(clickable.length)].index;
      }
      if(history.length > 2) {
        history.shift();
      }
      history.push(clickableIndex);
      
      console.log(history)
      console.log(i, clickableIndex, clickable, this.state.tiles);
      await this.handleClick(clickableIndex)
    }
  }

  handleClick(index) {
    //set copies of state.emptyIndex and state.tiles
    //swap elements of arr using clicked div id and emptyIndex (aka emptyIndex tile's current index location);
    let emptyIndex = this.state.emptyIndex;
    let arr = this.state.tiles;
    [arr[index], arr[emptyIndex]] = [arr[emptyIndex], arr[index]];
    this.setState({ emptyIndex: index, tiles: arr }); // set state of emptyIndex to new index tile and tiles to new array
    this.winCondition();
    // this.determineClickable(); //pass index as new emptyIndex value in 'determine clickable'
  }

  render() {
    return (
      <div className="container justify-content">
        <Tile
          tiles={this.state.tiles}
          handleClick={this.handleClick}
        />
        <button className="btn btn-secondary" onClick={this.shuffleMe}>Shuffle</button>
      </div>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default App;
