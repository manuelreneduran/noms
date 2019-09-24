import React from 'react';

function Header(props) {
  return (
    <header id="header">
      <form onSubmit={e => props.handleChange(e)}>
        <input type="search" id="category-search" name="category" placeholder="Category"></input>
        {/* <input type="search" id="city-search" name="city" placeholder="City"></input> */}
        <button>Search</button>
      </form>
    </header>
  )
}

export default Header;