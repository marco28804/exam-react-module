import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [value, setNewValue] = useState('');

  const handleSearch = () => {
    onSearch(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setNewValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default SearchBar;
