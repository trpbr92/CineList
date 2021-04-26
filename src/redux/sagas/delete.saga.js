import axios from 'axios';
import { actionChannel, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* deleteFilm (action){
    try{
        yield axios.delete('api/watchlist/' + action.payload);
        yield put({type: 'FETCH_USER_LISTS'});
    } catch (error) {
        console.log('request to DELETE failed', error);
    }
}

function* deleteSaga(){
    yield takeEvery('DELETE_FILM', deleteFilm);
}

export default deleteSaga;