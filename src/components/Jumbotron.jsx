import React from 'react';
import Title from './Title.jsx';
import Search from './Search.jsx';

function Jumbotron({ handleSubmit, handleChange }) {
  return (
    <div id="jumbotron">
      <Title/>
      <Search handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  )
}

export default Jumbotron;