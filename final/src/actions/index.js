
import moviesDB from '../apis/moviesDB'; 


export const fetchMovies = () => async dispatch => {

    const KEY = '2d241abde6516d29ca9254c83e3cfc34'

    const response = await moviesDB.get('/movie', {
        params: {
            api_key: KEY, 
            query: 'avengers', 
        }
    }); 


    return {
        type: "FETCH_MOVIES", 
        payload: response.data.results, 
    }

     
}



export const switchOpen = () => {

    return {
        type: "SWITCH_OPEN", 
    }

}