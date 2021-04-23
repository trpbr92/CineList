import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function SearchPage() {
  return (

    <div className="container">
      <input type="text" placeholder="Search Films!"/><button>Search</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default SearchPage;
