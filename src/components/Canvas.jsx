import React from 'react';
import Item from './Item.jsx';
import data from '../../exampleData.js';


function Canvas() {
  var items = data.businesses.map(ele => {
    return <Item key={ele.id} business={ele}/>
  })
  return (
    <div id="canvas-wrapper">
      {items}
    </div>
  )
}

export default Canvas;