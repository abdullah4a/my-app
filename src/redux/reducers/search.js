import {saveSearched} from "../../services/search-service";
import {searchActions} from "../constants/search-actions";

const initialState = {
    query: "Test",
}
const saveText = (state = initialState, {type, payload}) => {
    switch (type) {
        case searchActions.SAVE_SEARCH:
            return saveSearched("").then(res => {
                return res.data;
            })
        case searchActions.DELETE_SEARCH:
            return null;
        default:
            return "";
    }
}
export default saveText;
