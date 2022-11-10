import { getShelters, getSheltersByName, getSheltersById, createShelters, updateShelters, deleteShelters, getSheltersTopFive } from './manageSheltersSlice';
import axios from 'axios';
import { toggleLoading } from '../loading/loadingSlice';

export const getSheltersAction = () => async dispatch => {
    dispatch(toggleLoading())
    try {
        const res = await axios.get('/shelters');
        console.log(res)
        dispatch(getShelters(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getShelters(err));
    } finally {
        dispatch(toggleLoading())
    }
}

export const getSheltersTopFiveAction = () => async dispatch => {
    dispatch(toggleLoading())
    try {
        const res = await axios.get('/shelters/topFive');
        dispatch(getSheltersTopFive(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getSheltersTopFive(err));
    } finally {
        dispatch(toggleLoading())
    }
}


export const getSheltersByIdAction = (id) => async dispatch => {
    dispatch(toggleLoading())
    try {
        const res = await axios.get(`/shelters/${id}`);
        dispatch(getSheltersByName(res.data));
    } catch (err) {
        dispatch(getSheltersByName(err.response.data));
    } finally {
        dispatch(toggleLoading())
    }
}


export const getSheltersByNameAction = (name) => async dispatch => {
    dispatch(toggleLoading())
    try {
        const res = await axios.get(`/shelters?name=${name}`);
        dispatch(getSheltersById(res.data));
    } catch (err) {
        dispatch(getSheltersById(err.response.data));
    } finally {
        dispatch(toggleLoading())
    }
}


export const createSheltersAction = (shelter) => async dispatch => {
    dispatch(toggleLoading())
    try {
        const res = await axios.post('/shelters', shelter);
        dispatch(createShelters(res.data));
    } catch (err) {
        dispatch(createShelters(err.response.data));
    } finally {
        dispatch(toggleLoading())
    }
}


export const updateSheltersAction = (shelters) => async dispatch => {
    dispatch(toggleLoading())
    try {
        const res = await axios.put('/shelters', shelters);
        dispatch(updateShelters(res.data));
    } catch (err) {
        dispatch(updateShelters(err.response.data));
    } finally {
        dispatch(toggleLoading())
    }
}


export const deleteSheltersAction = (id) => async dispatch => {
    dispatch(toggleLoading())
    try {
        const res = await axios.delete(`/shelters/${id}`);
        dispatch(deleteShelters(res.data));
    } catch (err) {
        dispatch(deleteShelters(err.response.data));
    } finally {
        dispatch(toggleLoading())
    }
}