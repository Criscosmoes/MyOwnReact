const initialState = {
    topRated: [], 
    trending: [], 
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
                [action.payload.name]: [...action.payload.arr], 
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
        default: 
            return state; 
    }
}