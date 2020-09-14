import React from 'react'; 
import ReactDOM from 'react-dom'; 
import CommentDetail from './CommentDetail'; 
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    name="Cristian"
                    comment="What's up!"
                    time="6:56PM" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    name="Cynthia" 
                    comment="Hello!"
                    time="4:45PM" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    name="Sam" 
                    comment="Have a nice day!" 
                    time="3:21PM"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    name="Robert" 
                    comment="Hi World!" 
                    time="10:51PM" 
                />
            </ApprovalCard>
            
        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root')); 