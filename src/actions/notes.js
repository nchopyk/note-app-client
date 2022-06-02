import axios from 'axios';
import { API_HOST } from '../config';


export const getTopics = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${API_HOST}/api/topics`);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
};

export const getTopicById = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${API_HOST}/api/topics/${id}`);

        console.log(data);
    } catch (e) {
        console.log(e);
    }
};


export const createTopic = (form) => async (dispatch) => {
    const { title, description, text } = form;

    try {
        const { data } = await axios.post('${API_HOST}/api/topics/', { title, description, text });

        console.log(data);
    } catch (e) {
        console.log(e);
    }
};


export const deleteTopic = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_HOST}/api/topics/${id}`);
    } catch (e) {
        alert(e);
    }
};

export const createComment = (topicId, form) => async (dispatch) => {
    const { text } = form;

    try {
        const { data } = await axios.post(`${API_HOST}/api/comments/add/${topicId}`, { text });

        console.log(data);
    } catch (e) {
        console.log(e);
    }
};
