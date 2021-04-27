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

function* fetchSeenList() {
    //get all films for the db
    try {
        const seen = yield axios.get('api/seen');
        console.log('get all:', seen.data);
        yield put({type: 'SET_SEEN', payload: seen.data});
    } catch {
        console.log('ERROR in get seen');
    }
}

function* addToSeenList(action) {
    //get all films for the db
    console.log('add seen SAGA:', action);
    try {
        yield axios.put('api/watchlist/' + action.payload);
        yield put({type: 'FETCH_SEEN'});
    } catch (error) {
        console.log('ERROR in get seen');
    }
}

function* watchlistSaga() {
    yield takeEvery ('FETCH_USER_LISTS', fetchwatchlist);
    yield takeEvery ('FETCH_SEEN', fetchSeenList);
    yield takeEvery ('SEEN_TRUE', addToSeenList);

}

export default watchlistSaga;