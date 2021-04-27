const seenReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEEN':
            return action.payload;
        default:
            return state;
    }
}

 

export default seenReducer;