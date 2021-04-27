import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';


function WatchListPage(){
const dispatch = useDispatch();
const history = useHistory();
const lists = useSelector(store => store.watchlist);

    useEffect(() => {
        dispatch({type: 'FETCH_USER_LISTS'});
      }, []);

    //   const filmProfile = (id) => {
    //       console.log('watchListPage to filmProfile');
    //       history.push(`/profile/${id}`);
    //   }


      const addToSeen = () => {
        console.log('in add to seen');
        alert('Added to Seen.');
      }

      const deleteFilm = (id) => {
        console.log('in deleteFilm', id);
        dispatch({type: 'DELETE_FILM', payload: id});
        dispatch({type: 'FETCH_USER_LISTS'});
      }



    return(

        <>
        <main>
        <h1>WatchList</h1>
      
                    {/* <h3>{JSON.stringify(lists)}</h3> */}
                        <section className="films">
      {lists.map(list => {
        return (
          <div key={list.id}>
            <h3>{list.title}</h3>
            <img height={300} width={200} src={list.poster_url} alt={list.title} onClick={()=>filmProfile(list.id)}/>
           <p><button onClick={addToSeen}>Add To Seen</button> <button onClick={()=>deleteFilm( list.id )}>Remove</button></p>
           
          </div>
        )
      })}
    </section>
    </main>
                
                   
        </>
    )
}

export default WatchListPage;