import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'; 

const StyledShowVideo = styled(motion.div)`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #282828;
  }

  h1 {
    text-align: center;
    font-size: 5rem;
    margin: 1%;
  }

  h2 {
    font-size: 2.4rem;
    text-align: center;
    max-width: 95%;
    margin-top: 4%;
    min-height: 8vh; 
    
  }
  .video-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 65%;
    cursor: pointer;
    color: white;
  }

  iframe {
    width: 100%;
    height: 62vh;
    border: 4px solid white;
    -moz-box-shadow: 10px 10px 50px black;
    -webkit-box-shadow: 10px 10px 50px black;
    box-shadow: 10px 10px 50px black;
  }

  .videos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1%;
  }

  .recommended {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 30%;
    color: white;

  }

  #rec {
    cursor: pointer;
  }

  .recommended img {
    border: 4px solid white;
    -moz-box-shadow: 10px 10px 50px black;
    -webkit-box-shadow: 10px 10px 50px black;
    box-shadow: 10px 10px 50px black;
    transition: transform 0.2s;
    object-fit: cover; 
  }

  .recommended img:hover {
    transform: scale(1.1);
  }

  #main-video {
    width: 35%;
  }
`;

const ShowVideo = ({ videos, currentVideo, onVideoSelect }) => {

  const titleShortener = (title) => {
  
  
    const temp = title.split(''); 
    
    
    for (let i = 0; i < temp.length; i++){
      
      if(temp[i] === '&'){
        temp.splice(i, 6)
      }
      
      if(i > 60){
        temp.splice(i, temp.length - i); 
      }
      
      
    }
    
    
    return temp.join('').length > 50 ? temp.join('') + '...' : temp.join(''); 
    
    
  }


  const mainTitle = (title) => {

    const temp = title.split(''); 
    
    
    for (let i = 0; i < temp.length; i++){
      
      if(temp[i] === '&'){
        temp.splice(i, 5)
      }
      
      if(i > 60){
        temp.splice(i, temp.length - i); 
      }
      
      
    }
    
    
    return temp.join('').length > 50 ? temp.join('') : temp.join(''); 

  }

  const selectedVideo = currentVideo.map((cur) => {
    return (
      <div className="video-container" key={cur.id.videoId}>
        <h1>{cur.snippet.title ? mainTitle(cur.snippet.title) : cur.snippet.title}</h1>
        <iframe title={cur.snippet.title} src={`https://www.youtube.com/embed/${cur.id.videoId}`} />
      </div>
    );
  });

  const recommendedVideos = videos.map((cur) => {
    return (
      <div className="recommended" key={cur.id.videoId} onClick={() => onVideoSelect(cur)}>
        <img id="rec" src={cur.snippet.thumbnails.medium.url} alt={cur.snippet.title} />
        <h2>
          {cur.snippet.title ? titleShortener(cur.snippet.title) : cur.snippet.title}
        </h2>
      </div>
    );
  });

  return (
    <StyledShowVideo exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{delay: .5}}
    >
      {selectedVideo}
    <motion.div exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{delay: 1.5}} className="videos">{recommendedVideos}</motion.div>
    </StyledShowVideo>
  );
};

export default ShowVideo;
