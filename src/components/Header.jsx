import React from 'react';
import Title from './Title.jsx';
import Search from './Search.jsx';

function Header({ handleSubmit, handleChange }) {
  return (
    <div id="header">
      <Title/>
      <Search handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  )
}

export default Header;