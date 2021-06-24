import React from 'react';

const SingleCocktail = (props) => {
  return <div>Single COCKTAIL с ID {props.match.params.id}</div>;
};

export default SingleCocktail;
