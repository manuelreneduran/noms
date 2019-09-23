import React from 'react';

function Item(props) {
  var address = `${props.business.location.address1}, ${props.business.location.zip_code}, ${props.business.location.city}`;
  return (
    <div id="item-wrapper">
      <div>
        <img id="item-image" src={props.business.image_url}></img>
      </div>
      <div id="item-info">
        <ul>
          <li id="item-name">{props.business.name}</li>
          <li id="item-rating">{props.business.rating}</li>
          <li id="item-categories">{props.business.categories[0].title}</li>
          <li id="item-address">{address}</li>
        </ul>
      </div>
    </div>
  )
}

export default Item;