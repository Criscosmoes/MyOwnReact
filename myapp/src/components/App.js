import React from 'react'; 
import SearchBar from './SearchBar';
import ShowItems from './ShowItems';
import moviesDB from '../apis/moviesDB'; 




class App extends React.Component {


    state = { 
        info: '', 
        title: '', 
        response: [],
        buttonMovies: [],

    }


    componentDidMount(){
        this.onSearchSubmit('avengers')
    }

    onSearchSubmit = (term) =>{

        moviesDB.get('/search/movie', {
            params: {
                api_key: '2d241abde6516d29ca9254c83e3cfc34',
                query: term, 
            }
        })
        .then(response => {
            const results = response.data.results; 
            
         

            this.setState({response: results})
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    changeTitle = (info, title) => {
        this.setState({info: info}); 
        this.setState({title: title})
    }


    leaveHover = () => {
        this.setState({info: '', title: ''})
    }


    getButtonMovies = (word) => {


        moviesDB.get('/movie/' + word, {
            params: {
                api_key: '2d241abde6516d29ca9254c83e3cfc34',
            }
        })
        .then(response => {
            console.log(response.data.results)


            this.setState({response: response.data.results})
        })
        .catch(error => {
            console.log(error); 
        })
    }



    render() {
        return (
            <div>
                <div>
            
                <SearchBar onSubmit={this.onSearchSubmit} onClick={this.getButtonMovies}/>
                </div>
                <ShowItems onHover={this.changeTitle} leaveHover={this.leaveHover} movies={this.state.response} info={this.state.info} title={this.state.title}/>
        
            </div>
        )
    }
}




export default App; 




/* axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: '2d241abde6516d29ca9254c83e3cfc34',
                query: 'avengers'
            }
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        }) */