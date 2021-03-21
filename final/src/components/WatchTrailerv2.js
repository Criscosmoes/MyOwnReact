import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

const StyledWatchTrailerv2 = styled.div`
  * {
    box-sizing: border-box;
  }

  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #1f2833;
    color: white;
    box-sizing: border-box;
  }

  .title {
    width: 100%;
    text-align: center;
    border: transparent;
  }

  h1 {
    margin: 5%;
    font-size: 2.5rem;
  }

  h2 {
    margin: 2%;
    text-align: center;
  }

  h3 {
    font-size: 2.3rem;
  }

  .trailer-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    height: 40vh;
    background-position: cover;
    background-size: cover;
  }

  iframe {
    border: 4px solid white;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    width: 90%;
    height: 70%;
  }

  .trailer-container > * {
    margin: 2%;
  }

  .overview {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  .overview > * {
    margin: 3.5%;
  }

  p {
    max-height: 20vh;
    overflow-x: auto;
    line-height: 1.4;
  }

  .cast {
    min-width: 40%;
    margin: 1.5%;
    text-align: center;
    max-height: 90%;
  }

  .cast-container {
    display: flex;
    overflow-y: hidden;
    width: 100%;
    height: 39vh;
  }

  img {
    min-height: 70%;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    border-radius: 5%;
  }

  .name {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    min-height: 27%;
    background: white;
    color: black;
    border-radius: 5%;
  }

  .failed {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .provider-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .provider-container > * {
    margin: 3%;
  }

  .providers {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .provider {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 15rem;
    height: 15rem;
  }
`;

const WatchTrailerv2 = ({ trailerId, currentMovie, cast, providers }) => {
  // add a backdrop image
  const style = {
    backgroundImage: `url(${`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`})`,
  };

  const title = !currentMovie.original_name
    ? currentMovie.original_title
    : currentMovie.original_name;
  const releaseDate = currentMovie.release_date
    ? `(${currentMovie.release_date.split("-")[0]})`
    : "";
  let type, filteredCast, renderedCast, providerImages, renderedProviderImages;

  if (cast) {
    type = currentMovie.media_type === "tv" ? "(Tv Show)" : "(Movie)";

    // some cast do not have pics of themselves, so we filter these out
    filteredCast = cast.filter((cur) => cur.profile_path !== null);

    // render the cast
    renderedCast = filteredCast.map((cur) => {
      return (
        <div className="cast" key={cur.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${cur.profile_path}`}
            alt={cur.name}
          />
          <div className="name">
            <h2>{cur.name}</h2>
            <h2>{cur.character}</h2>
          </div>
        </div>
      );
    });
  }

  /*   if (providers !== undefined) {
    if (providers.US !== undefined) {
      if (providers.US.flatrate !== undefined) {
        providerImages = providers.US.flatrate;

        renderedProviderImages = providerImages.map((cur) => {
          return (
            <div className="providers">
              <div className="provider">
                <img
                  className="provider-image"
                  src={`https://image.tmdb.org/t/p/original${cur.logo_path}`}
                  alt={cur.provider_name}
                />
                <h2 className="provider-name">{cur.provider_name}</h2>
              </div>
            </div>
          );
        });
      }
    }
  } */

  if (providers && providers.US && providers.US.flatrate) {
    providerImages = providers.US.flatrate;
    

    renderedProviderImages = providerImages.map((cur) => {
      return (
        <div className="providers">
          <div className="provider">
            <img
              className="provider-image"
              src={`https://image.tmdb.org/t/p/original${cur.logo_path}`}
              alt={cur.provider_name}
            />
            <h2 className="provider-name">{cur.provider_name}</h2>
          </div>
        </div>
      );
    });
  }

  return (
    <StyledWatchTrailerv2>
      <div className="title">
        <h1>
          {title} Official Trailer {releaseDate}
          {type}{" "}
        </h1>
      </div>
      <div className="trailer-container" style={style}>
        <iframe
          title={title}
          allowFullScreen
          src={`https://www.youtube.com/embed/${trailerId}`}
        />
      </div>
      <div className="overview">
        <h3>Overview:</h3>
        <p>{currentMovie.overview}</p>
      </div>
      <h3>Cast: </h3>
      <div className="cast-container">
        {cast === undefined ? (
          <div className="failed">
            <h2>No cast available! Try again later.</h2>
          </div>
        ) : (
          renderedCast
        )}
      </div>
      {providers  && providers.US && providers.US.flatrate ? (
        <div>
          {" "}
          <h3>Available On: </h3>
          <div className="provider-container">
            {renderedProviderImages ? renderedProviderImages : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </StyledWatchTrailerv2>
  );
};

const mapStateToProps = (state) => {
  return {
    trailerId: state.info.trailersId,
    currentMovie: state.info.currentMovie,
    cast: state.info.cast,
    providers: state.info.providers,
  };
};

export default connect(mapStateToProps)(WatchTrailerv2);

/* const providers = {
    AT: {
      link: 'hhtljs.com', 
      buy: [1, 2, 3, 4, 5, 6]
    },
    
    DE: {
      link: 'hhtljs.com', 
      buy: [1, 2, 3, 4, 5, 6]
    },
    
    NO: {
      link: 'hhtljs.com', 
      buy: [1, 2, 3, 4, 5, 6]
    },
    
    US: {
      link: 'hhtljs.com', 
      buy: [1, 2, 3, 4, 5, 6],
      flatrate: [{
        logo_path: 'flag found', 
      } ,6 ,7 ,8 ,8]
    },
    
    SE: {
      link: 'hhtljs.com', 
      buy: [1, 2, 3, 4, 5, 6]
    },
  }
  
  const ex = Object.values(providers); 
  
  
  
  const be = ex.filter(cur => cur.hasOwnProperty('flatrate') === true); 
  
  console.log(be) */

// continue expanding on providers ?
