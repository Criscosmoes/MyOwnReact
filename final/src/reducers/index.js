const initialState = {
    movies: [], 
    searchTerm: '', 
    isOpen: false, 
}



export default (state = initialState, action) => {


    switch(action.type) {
        case "FETCH_MOVIES": 

            return {
                ...state, 
                movies: [action.payload]
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
        default: 
            return state; 
    }
}