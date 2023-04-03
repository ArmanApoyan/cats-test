import axios from "axios";

const baseURL = 'https://api.thecatapi.com/v1/'

const Axios = axios.create();

//default URL for all requests
Axios.defaults.baseURL = baseURL;

//timeout for all requests
Axios.defaults.timeout = 10000;


export default Axios;