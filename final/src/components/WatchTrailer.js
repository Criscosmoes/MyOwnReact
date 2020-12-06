/* import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { motion } from "framer-motion";


const StyledWatchTrailer = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .trailer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  iframe {
    margin: 1%;
    width: 90%;
    height: 30vh;
    border: 4px solid white;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
  }

  .list {
    display: flex;
    overflow-x: auto;
    width: 100%;
    margin-top: 2%;
  }

  .cast {
    width: 50%;
    min-width: 50%;
    text-align: center;
    margin: 1%;
  }

  img {
    width: 150px;
    height: 150px;
  }

  .title {
      display: flex; 
      justify-content: center; 
      align-items: center; 
      background: #1f2833; 
      height: 11vh;
  }
  h1 {
    text-align: center;
    font-size: 3rem; 
    background: #1f2833;
    color: white;
  }

  .video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    background-position: center;
    background-size: cover;
    color: white;
    font-size: 3rem;
  }

  .rating {
    width: 100%; 
    background: #1f2833;  
    text-align: center; 
    height: 10vh; 
    color: white; 
    display: flex;
    justify-content: center; 
    align-items: center; 
  }
`;

const WatchTrailer = ({ trailers, cast, search, title, trending, topRated, youtubeID, movieTitle, backgroundImage}) => {
  const filteredList = cast.filter((cur) => cur.profile_path !== null);

  const castList = filteredList.map((cur) => {
    return (
      <div key={cur.id} className="cast">
        {<img src={`https://image.tmdb.org/t/p/w300/${cur.profile_path}`} />}
        <h2>
          {cur.name} as <br></br> {cur.character}
        </h2>
      </div>
    );
  });

  const allMovies = [...search, ...trending, ...topRated]; 

  const currentVideo = allMovies.filter((cur) => title === cur.id);

  const style = {
    backgroundImage:
      currentVideo.length === 0
        ? ""
        : `url(${`https://image.tmdb.org/t/p/original${backgroundImage}`})`,
  };


  return (
    <StyledWatchTrailer>
        <div className="title"><h1>{movieTitle.length === 0 ? '' : movieTitle} Trailer</h1></div>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <div className="trailer">
          {trailers.length === 0 ? (
            <div className="video-container" style={style}>
              <iframe allowFullScreen src={`https://www.youtube.com/embed/${youtubeID}`} alt="example" />
            </div>
          ) : (
            <div className="video-container" style={style}>
              <iframe
                allowFullScreen
                src={`https://www.youtube.com/embed/${trailers[0].key}`}
                alt={"example"}
              />
            </div>
          )}
        </div>
        <div className="rating">
          <div>
            Overview:  
            {currentVideo.length === 0 ? "" : " "+ currentVideo[0].vote_average}
          </div>
        </div>
        <h2>{castList.length === 0 ? '' : 'Cast:' }</h2>
        <div className="list">{castList}</div>
      </motion.div>
    </StyledWatchTrailer>
  );
};

const mapStateToProps = (state) => {
  return {
    trailers: state.information.trailers,
    cast: state.information.cast,
    title: state.title,
    search: state.movies.search,
    trending: state.movies.trending, 
    topRated: state.movies.topRated, 
    youtubeID: state.information.youtubeTrailersId, 
    movieTitle: state.information.movie.title, 
    backgroundImage: state.information.movie.backdrop_path, 


  };
};

export default connect(mapStateToProps)(WatchTrailer);
 */