import React from 'react';

function Item({ business, setActiveBusiness }) {
  var keyCount = 0;
  var address = `${business.location.address1} ${business.location.city} ${business.location.zip_code}`;
  var categories = business.categories.map(ele => { return <p key={keyCount++}>{ele.title}</p>})
  var imageDivStyle = {
    backgroundImage: `url(${business.image_url})`
  };
  var phone = business.phone.slice(1);
  return (
    <div id="item-wrapper">
      <div id="item-image-container" style={imageDivStyle}>
        {/* <img id="item-image" src={business.image_url}></img> */}
      </div>
      <div id="item-info">
        <div id="item-container-top">
          <div id="item-name-container"><p id="item-name">{business.name}</p></div>
          <div id="item-rating-container"><p id="item-rating">{business.rating}</p></div>
        </div>

        <div id="item-categories-container">{categories}</div>
        <div id="item-address-container"><a className="link" onClick={e => setActiveBusiness(business.name,
          business.coordinates.latitude, business.coordinates.longitude)} href="#" id="item-address">{address}</a></div>
        <div id="item-phone-container"><p>{phone}</p></div>
        {business.is_closed ? <p id="isClosed">Closed</p> : <p id="isOpen">Open Now!</p>}

      </div>
    </div>
  )
}

export default Item;