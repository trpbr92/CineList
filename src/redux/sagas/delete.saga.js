import axios from 'axios';
import { actionChannel, put, takeLatest } from 'redux-saga/effects';

function* deleteFilm (action){
    try{
        yield axios.delete('api/watchlist/' + action.payload);
        yield put({type: 'FETCH_USER_LISTS'});
    } catch (error) {
        console.log('request to DELETE failed', error);
    }
}

function* removeFromSeenList(action) {
    console.log('remove seen SAGA:', action.payload);
    try {
        yield axios.put('api/seen/' + action.payload);
        yield put({type: 'FETCH_SEEN'});
    } catch (error) {
        console.log('ERROR in get seen');
    }
}

function* deleteSaga(){
    yield takeLatest('DELETE_FILM', deleteFilm);
    yield takeLatest('SEEN_FALSE', removeFromSeenList);
}

export default deleteSaga;