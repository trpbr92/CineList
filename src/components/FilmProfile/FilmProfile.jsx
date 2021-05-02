import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));


function FilmProfile(){
    const classes = useStyles();
    const [open, setOpen] = react.useState(false);
    const profile = useSelector((store) => {return store.profile});
    const userId = useSelector((store) => {return store.user});
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    let filmID = params.id;
    
  useEffect(() => {
    dispatch({type: 'FETCH_PROFILE', payload: Number(filmID)});
  }, []);

  const toWatchList = (film) => {
      setOpen(true);
      film = {
        userId: userId.id, 
        filmID: filmID 
      }
      dispatch({ type: 'ADD_TO_WATCHLIST', payload: film});   
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // const toSeen = () => {
  // }

  const backToResults = () => {
      history.push('/results');
      
  }

    return(
        <>
        <div>
                <h1>
                    {profile.title}
                </h1>
                    <img height={300} width={200} src={profile.poster_url} alt={profile.title}/>
                    <p>{profile.description}</p>
                    <div><Button variant="contained" color="primary" className={classes.button} onClick={()=>toWatchList(profile.id)}>Add to Watchlist</Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                    Added to Watchlist!
                   </Alert>
                  </Snackbar>
                    </div>
                    {/* <div><Button variant="contained" color="primary" onClick={toSeen}>Add to Seen</Button></div> */}
                    <div><Button variant="contained" color="primary" className={classes.button} onClick={backToResults}>Back</Button></div>
        </div>
        </>
    )
}

export default FilmProfile;