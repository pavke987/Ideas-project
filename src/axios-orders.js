import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ideas-6c420.firebaseio.com/'
});

export default instance;