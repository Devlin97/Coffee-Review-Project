import React from 'react';

const RecipesSearch = ({recipesIn}) => {

  return (
    <>
        {recipesIn.map(rec => (
            <p>{rec.title}</p>
        ))}
    </>
  )
}

export default RecipesSearch;