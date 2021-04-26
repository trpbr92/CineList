import axios from 'axios';
import { actionChannel, put, takeEvery } from 'redux-saga/effects';

function* fetchwatchlist() {
    //get all films for the db
    try {
        const lists = yield axios.get('api/watchlist');
        console.log('get all:', lists.data);
        yield put({type: 'SET_USER_LISTS', payload: lists.data});
    } catch {
        console.log('ERROR in get watchlist');
    }
}

function* watchlistSaga() {
    yield takeEvery ('FETCH_USER_LISTS', fetchwatchlist);
}

export default watchlistSaga;