import React from 'react';
import Item from './Item.jsx';


function Canvas(props) {
  var items = props.data.map(ele => {
    return <Item key={ele.id} business={ele}/>
  })
  return (
    <div id="canvas-wrapper">
      {items}
    </div>
  )
}

export default Canvas;