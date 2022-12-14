import axios from 'axios'

const API_URL = axios.create({baseURL : "http://localhost:5000"})
API_URL.interceptors.request.use((req) => {
    if(localStorage.getItem('user'))
    {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
})
