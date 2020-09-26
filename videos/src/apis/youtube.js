
import axios from 'axios'; 




const KEY = 'AIzaSyCQo7Ch6qYhvAPFYRxGeehphEcG6aLpS8s'; 



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        maxResults: 5, 
        key: KEY, 
    }
});


