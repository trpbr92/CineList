import axios from 'axios';
import { actionChannel, put, takeEvery } from 'redux-saga/effects';

function* fetchAllFilms() {
    //get all films for the db
    try {
        const films = yield axios.get('api/films');
        console.log('get all:', films.data);
        yield put({type: 'SET_FILMS', payload: films.data});
    } catch {
        console.log('ERROR in get all films');
    }
}

function* filmsSaga() {
    yield takeEvery ('FETCH_FILMS', fetchAllFilms);
}

export default filmsSaga;