const initialState = {
    movies: {
        trending: [], 
        topRated: [], 
        search: [], 
    },

    information: {
        trailers: [], 
        cast: [], 
    },

    navSearchTerm: '', 
    searchTerm: '', 
    isOpen: false, 
    searchOpen: false, 
    isFlipped: false, 
}



export default (state = initialState, action) => {


    switch(action.type) {
        case "FETCH_MOVIES": 

            return {
                ...state, 
                movies: {
                    ...state.movies, 
                    [action.payload.name]: [...action.payload.arr]
                } 
            }
        case "ADD_TERM": 

            return {
                ...state, 
                searchTerm: action.payload, 
            }
        case "SWITCH_OPEN": 

            return {
                ...state, 
                isOpen: !state.isOpen, 
            }
        case "SEARCH_OPEN": 

            return {
                ...state, 
                searchOpen: !state.searchOpen, 
            }
        case "FLIP_CARD": 

            return {
                ...state, 
            }
        case "FETCH_TRAILERS": 

        return {
            ...state, 
            information: {
                ...state.information, 
                trailers: action.payload.trailers, 
                cast: action.payload.cast, 
            }
        }
        case "INPUT_CHANGE": 

            return {
                ...state, 
                [action.payload.name]: action.payload.term, 
            }
        case "CLEAR_FIELDS": 

            return {
                ...state, 
                navSearchTerm: '', 
                searchTerm: '', 
            }
        default: 
            return state; 
    }
}