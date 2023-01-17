import React from 'react';

const RecipesSearch = ({recipesIn}) => {

  return (
    <>
      <input type='text' placeholder='Search by Recipe Name or Brew Device...'/>
        {recipesIn.map(rec => (
            <p>{rec.title}</p>
        ))}
    </>
  )
}

export default RecipesSearch;