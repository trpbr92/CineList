import axios from 'axios';
import { actionChannel, put, takeEvery } from 'redux-saga/effects';

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

function* seenSaga() {
    yield takeEvery ('FETCH_SEEN', fetchSeenList);
}

export default seenSaga;