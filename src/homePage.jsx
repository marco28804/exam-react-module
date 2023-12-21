import { useEffect, useState } from "react";
import PersonCard from "./personCard";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const [popularPersons, setPopularPersons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
      .then(response => response.json())
      .then(obj => setPopularPersons(obj.results)) // Accedi direttamente a obj.results
      .catch(err => setError("Errore nel caricamento dei dati. Riprova più tardi."));
  }, []);

  console.log(popularPersons);

  return (
    <div>
      {error && <div>{error}</div>}
      {!error && popularPersons && popularPersons.length === 0 && <div>Loading...</div>}
      {!error && popularPersons && popularPersons.length !== 0 && (
        <div className="popularPersonList">
          <ul>
            {popularPersons.map((person,i) => (
              <PersonCard
              name={person.name}
              imagePath={person.profile_path}
              occupation={person.known_for_department}
                key={person.id}
                sex={person.gender==1 ? ' female' : ' male'}
                popularity={` ${person.popularity}`}
                works={person.known_for_department}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
