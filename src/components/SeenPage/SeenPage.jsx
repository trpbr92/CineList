import react, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';


function SeenPage(){
const dispatch = useDispatch();
const history = useHistory();
const seen = useSelector(store => store.seen);
const [rating, setRating] = useState('');
    useEffect(() => {
        dispatch({type: 'FETCH_SEEN'});
      }, []);

      const filmProfile = (id) => {
          console.log('watchListPage to filmProfile');
          history.push(`/profile/${id}`);
      }

    const rateFilm = (event) => {
        setRating(event.target.value);
        console.log(event.target.value);
        alert('Rating submitted.');
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
                <select  onChange={rateFilm} id="rating">
                <option selected>Rating:</option>
                <option value= '1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            </p>
            <p>Your Rating: {seen.rating}/5</p>
           <p><button>Remove</button></p>
           
          </div>
        )
      })}
    </section>
    </main>
                
                   
        </>
    )
}

export default SeenPage;