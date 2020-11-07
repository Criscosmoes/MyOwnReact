import React from 'react'
import HomePageHeader from './HomePageHeader';
import HomePageContent from './HomePageContent';
import HomePageTrailers from './HomePageTrailers';

const HomePage = ({ trending, topRated }) => {
    return (
        <div>
            <HomePageHeader />
            <HomePageContent movies={trending} title={"Trending This Week"} /> 
            <HomePageContent movies={topRated} title={"Top Rated"} /> 
            <HomePageTrailers /> 
        </div>
    )
}

export default HomePage; 
