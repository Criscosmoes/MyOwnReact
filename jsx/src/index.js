// Import the React and ReactDOM libraries
import React from 'react'; 
import ReactDOM from 'react-dom'; 


// Create a react component
const App = () => {


    return (

    <div style={{backgroundColor: 'red', color: 'white'}}>
        Hi There!
    </div>

    ) 
}; 

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));