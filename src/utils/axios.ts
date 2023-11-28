import axios from "axios"

const customaxios = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    withCredentials: true
});

export default customaxios