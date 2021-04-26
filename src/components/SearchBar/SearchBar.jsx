import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
      console.log(event.target.value);
    }
  
    const searchFilms = (searchQuery) => {
      dispatch({type: 'FETCH_SEARCH_SAGA', payload: searchQuery})
      setSearchQuery('');
      history.push('/results');
    }
 
  return (
    <div className="container">
      <input type="text" value={searchQuery} placeholder="Search Films!"onChange={handleChange}/>
      <button onClick={() => searchFilms(searchQuery)}>Search</button>
    </div>      

  );
}

export default SearchBar;
