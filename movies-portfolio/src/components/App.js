import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MovieInfo from "./MovieInfo";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import ShowVideo from "./ShowVideo";
import MyList from "./MyList";
import ClearList from "./ClearList";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("The Movie Information");
  const [term, setTerm] = useState("");

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [myList, setMyList] = useState([]);

  const KEY = "2d241abde6516d29ca9254c83e3cfc34";

  useEffect(() => {
    const arr = ["top_rated", "popular", "upcoming"];

    for (let i = 0; i < 3; i++) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${arr[i]}`, {
          params: {
            api_key: KEY,
          },
        })
        .then((res) => {
          if (i === 0) {
            setTopRated(res.data.results);
          } else if (i === 1) {
            setPopular(res.data.results);
          } else if (i === 2) {
            setUpcoming(res.data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: KEY,
          query: "Avengers",
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
  }, []);

  const buttonClick = () => {
    setTitle("The Movie Information");
    setDescription("");
  };

  const onImageClick = (e) => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search/`, {
        params: {
          q: `${e.target.name} trailer`,
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyB_X4ltuzH_OIU2QqHv3IsOXDbr-FWn8Do",
        },
      })
      .then((res) => {
        setCurrentVideo([res.data.items[0]]);
        setVideos(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });

    setTerm("");
    setDescription("");
  };

  const onVideoSelect = (video) => {
    setCurrentVideo([video]);
  };

  return (
    <div>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact>
            <NavBar buttonClick={buttonClick} />
            <SearchBar term={term} setTerm={setTerm} setMovies={setMovies} />
            <MovieInfo
              movies={movies}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              onImageClick={onImageClick}
              setMyList={setMyList}
              myList={myList}
            />
            <Footer />
          </Route>

          <Route path="/movie/:id">
            <NavBar buttonClick={buttonClick} />
            <ShowVideo
              videos={videos}
              currentVideo={currentVideo}
              onVideoSelect={onVideoSelect}
            />
          </Route>

          <Route path="/top-rated" exact>
            <NavBar buttonClick={buttonClick} />
            <MovieInfo
              movies={topRated}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              onImageClick={onImageClick}
              setMyList={setMyList}
              myList={myList}
            />
            <Footer />
          </Route>

          <Route path="/popular" exact>
            <NavBar buttonClick={buttonClick} />
            <MovieInfo
              movies={popular}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              onImageClick={onImageClick}
              setMyList={setMyList}
              myList={myList}
            />
            <Footer />
          </Route>

          <Route path="/upcoming" exact>
            <NavBar buttonClick={buttonClick} />
            <MovieInfo
              movies={upcoming}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              onImageClick={onImageClick}
              setMyList={setMyList}
              myList={myList}
            />
            <Footer />
          </Route>

          <Route path="/mylist" exact>
            <NavBar buttonClick={buttonClick} />
            <ClearList setMyList={setMyList} />
            <MyList myList={myList} setMyList={setMyList} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
