import React, { useState } from 'react';

const Input = (props) => {
  const [searchWord, setsearchWord] = useState('');
  const [showAnotherButton] = useState('');
  const { showDiv } = props;
  return (
    <div>
      <input type="text" data-testid="searchBar" placeholder="search..." onChange={(e) => setsearchWord(e.target.value)} />
      {showAnotherButton && <button type="button" data-testid="button">Click Here</button>}
      <h1 data-testid="displaySearch">{searchWord}</h1>
      {showDiv && (
      <div data-testid="divWantToShow">
        Hey My Name is Felix
      </div>
      )}
    </div>
  );
};
export default Input;
