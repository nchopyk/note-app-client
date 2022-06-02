import axios from 'axios';
import { API_HOST } from '../config';


export const registration = (formData) => async (dispatch) => {
    const { username, email, password } = formData;

    try {
        const { data } = await axios.post(`${API_HOST}/api/auth/registration`, { username, email, password });

        console.log(data);
    } catch (e) {
        console.log(e);
    }
};

export const login = (formData) => async (dispatch) => {
    const { email, password } = formData;

    try {
        const { data } = await axios.post(`${API_HOST}/api/auth/login`, { email, password });

        console.log(data.user);
    } catch (e) {
        console.log(e);
    }
};

export const auth = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${API_HOST}/api/auth/auth`);

        console.log(data);
    } catch (e) {
        console.log(e);
    }
};

export const logout = () => async (dispatch) => {
    try {
        await axios.post(`${API_HOST}/api/auth/logout`);
    } catch (e) {
        console.log(e);
    }
};
