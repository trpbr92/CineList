const userListsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_LISTS':
            return action.payload;
        default:
            return state;
    }
}

 

export default userListsReducer;