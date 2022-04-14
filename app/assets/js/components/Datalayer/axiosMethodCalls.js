import axios from 'axios';
// API Axios Get Call.
export const getAPI = (url) => {
    return axios.get(url);
}
// API Axios Post Call.
export const postAPI = (url, data) => {
    return axios.post(url, data);
}
// API Axios Put Call.
export const putAPI = (url, data) => {
    return axios.put(url, data);
}
// API Axios Delete Call.
export const deleteAPI = (url) => {
    return axios.delete(url);
}
