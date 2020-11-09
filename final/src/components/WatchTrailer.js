import React from 'react'
import styled from 'styled-components'


import { connect } from 'react-redux'; 


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
    width: 100%; 
    height: 30vh; 
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



`

const WatchTrailer = ({trailers, cast}) => {


    const filteredList = cast.filter(cur => cur.profile_path !== null); 

    const castList = filteredList.map(cur => {
        return (
            <div className="cast">
                {<img src={`https://image.tmdb.org/t/p/w300/${cur.profile_path}`} />}
                <h2>{cur.name} as <br></br> {cur.character}</h2>
            </div> 
        )
    })


    return (
        <StyledWatchTrailer>
            <div className="container">
                <div className="trailer">{trailers.length === 0 ? <div>Try again!</div> : 
                <iframe allowFullScreen src={`https://www.youtube.com/embed/${trailers[0].key}`} />}</div> 

                <div className="list">
                    {castList}
                </div>
            
            </div>
        </StyledWatchTrailer>

    )
}

const mapStateToProps = state => {

    return {
        trailers: state.information.trailers, 
        cast: state.information.cast, 
    }
}

export default connect(mapStateToProps)(WatchTrailer)
