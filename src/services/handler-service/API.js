import axios from 'axios';
export const LOCAL_STORAGE=window.localStorage;
export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    Authorization:LOCAL_STORAGE.getItem("userId")
});
