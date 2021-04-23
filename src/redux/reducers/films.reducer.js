// const filmsReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_FILMS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

const filmsReducer = (state = [], action) => {
    if (action.type ==="SET_FILMS"){
        return action.payload;
    }
    else{
        return state;
    }
}

export default filmsReducer;