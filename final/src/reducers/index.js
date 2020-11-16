
const initialState = {
    movies: {
        trending: [], 
        topRated: [],
        popular: [], 
        now_playing: [], 
        upcoming: [], 
        search: [], 
    },

    information: {
        trailers: [], 
        cast: [], 
        youtubeTrailersId: '', 
        id: '', 
        movie: {
            title: '', 
            backdrop_path: '', 
        }
    }, 

    navSearchTerm: '', 
    searchTerm: '', 
    isOpen: false, 
    searchOpen: false, 
    isFlipped: false, 
    isLoading: true, 
}



export default (state = initialState, action) => {


    switch(action.type) {
        case "FETCH_MOVIES": 

            return {
                ...state, 
                movies: {
                    ...state.movies, 
                    [action.payload.name]: [...action.payload.arr]
                }, 
                isLoading: action.payload.isLoading, 
                searchOpen: false, 
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
                youtubeTrailersId: action.payload.youtubeTrailersId, 
                id: action.payload.id, 
                movie: {
                    ...state.information.movie, 
                    title: action.payload.title, 
                    backdrop_path: action.payload.backgroundImage,  
                }
             
            }, 

            searchOpen: false,
            title: action.payload.id,
        }
        case "INPUT_CHANGE": 

            return {
                ...state, 
                [action.payload.name]: action.payload.term, 
            }
        case "CLEAR_FIELDS": 

            return {
                ...state, 
                information: {
                    trailers: [], 
                    cast: [], 
                    movie: {
                        ...state.information.movie, 
                        title: '', 
                    }
                }, 
                navSearchTerm: '', 
                searchTerm: '', 
                

            }
        case "CHANGE_LOADING": 

            return {
                ...state, 
                isLoading: action.payload, 
            }
        default: 
            return state; 
    }
}