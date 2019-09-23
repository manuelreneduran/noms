import React from 'react';

function Header() {
  return (
    <header id="header">
      <form>
        <input type="search" id="category-search" name="categorySearch" placeholder="Category"></input>
        <input type="search" id="city-search" name="citySearch" placeholder="City"></input>
        <button>Search</button>
      </form>
    </header>
  )
}

export default Header;