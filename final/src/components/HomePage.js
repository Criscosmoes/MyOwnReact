import React from 'react'
import HomePageHeader from './HomePageHeader';
import HomePageContent from './HomePageContent';

const HomePage = ({ trending, topRated }) => {
    return (
        <div>
            <HomePageHeader />
            <HomePageContent movies={trending} title={"Trending This Week"} /> 
            <HomePageContent movies={topRated} title={"Top Rated"} /> 
        </div>
    )
}

export default HomePage; 
