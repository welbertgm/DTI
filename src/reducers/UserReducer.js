

export const initialState = {
    movie: {
        "Title": "",
        "Year": "",
        "imdbID": "",
        "Type": "",
        "Poster": ""
    },
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setMovie':
            return { ...state, movie: action.payload.movie };
        default:
            return state;
    }
}