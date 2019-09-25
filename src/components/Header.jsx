import React from 'react';

function Header({ handleSubmit, handleChange }) {
  return (
    <header id="header">
      <form onSubmit={e => handleSubmit(e)}>
        <input onChange={e => handleChange(e)} type="search" id="category-search" name="category" placeholder="Category"></input>
        {/* <input type="search" id="city-search" name="city" placeholder="City"></input> */}
        <button>Search</button>
      </form>
    </header>
  )
}

export default Header;