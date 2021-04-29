import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';



function FilmProfile(){
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
      film = {
        userId: userId.id, 
        filmID: filmID 
      }
      dispatch({ type: 'ADD_TO_WATCHLIST', payload: film})

  }

  const toSeen = () => {
      alert ('added to Seen.');
  }

  const backToResults = () => {
      history.push('/results');
  }

    return(
        <>
        <div>
        <button onClick={backToResults}>Back to Results</button>
                <h1>
                    {profile.title}
                </h1>
                    <img height={300} width={200} src={profile.poster_url} alt={profile.title}/>
                    <p>{profile.description}</p>
                    <button onClick={()=>toWatchList(profile.id)}>Add to Watchlist</button>
                    <button onClick={toSeen}>Add to Seen</button>
        </div>
        </>
    )
}

export default FilmProfile;