import { searchActions } from "../constants/search-actions";

export const getSearchAction = (query) => {
    return {
        type: searchActions.GET_SEARCH,
        payload: query,
    };
}

export const saveSearchAction = (query) => {
    return {
        type: searchActions.SAVE_SEARCH,
        payload: query,
    };
}
