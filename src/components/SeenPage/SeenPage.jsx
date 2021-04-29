import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';


function SeenPage(){
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
            <label for="rating">Rate Film:</label>
                <select onChange={(event)=>setRating(event.target.value)} id="rating">
                <option>Rating:</option>
                <option value= {1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button onClick={()=>rateFilm(seen.id)}>Rate</button>
            </p>
            <p>Your Rating: {seen.rating}/5</p>
           <p><button onClick={()=>removeFromSeen(seen.id)}>Remove</button></p>
           
          </div>
        )
      })}
    </section>
    </main>
                
                   
        </>
    )
}

export default SeenPage;