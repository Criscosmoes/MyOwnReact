
import moviesDB from '../apis/moviesDB'; 


export const fetchMovies = (name, endpoint) => async dispatch => {


    name = name === 'top rated' ? 'topRated' : 'trending'; 


    const KEY = '2d241abde6516d29ca9254c83e3cfc34'

    const response = await moviesDB.get(endpoint, {
        params: {
            api_key: KEY,  
        }
    }); 


    dispatch({type: "FETCH_MOVIES", payload: {
        name: name, 
        arr: response.data.results, 
    }})
     
}


/* export const fetchTrending = () => async dispatch => {

    const KEY = '2d241abde6516d29ca9254c83e3cfc34'; 

    const response = await moviesDB.get('/week', {
        params: {
            api_key: KEY, 
        }
    }); 

    dispatch({type: "FETCH_TRENDING", payload: response.data.results})

} */






export const switchOpen = () => {

    return {
        type: "SWITCH_OPEN", 
    }

}



export const switchSearch = () => {

    return {
        type: "SEARCH_OPEN", 
    }
}