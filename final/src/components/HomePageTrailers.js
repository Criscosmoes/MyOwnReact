import React from 'react'
import styled from 'styled-components'


import { connect } from 'react-redux'; 


const StyledHomePageTrailers = styled.div`

& {
    display: flex; 
    height: 50vh; 
    overflow-x: auto; 
}

.background {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    min-width: 95%; 
    margin: 1%;
    background-size: cover; 
    background-position: center;
    opacity: .8
}


.trailer {
    margin: 2%; 
    background: lightgray; 
    background: rgb(204, 204, 204); 
    background: rgba(204, 204, 204, 0.7);
    
}

`

const HomePageTrailers = ({trending, trailers}) => {

    const renderedList = trending.map((cur, index)=> {
        return (
            <div key={cur.id} className="background" style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original${cur.backdrop_path}`})`}}>
                <div className="trailer">
                    <iframe allowFullScreen title={cur.title} src={`https://www.youtube.com/embed/${trailers[0]}`} /> 
                </div>
            </div>
        )
    })


    return (
        <StyledHomePageTrailers>
            {renderedList}
        </StyledHomePageTrailers>
    )
}

const mapStateToProps = state => {


    return {
        trending: state.movies.trending, 
        trailers: state.information.trailers, 
    }
}

export default connect(mapStateToProps)(HomePageTrailers)
