import {
    GET_CONTACTS,
    DELETE_CONTACT,
    ADD_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    GET_GOALS
} from './types';
import axios from 'axios';


export const getContacts = () => async dispatch => {
    const res = await axios.get('https://testapi.io/api/cwilso88/users');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};
export const getGoals = () => async dispatch => {
    const res = await axios.get('https://testapi.io/api/cwilso88/departments');
    dispatch({
        type: GET_GOALS,
        payload: res.data
    });
};
export const getContact = (id) => async dispatch => {
    const res = await axios.get(`https://testapi.io/api/cwilso88/users/${id}`);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    });
};
export const deleteContact = (id) => async dispatch => {
    await axios.delete(`https://testapi.io/api/cwilso88/users/${id}`);
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
};
export const addContact = (contact) => async dispatch => {
    const res = await axios.post('https://testapi.io/api/cwilso88/users/', contact);
    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
};
export const updateContact = (contact) => async dispatch => {
    const res = await axios.put(`https://testapi.io/api/cwilso88/users/${contact.id}`, contact);
    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
    });
};