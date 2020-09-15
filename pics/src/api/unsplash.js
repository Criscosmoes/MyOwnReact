import axios from 'axios'; 


export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID zAvt4Pgi7EC42tvOCnl9LOzflGl5qTvBqS25y6ur7fk'
    }
});



