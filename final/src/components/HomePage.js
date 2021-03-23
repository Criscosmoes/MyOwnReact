import React from 'react'
import HomePageContent from './HomePageContent';

const HomePage = ({ trending, topRated, trendingToday }) => {
    return (
        <div>
            <HomePageContent movies={trendingToday} title={"Trending Today"} /> 
            <HomePageContent movies={trending} title={"Trending This Week"} /> 
            <HomePageContent movies={topRated} title={"Top Rated"} /> 
        </div>
    )
}

export default HomePage; 
