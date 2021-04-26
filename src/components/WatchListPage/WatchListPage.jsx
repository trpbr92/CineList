import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';


function WatchListPage(){
const dispatch = useDispatch();
const history = useHistory();
const lists = useSelector(store => store.userlists);

    useEffect(() => {
        dispatch({type: 'FETCH_USER_LISTS'});
      }, []);

    //   const filmProfile = (id) => {
    //       console.log('watchListPage to filmProfile');
    //       history.push(`/profile/${id}`);
    //   }

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
           <p><button>Add To Seen</button> <button>Delete</button></p>
           
          </div>
        )
      })}
    </section>
    </main>
                
                   
        </>
    )
}

export default WatchListPage;