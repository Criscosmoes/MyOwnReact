import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MyList from "./MyList";
import { motion } from "framer-motion";

const StyledMovieInfo = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    background: #282828;
    color: white;
  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 4rem;
    width: 48%;
  }

  h2 {
    margin-bottom: 5%;
    width: 100%;
  }

  .movies-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 48%;
    height: 68vh;
    margin: 1%;
    overflow-y: auto;
  }

  .error {
    font-size: 4rem;
    color: red;
  }
  .movie {
    margin: 3%;
    text-align: center;
    cursor: pointer;
    border: 4px solid white;
    -moz-box-shadow: 10px 10px 50px black;
    -webkit-box-shadow: 10px 10px 50px black;
    box-shadow: 10px 10px 50px black;
    transition: transform 0.2s;
    max-width: 300px;
  }

  .movie:hover {
    transform: scale(1.1);
  }

  .test {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .bottom {
    width: 40%;
  }

  button.bottom {
    width: 25%;
    margin-bottom: 5%;
    background: limegreen;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 1%;
  }

  button.bottom:hover {
    background: black;
    color: white;
  }
`;

const MovieInfo = ({
  movies,
  title,
  setTitle,
  description,
  setDescription,
  onImageClick,
  setMyList,
  myList,
}) => {
  const onMouseOver = (e) => {
    setTitle(e.target.name);
    setDescription(e.target.alt);
  };

  const onMouseLeave = (e) => {
    setTitle("The Movie Information");
    setDescription("");
  };

  const onButtonClick = (e) => {
    console.log(e.target.name);

    const item = e.target.name.split(" 3 ");

    const obj = {
      name: item[0],
      url: item[1],
    };

    // check if movie has alread been added
    let counter = false;

    if (myList.length === 0) {
      setMyList([...myList, obj]);
    } else {
      for (let i = 0; i < myList.length; i++) {
        if (obj.name === myList[i].name) {
          counter = true;
        }
      }

      counter === true ? console.log("true") : setMyList([...myList, obj]);
    }
  };


  const renderedList = movies.map((cur) => {
    return (
      <motion.div
        exit={{ opacity: .5 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{delay: .5}}
        className="movie"
        key={cur.id}
      >
        <Link to={`/movie/${cur.id}`} onClick={onImageClick}>
          <img
            alt={cur.overview}
            name={cur.title}
            src={`https://image.tmdb.org/t/p/w300/${cur.poster_path}`}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </Link>
        <h2 className="title">{cur.title}</h2>
        <div className="test">
          <h2 className="bottom">{`Rating: ${cur.vote_average} ${
            cur.vote_average > 8 ? "🔥" : ""
          }`}</h2>

          <button
            onClick={onButtonClick}
            form={`https://image.tmdb.org/t/p/w300/${cur.poster_path}`}
            name={`${cur.title} 3 https://image.tmdb.org/t/p/w300/${cur.poster_path} `}
            className="bottom"
          >
            ADD
          </button>
        </div>
      </motion.div>
    );
  });

  return (
    <StyledMovieInfo>
      <div className="description">
        <h2 className="main">{title}</h2>

        <p>{description}</p>
      </div>
      <div
        className={`movies-container ${
          renderedList.length === 0 ? "error" : ""
        }`}
      >
        {renderedList.length === 0
          ? "Movie not found, please try again 😔"
          : renderedList}
      </div>
    </StyledMovieInfo>
  );
};

export default MovieInfo;
