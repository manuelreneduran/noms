import React from 'react';

function Search({ handleSubmit, handleChange }) {
  return (
    <div id="search-wrapper">
      <form onSubmit={e => handleSubmit(e)} id="search-form">
        <input onChange={e => handleChange(e)} type="search" id="category-search" name="category" placeholder="What do you want to eat?"></input>
        {/* <input type="search" id="city-search" name="city" placeholder="City"></input> */}
        <button id="search-button"><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default Search;