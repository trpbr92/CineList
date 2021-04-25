import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';



function FilmProfile(){
    const profile = useSelector((store) => {return store.profile});
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    let filmID = params.id;
    
  useEffect(() => {
    dispatch({type: 'FETCH_PROFILE', payload: Number(filmID)});
  }, []);

console.log('merp');
    return(
        <>
        <h1>Film Profile</h1>
        <div>
                <h4>
                    {profile.title}
                </h4>
                    <img height={300} width={200} src={profile.poster_url} alt={profile.title}/>
                    <p>{profile.description}</p>
             
        </div>
        </>
    )
}

export default FilmProfile;