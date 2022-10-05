import API, { LOCAL_STORAGE } from "./handler-service/API";

const id = LOCAL_STORAGE.getItem("userId");

export const getSearched = () => {
    return API.get("search/" + id + "/");
}
export const saveSearched = (payload) => {
    payload.user_id = id;
    return API.post("search/", payload);
}
export const updateSearched = (payload) => {
    return API.put("search/update/" + id + "/", payload);
}
