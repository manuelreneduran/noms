import React from 'react';
import data from '../../exampleData.js';

function Item() {
  var business = data.businesses[0];
  var address = `${business.location.address1}, ${business.location.zip_code}, ${business.location.city}`;
  return (
    <div id="item-wrapper">
      <div>
        <img id="item-image" src={business.image_url}></img>
      </div>
      <div id="item-info">
        <ul>
          <li id="item-name">{business.name}</li>
          <li id="item-rating">{business.rating}</li>
          <li id="item-categories">{business.categories[0].title}</li>
          <li id="item-address">{address}</li>
        </ul>
      </div>
    </div>
  )
}

export default Item;