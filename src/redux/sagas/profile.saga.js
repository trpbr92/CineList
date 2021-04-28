import axios from 'axios';
import { actionChannel, put, takeEvery } from 'redux-saga/effects';

function* fetchProfile(action) {
    //get all films for the db
    try {
        const film = yield axios.get('api/films/' + action.payload);
        console.log('get all:', film.data);
        yield put({type: 'SET_PROFILE', payload: film.data[0]});
    } catch {
        console.log('ERROR in get all films');
    }
}

function* addToWatchlist(action) {
    try{
        yield axios.post('/api/films', action.payload);
        console.log('in addToWatchlist saga POST');
    } catch (error) {
        console.log('addToWatchlist saga POST ERROR', error);
    }
}

function* profileSaga() {
    yield takeEvery ('FETCH_PROFILE', fetchProfile);
    yield takeEvery ('ADD_TO_WATCHLIST', addToWatchlist);
}

export default profileSaga;