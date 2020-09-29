import React from 'react'; 
import './SearchBar.css'; 
 



class SearchBar extends React.Component {

    state = {
        term: ''
    }


    onInputChange = (event) => {
        this.setState({term: event.target.value}); 
 
    }

    onFormSubmit = (event) => {
        event.preventDefault(); 

        this.props.onSubmit(this.state.term)
    }  


    onButtonClick = (event) => {
        
        let a = event.target.textContent; 
        let word = ''; 

        if(a === 'Popular'){
            word = 'popular';
        }
        else if(a === 'Top Rated'){
            word = 'top_rated'; 
        }
        else if(a === 'Upcoming'){
            word = 'upcoming'; 
        }
        else if(a === 'Now Playing'){
            word = 'now_playing'; 
        }
        
        this.props.onClick(word)
    }



    render(){
        return (
            <div className="container">
                <div className="links">
                    <button onClick={this.onButtonClick}>Popular</button>
                    <button onClick={this.onButtonClick}>Top Rated</button>
                    <button onClick={this.onButtonClick}>Now Playing</button>
                    <button onClick={this.onButtonClick}>Upcoming</button>
                </div>
                <form onSubmit={this.onFormSubmit} className="form">
                    <div className="ui icon input">
                        <input className="prompt"
                        type="text"
                        placeholder="Search..."
                        onChange={this.onInputChange}
                           />
                        <i className="search icon"></i>
                    </div>
                </form>

            </div>
        )
    }

}



export default SearchBar; 