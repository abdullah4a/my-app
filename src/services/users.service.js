import API from "./handler-service/API";

export const saveUser = (id) => {
    return API.post("user/", id);
}
