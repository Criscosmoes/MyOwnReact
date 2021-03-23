import moviesDB from "../apis/moviesDB";
import youtube from "../apis/youtube";


export const fetchMovies = (name, endpoint, query) => async (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", payload: true });

  name = name === "top rated" ? "topRated" : name;

  if (query === undefined) {
    const response = await moviesDB.get(endpoint, {
      params: {
        api_key: '2d241abde6516d29ca9254c83e3cfc34',
      },
    });

    setTimeout(function () {
      dispatch(
        {
          type: "FETCH_MOVIES",
          payload: {
            name: name,
            arr: response.data.results,
            isLoading: false,
          },
        },
        1000
      );
    });
  } else if (query !== undefined) {
    const response = await moviesDB.get(endpoint, {
      params: {
        api_key: '2d241abde6516d29ca9254c83e3cfc34',
        query: query,
      },
    });

    setTimeout(function () {
      dispatch({
        type: "FETCH_MOVIES",
        payload: {
          name: name,
          arr: response.data.results,
          isLoading: false,
        },
      });
    }, 1000);
  }

  window.scrollTo(0, 0);
};

export const fetchTrailers = (id, obj) => async (dispatch) => {

  let title = "";

  if (obj.original_name === undefined) {
    title = obj.title;
  } else {
    title = obj.original_name;
  }

  try {
    const response = await moviesDB.get(`movie/${id}/videos`, {
      params: {
        api_key: '2d241abde6516d29ca9254c83e3cfc34',
      },
    });

    const cast = await moviesDB.get(`movie/${id}/credits`, {
      params: {
        api_key: '2d241abde6516d29ca9254c83e3cfc34',
      },
    });

    if (response.data.results.length === 0) {
      //make a youtube call

      const youtubeResponse = await youtube.get("search/", {
        params: {
          q: `${title} trailer`,
          part: "snippet",
          maxResults: 5,
          key: 'AIzaSyB_X4ltuzH_OIU2QqHv3IsOXDbr-FWn8Do',
        },
      });

      dispatch({
        type: "FETCH_TRAILERS",
        payload: {
          trailers: [],
          cast: cast.data.cast,
          youtubeTrailersId: youtubeResponse.data.items[0].id.videoId,
          title: title,
          backgroundImage: obj.backdrop_path,
          id: id,
        },
      });
    } else {
      dispatch({
        type: "FETCH_TRAILERS",
        payload: {
          trailers: response.data.results,
          cast: cast.data.cast,
          youtubeTrailers: [],
          title: title,
          backgroundImage: obj.backdrop_path,
          id: id,
        },
      });
    }
  } catch (error) {
    console.log(error);
    const youtubeResponse = await youtube.get("search/", {
      params: {
        q: `${title} trailer`,
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyB_X4ltuzH_OIU2QqHv3IsOXDbr-FWn8Do',
      },
    });

    dispatch({
      type: "FETCH_TRAILERS",
      payload: {
        trailers: [],
        cast: [],
        youtubeTrailersId: youtubeResponse.data.items[0].id.videoId,
        title: title,
        backgroundImage: obj.backdrop_path,
        id: id,
      },
    });
  }
};

export const switchOpen = () => {
  return {
    type: "SWITCH_OPEN",
  };
};

export const switchSearch = () => {
  return {
    type: "SEARCH_OPEN",
  };
};

export const flipCard = (e) => {
  e.target.parentNode.classList.toggle("is-flipped");
  e.target.parentNode.parentNode.classList.toggle("is-flipped");

  return {
    type: "FLIP_CARD",
  };
};

export const onInputChange = (e) => {
  return {
    type: "INPUT_CHANGE",
    payload: {
      name: e.target.name,
      term: e.target.value,
    },
  };
};

export const clearFields = () => {
  return {
    type: "CLEAR_FIELDS",
  };
};


export const exampleTrailers = (id, movie) => async (dispatch) => {
  try {
    // fectch trailers
    const trailers = await moviesDB.get(`/movie/${id}/videos`, {
      params: {
        api_key: '2d241abde6516d29ca9254c83e3cfc34',
      },
    });

    //fetch cast
    const cast = await moviesDB.get(`/movie/${id}/credits`, {
      params: {
        api_key: '2d241abde6516d29ca9254c83e3cfc34',
      },
    });


    if (trailers.data.results.length === 0) {
      //make youtube call also
      const youtubeResponse = await youtube.get("search/", {
        params: {
          q: `${movie.original_name || movie.original_title || movie.title} trailer`,
          part: "snippet",
          maxResults: 5,
          key: 'AIzaSyB_X4ltuzH_OIU2QqHv3IsOXDbr-FWn8Do',
        },
      });


      dispatch({
        type: "FETCH_TRAILER", 
        payload: {
          trailersId: youtubeResponse.data.items[0].id.videoId, 
          currentMovie: movie, 
          cast: cast.data.cast, 
        }
      })

    }


    dispatch({
      type: "FETCH_TRAILER", 
      payload: {
        trailersId: trailers.data.results[0].key, 
        currentMovie: movie, 
        cast: cast.data.cast,
      }
    })

  } catch (e) {
    //means that the movies db  call failed, so make call to youtube

    const youtubeResponse = await youtube.get("search/", {
      params: {
        q: `${movie.original_name || movie.original_title || movie.title} trailer`,
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyB_X4ltuzH_OIU2QqHv3IsOXDbr-FWn8Do',
      },
    });

    dispatch({
      type: "FETCH_TRAILER", 
      payload: {
        trailersId: youtubeResponse.data.items[0].id.videoId, 
        currentMovie: movie, 
      }
    })

  }

};
