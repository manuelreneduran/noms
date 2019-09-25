import React from 'react';

function Item({ business, setActiveBusiness }) {
  var keyCount = 0;
  var address = `${business.location.address1} ${business.location.city} ${business.location.zip_code}`;
  var categories = business.categories.map(ele => { return <p key={keyCount++}>{ele.title}</p>})
  return (
    <div onClick={e => setActiveBusiness(business.name)} id="item-wrapper">
      <div>
        <img id="item-image" src={business.image_url}></img>
      </div>
      <div id="item-info">
        <div id="item-name-container"><p id="item-name">{business.name}</p></div>
        <div id="item-rating-container"><p id="item-rating">{business.rating}</p></div>
        <div id="item-categories-container">{categories}</div>
        <div id="item-address-container"><p id="item-address">{address}</p></div>

      </div>
    </div>
  )
}

export default Item;