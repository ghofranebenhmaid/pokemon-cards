import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='form'>
      <input
        className='form__input'
        data-testid='searchInput'
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
export default Search;
