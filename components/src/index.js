import React from 'react'; 
import ReactDOM from 'react-dom'; 
import CommentDetail from './CommentDetail'; 


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail name="Cristian" comment="What's up!" time="6:56PM" />
            <CommentDetail name="Cynthia" comment="Hello!" time="4:45PM" />
            <CommentDetail name="Sam" comment="Have a nice day!" time="3:21PM"/>
            <CommentDetail name="Robert" comment="Hi World!" time="10:51PM" />
        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root')); 