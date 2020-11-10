
import moviesDB from '../apis/moviesDB'; 


export const fetchMovies = (name, endpoint, query) => async dispatch => {


    dispatch({type: "CHANGE_LOADING", payload: true})

    name = name === 'top rated' ? 'topRated' : name ; 


    const KEY = '2d241abde6516d29ca9254c83e3cfc34'

    if(query === undefined){
        const response = await moviesDB.get(endpoint, {
            params: {
                api_key: KEY,  
            }
        }); 


       
        dispatch({type: "FETCH_MOVIES", payload: {
            name: name, 
            arr: response.data.results, 
            isLoading: false, 

        }})
    
    }
    else if(query !== undefined){
        const response = await moviesDB.get(endpoint, {
            params: {
                api_key: KEY,  
                query: query, 
            }
        }); 

    

       setTimeout(function() {
            dispatch({type: "FETCH_MOVIES", payload: {
                name: name, 
                arr: response.data.results,
                isLoading: false, 
            }})
       }, 1000)
    }

    window.scrollTo(0,0);

     
}


export const fetchTrailers = (id) => async dispatch =>  {


    const KEY = '2d241abde6516d29ca9254c83e3cfc34'
    

    try {
        const response = await moviesDB.get(`movie/${id}/videos`, {
            params: {
                api_key: KEY, 
            }
        }); 


        const cast = await moviesDB.get(`movie/${id}/credits`, {
            params: {
                api_key: KEY
            }
        })

        if(response.data.results.length === 0){
            
        }

        dispatch({
            type: "FETCH_TRAILERS", 
            payload: {
                trailers: response.data.results, 
                cast: cast.data.cast, 
                id: id, 
            }
        })

    } catch (error) {
        console.log('failed'); 
    }



   /*  if(response.data.results.length === 0 || response.data === undefined){
        console.log("no trailers"); 
    } */

  



   
}

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


export const flipCard = (e) => {

    e.target.parentNode.classList.toggle('is-flipped'); 
    e.target.parentNode.parentNode.classList.toggle('is-flipped'); 

    return {
        type: "FLIP_CARD", 
    }
}


export const onInputChange = e => {

    return {
        type: "INPUT_CHANGE", 
        payload: {
            name: e.target.name, 
            term: e.target.value, 
        }
    }

}


export const clearFields = () => {


    return {
        type: "CLEAR_FIELDS", 
    }
}