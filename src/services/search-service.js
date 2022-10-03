import API, {LOCAL_STORAGE} from "./handler-service/API";

const id = LOCAL_STORAGE.getItem("userId");

export const getSearched = () => {
    return API.get("search/" + id);
}
export const saveSearched = (payload) => {
    return API.post("search/" + id, payload);
}
