import React from 'react';

function Tile(props) {
    const tiles = props.tiles.map((x, index) => {
        return (<div className="col-3 text-center border" onClick={x.clickable === true ? () => props.handleClick(index) : undefined}>
            {x.value}
        </div>
        );
    })
    return (
        <div className="row">
            {tiles}
        </div>)
}

export default Tile;