import React from "react";
import styled from "styled-components";

import { connect, ReactReduxContext } from "react-redux";
import { motion } from 'framer-motion'; 

const StyledWatchTrailer = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1%;
  }

  .trailer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7%;
    width: 100%;
  }

  iframe {
    margin: 2%;
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

  h1 {
      text-align: center; 
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
`;

const WatchTrailer = ({ trailers, cast, search, title }) => {
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


  const currentVideo = search.filter(cur => title === cur.id); 


  const style = {
      backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${currentVideo[0].backdrop_path}`})`
  }

  return (
    <StyledWatchTrailer>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <div className="trailer">
          {trailers.length === 0 ? (
            <div>Try again!</div>
          ) : (
            <div className="video-container" style={style}>
                <h1>{`${currentVideo[0].title} Trailer`}</h1>
                <iframe
              allowFullScreen
              src={`https://www.youtube.com/embed/${trailers[0].key}`}
              alt={"example"}
            />
            </div>
          )}
        </div>

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
  };
};

export default connect(mapStateToProps)(WatchTrailer);
