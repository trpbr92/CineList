import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* fetchSearch(action){
    try{
        console.log('in search SAGA', action.payload);
        const search = yield axios.get('/api/search/' + action.payload);
        console.log('search data:', search.data);
        yield put({type: 'FETCH_SEARCH', payload: search.data});
    } catch {
        console.log('ERROR in search SAGA');
    }
}

function* searchSaga(){
    yield takeLatest('FETCH_SEARCH_SAGA', fetchSearch);
}

export default searchSaga;