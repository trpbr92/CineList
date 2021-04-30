import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { makeStyles } from '@material-ui/core/styles';



function SearchResults() {

  const films = useSelector((store) => store.search);
  const history = useHistory();

  const filmProfile = (id) => {
    console.log('in filmProfile:', id);
    history.push(`/profile/${id}`);
  }

  return (
 <main>
   <SearchBar />
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
