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

function* profileSaga() {
    yield takeEvery ('FETCH_PROFILE', fetchProfile);
}

export default profileSaga;