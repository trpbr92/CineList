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

  const searchFilms = (event) => {
    history.push('/info');
  }

  return (

    <div className="container">
      <input type="text" placeholder="Search Films!"onChange={handleChange}/><button onClick={searchFilms}>Search</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default SearchPage;
