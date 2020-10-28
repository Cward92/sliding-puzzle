import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      tiles: [
        { position: 0, value: 'E', clickable: false, },
        { position: 1, value: '1', clickable: false, },
        { position: 2, value: '2', clickable: false, },
        { position: 3, value: '3', clickable: false, },
        { position: 4, value: '4', clickable: false, },
        { position: 5, value: '5', clickable: false, },
        { position: 6, value: '6', clickable: false, },
        { position: 7, value: '7', clickable: false, },
        { position: 8, value: '8', clickable: false, },
        { position: 9, value: '9', clickable: false, },
        { position: 10, value: '10', clickable: false, },
        { position: 11, value: '11', clickable: false, },
        { position: 12, value: '12', clickable: false, },
        { position: 13, value: '13', clickable: false, },
        { position: 14, value: '14', clickable: false, },
        { position: 15, value: '15', clickable: false, },
      ],
    }
    this.winCondition = [
      'E', '1', '2', '3',
      '4', '5', '6', '7',
      '8', '9', '10', '11',
      '12', '13', '14', '15'
    ];
  }

  findWithAttr(array, attr, value, target) {
    for(var i = 0; i < array.length; i += 1) {
        if(target) {
            return array[i][target];
        }
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
};


  makeTargeteable(array, target) {
    let posOfE = this.findWithAttr(this.state.tiles, 'value', 'E', 'position', target);
    let arr = [];
    (posOfE - 4 < 0) ? (posOfE - 1 < 0) ? arr.push((posOfE + 1), (posOfE + 4)) : arr.push((posOfE - 1), (posOfE + 1), (posOfE + 4)) : (posOfE + 4 > 15) ? (posOfE + 1 > 15) ? arr.push((posOfE - 3), (posOfE - 1)) : arr.push((posOfE - 4), (posOfE - 1), (posOfE + 1)) : arr.push((posOfE - 4), (posOfE - 1), (posOfE + 1), (posOfE + 4));
    return arr;
}

  render() {
    return (
      <div>
        {this.findTargeteable(this.state.tiles)}
      </div>
    );
  }
}

export default App;

