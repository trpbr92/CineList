import axios from 'axios';
import { actionChannel, put, takeEvery } from 'redux-saga/effects';

function* fetchUserLists() {
    //get all films for the db
    try {
        const lists = yield axios.get('api/userlists');
        console.log('get all:', lists.data);
        yield put({type: 'SET_USER_LISTS', payload: lists.data});
    } catch {
        console.log('ERROR in get userlists');
    }
}

function* userListsSaga() {
    yield takeEvery ('FETCH_USER_LISTS', fetchUserLists);
}

export default userListsSaga;