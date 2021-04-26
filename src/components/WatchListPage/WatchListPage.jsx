import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';


function WatchListPage(){
const dispatch = useDispatch();
const lists = useSelector(store => store.userlists);

    useEffect(() => {
        dispatch({type: 'FETCH_USER_LISTS'});
      }, []);

    return(

        <>
        <h1>WatchList</h1>
      
                    <h3>{JSON.stringify(lists)}</h3>
                
                   
        </>
    )
}

export default WatchListPage;