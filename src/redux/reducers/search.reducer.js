

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SEARCH':
            console.log('in search:', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default searchReducer;