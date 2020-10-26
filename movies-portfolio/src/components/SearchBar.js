import React from "react";
import styled from "styled-components";
import axios from "axios";

const StyledSearchBar = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f2833;
  }

  form {
    margin: 2%;
    width: 30%;
  }

  .input {
    width: 100%;
  }

  i {
    color: darkblue;
  }
`;

const SearchBar = ({ term, setTerm, setMovies }) => {
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const container = document.querySelector(".movies-container");

    container.scrollTo(0, 0);

    const KEY = "2d241abde6516d29ca9254c83e3cfc34";

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: KEY,
          query: term,
        },
      })
      .then((res) => {
        const movies = res.data.results;

        const filteredMovies = movies.filter((cur) => cur.poster_path !== null);

        setMovies(filteredMovies);
      })
      .catch((err) => {
        console.log(err);
      });

    setTerm("");
  };

  return (
    <StyledSearchBar>
      <form onSubmit={onFormSubmit}>
        <div className="ui category search">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              value={term}
              onChange={onInputChange}
              placeholder="Search over 1,000 movies..."
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
