import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function SearchResults() {

  const dispatch = useDispatch();
  const films = useSelector((store) => store.films);

  useEffect(() => {
    dispatch({type: 'FETCH_FILMS'});
  }, []);


  return (
 <main>
    <h1>Films</h1>
    <section className="films">
      {films.map(film => {
        return (
          <div key={film.id}>
            <h3>{film.title}</h3>
            <img src={film.poster_url} alt={film.title}/>
          </div>
        )
      })}
    </section>
 </main>
  );
}

export default SearchResults;
