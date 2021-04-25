import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function SearchResults() {

  const dispatch = useDispatch();
  const films = useSelector((store) => store.search);
  const history = useHistory();

  // useEffect(() => {
  //   dispatch({type: 'FETCH_FILMS'});
  // }, []);

  const filmProfile = (id) => {
    //dispatch({type: 'FETCH_PROFILE', payload: id});
    console.log('in filmProfile:', id);
    history.push(`/profile/${id}`);
  }

  return (
 <main>
    <h1>Search Results:</h1>
    <section className="films">
      {films.map(film => {
        return (
          <div key={film.id}>
            <h3>{film.title}</h3>
            <img height={300} width={200} src={film.poster_url} alt={film.title} onClick={()=>filmProfile(film.id)}/>
          </div>
        )
      })}
    </section>
 </main>
  );
}

export default SearchResults;
