import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import PersonCard from './personCard';

const apiKey = import.meta.env.VITE_API_KEY;

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (value) => {
    fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${value}`)
      .then(response => response.json())
      .then(data => setSearchResults(data.results))
      .catch(error => setError('Errore nella ricerca. Riprova più tardi.'));
  };

  return (
    <div>
      <h1>Ricerca Personaggi</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p>{error}</p>}

      <div className="searchResults">
        <ul>
          {searchResults.map((person) => (
            <PersonCard
              name={person.name}
              occupation={person.known_for_department}
              sex={person.gender === 1 ? 'female' : 'male'}
              popularity={person.popularity}
              works={person.known_for_department}
              imagePath={person.profile_path}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
