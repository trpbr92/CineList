import {React, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value);
  }

  const searchFilms = (searchQuery) => {
    dispatch({type: 'FETCH_FILMS', payload: searchQuery})
    history.push('/results');
  }

  return (

    <div className="container">
      <input type="text" value={searchQuery} placeholder="Search Films!"onChange={handleChange}/>
      <button onClick={() => searchFilms(searchQuery)}>Search</button>
    </div>
      
  );
}

// this allows us to use <App /> in index.js
export default SearchPage;
