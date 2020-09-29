import React from 'react'; 
import './ShowItems.css'; 


const ShowItems = (props) => {

    const obj = props.movies; 

    const baseURL = 'https://image.tmdb.org/t/p/w300';

    const clean = props.movies.filter(cur => cur.poster_path !== null); 


    const addParagraph = (event) => {
        
        const info = event.target.alt; 

        const title = event.target.title; 


        props.onHover(info, title); 

    }

    const deleteParagraph = (event) => {
        

        props.leaveHover(); 
    }

    
 

    



    const images = clean.map((cur, index) => {
        return  (
            <div  className="card" key={cur.id}>
                <img onMouseOver={addParagraph} onMouseLeave={deleteParagraph} src={baseURL + cur.poster_path}  alt={cur.overview} title={cur.title} className="images"/>
                <h2 className="title" >{cur.title}</h2>
                <div className="votes" >Rating: {cur.vote_average}</div>
            </div>
            
        ) 
    })




   

    return (
        <div className="big-container">
            <div className="info">
                <div className="movie-title">{props.title}</div>
                <div className="paragraph">{props.info}</div>
            </div>
            <div className="movie-container">
                {images}
            </div>
        </div>
    )
}



export default ShowItems; 
