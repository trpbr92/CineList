import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SearchBar() {
    const classes = useStyles();
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
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" value={searchQuery} label="Search for films!" onChange={handleChange}/>
      <Button variant="contained" color="primary" onClick={() => searchFilms(searchQuery)}>Search</Button>
    </form>      

  );
}

export default SearchBar;
