import React from 'react';

function Search({ handleSubmit, handleChange }) {
  return (
    <div id="search-wrapper">
      <form onSubmit={e => handleSubmit(e)} id="search-form">
        <div id="category-search-wrapper">
          <input onChange={e => handleChange(e)} type="search" id="category-search" name="category" placeholder="What are you hungry for?"></input>
        </div>
        <div id="location-search-wrapper">
          <input onChange={e => handleChange(e)} type="search" id="location-search" name="location" placeholder="City"></input>
        </div>
        <button id="search-button"><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default Search;