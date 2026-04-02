import axios from 'axios';

const API_URL = axios.create({
    baseURL: 'https://login-ilde.onrender.com//api/auth',
})

export const register=async(formData)=>{
    try {
        const response = await API_URL.post('/register', formData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }       
}

export const login = (formData) => API_URL.post('/login', formData);
