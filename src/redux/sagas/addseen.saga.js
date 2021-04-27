import axios from 'axios';
import { actionChannel, put, takeEvery } from 'redux-saga/effects';

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

function* addSeenSaga() {
    yield takeEvery ('SEEN_TRUE', addToSeenList);
}

export default addSeenSaga;