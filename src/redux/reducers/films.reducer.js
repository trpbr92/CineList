const filmsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILMS':
            return action.payload;
        default:
            return state;
    }
}

 

export default filmsReducer;