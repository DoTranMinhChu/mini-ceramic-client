import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://server-mini-ceramic.herokuapp.com',
    "Content-Type": "application/json"
});

export default axiosConfig