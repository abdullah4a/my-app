import {searchActions} from "../constants/search-actions";

export const saveSearch = (query) => {
    console.log(query);
    return {
        type: searchActions.SAVE_SEARCH,
        payload: query,
    };
}

export const deleteSearch = (query) => {
    console.log(query);
    return {
        type: searchActions.DELETE_SEARCH,
        payload: query,
    };
}
