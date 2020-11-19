import React, {useState} from 'react'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import './App.css'; 
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Movies from "../Pictures/movies.png";


const App = () => {

    const projs = [
        {
            title: 'Movies Information', 
            img_src: Movies,
            websiteURl: '', 
            githubURL: '',  
            madeWith: 'CSS, ReactJS'
        }, 

        {
            title: 'Movies Information', 
            img_src: Movies, 
            websiteURl: '', 
            githubURL: '', 
        }, 

        {
            title: 'Movies Information', 
            img_src: Movies, 
            websiteURl: '', 
            githubURL: '', 
        }, 

        {
            title: 'Movies Information', 
            img_src: Movies, 
            websiteURl: '', 
            githubURL: '', 
        }, 
    ]

    const [projects, setProjects] = useState(projs); 


    return (
        <div id="Home">
            <Header /> 
            <AboutMe /> 
            <Projects projects={projects} /> 
        </div>
    )
}

export default App; 