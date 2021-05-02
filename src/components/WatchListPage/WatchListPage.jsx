import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
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


function WatchListPage(){
const classes = useStyles();
const [open, setOpen] = react.useState(false);
const dispatch = useDispatch();
const history = useHistory();
const lists = useSelector(store => store.watchlist);
const [hideFilm, setHideFilm] = useState (false);

    useEffect(() => {
        dispatch({type: 'FETCH_USER_LISTS'});
      }, []);

      const addToSeen = (id) => {
        console.log('in add to seen');
        setOpen(true);
        dispatch({type: 'SEEN_TRUE', payload: id})
        setHideFilm(!hideFilm);
        console.log('hide film:', hideFilm);
      }

      const deleteFilm = (id) => {
        console.log('in deleteFilm', id);
        dispatch({type: 'DELETE_FILM', payload: id});
        dispatch({type: 'FETCH_USER_LISTS'});
      }

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return(
        <main>
        <h1>WatchList</h1>
      
                    {/* <h3>{JSON.stringify(lists)}</h3> */}
                        <section className="films">
      {lists.map(list => {
        return (
          <div key={list.id}>
            <h3>{list.title}</h3>
            <img height={300} width={200} src={list.poster_url} alt={list.title} onClick={()=>filmProfile(list.id)}/>
            <div><Button variant="contained" color="primary" className={classes.button} onClick={()=>addToSeen(list.id)}>Add To Seen</Button>
            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                    Added to Seen!
                   </Alert>
                  </Snackbar></div> 
           <div><Button variant="contained" color="secondary"  startIcon={<DeleteIcon />} onClick={()=>deleteFilm( list.id )}>Remove</Button>
           </div>
          </div>
        )
      })}
    </section>
    </main>
    )
}

export default WatchListPage;