import React from 'react';

function Item(props) {
  var keyCount = 0;
  var address = `${props.business.location.address1} ${props.business.location.city} ${props.business.location.zip_code}`;
  var categories = props.business.categories.map(ele => { return <p key={keyCount++}>{ele.title}</p>})
  return (
    <div id="item-wrapper">
      <div>
        <img id="item-image" src={props.business.image_url}></img>
      </div>
      <div id="item-info">
        <div id="item-name-container"><p id="item-name">{props.business.name}</p></div>
        <div id="item-rating-container"><p id="item-rating">{props.business.rating}</p></div>
        <div id="item-categories-container">{categories}</div>
        <div id="item-address-container"><p id="item-address">{address}</p></div>

      </div>
    </div>
  )
}

export default Item;