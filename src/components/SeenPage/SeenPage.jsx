import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './SeenPage.css';


const useStyles = makeStyles((theme) => ({
  deleteButton: {
      selectEmpty: {
    marginTop: theme.spacing(1),
  },
  },
  formControl: {
    minWidth: 75,
  },
  button: {
    margin: theme.spacing(2),

  },
}));

function SeenPage(){
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const seen = useSelector(store => store.seen);
    useEffect(() => {
        dispatch({type: 'FETCH_SEEN'});
      }, []);

      const [rating, setRating] = useState(0);
      console.log(seen);

      const filmProfile = (id) => {
          console.log('watchListPage to filmProfile');
          history.push(`/profile/${id}`);
      }

      const rateFilm = (id) => {
        console.log('in rateFilm');
        dispatch({type: 'ADD_RATING', payload: {rating, id} })
      }

      const removeFromSeen = (id) => {
      console.log('in remove from seen');
      dispatch({type: 'SEEN_FALSE', payload: id})
      }

    return(

        <>
        <main>
        <h1>Seen</h1>
      <section className="films">
      {seen.map(seen => {
        return (
          <div key={seen.id}>
            <h3>{seen.title}</h3>
            <img height={300} width={200} src={seen.poster_url} alt={seen.title} onClick={()=>filmProfile(seen.id)}/>
            <p>
            <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
                <Select labelId="rating" onChange={(event)=>setRating(event.target.value)} id="rating">
                <MenuItem value= {1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            </FormControl>
            <Button variant="contained" color="primary" size="small" className={classes.button} onClick={()=>rateFilm(seen.id)}>Rate</Button>
            <Button variant="contained" color="secondary"  className={classes.deleteButton} startIcon={<DeleteIcon />} onClick={()=>removeFromSeen(seen.id)}></Button>
            </p>
            <p>Your Rating: {seen.rating}/5</p>
           {/* <p><Button variant="contained" color="secondary" className={classes.deleteButton} startIcon={<DeleteIcon />} onClick={()=>removeFromSeen(seen.id)}>Remove</Button></p> */}
           
          </div>
        )
      })}
    </section>
    </main>
                
                   
        </>
    )
}

export default SeenPage;