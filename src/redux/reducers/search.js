import { searchActions } from "../constants/search-actions";
import { saveSearched } from "../../services/search-service";

const initialState = {
    query: "",
}
const saveText = (state = initialState, { type, payload }) => {
    switch (type) {
        case searchActions.GET_SEARCH:
            return { ...state, query: payload };
        case searchActions.SAVE_SEARCH:
            return { ...state, query: payload };
        default:
            return state;
    }
}

export default saveText;
