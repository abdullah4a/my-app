import { searchActions } from "../constants/search-actions";
import { saveSearched, updateSearched } from "../../services/search-service";

const initialState = {
    query: "",
}
const saveText = (state = initialState, { type, payload }) => {
    switch (type) {
        case searchActions.GET_SEARCH:
            return { ...state, query: payload };
        case searchActions.SAVE_SEARCH:
            saveSearched(state).then(() => {
                // TODO Implementation remaining
            }).catch(erro => {
                if (erro.response.data.user_id.toString() === 'Already Exists') {
                    tryUpdate(state);
                }
            });
            return { ...state, query: payload };
        default:
            return state;
    }
}
const tryUpdate = (state) => {
    updateSearched(state).then(res => {
        console.log(`Response of Updting Search`, res.data);
    }).catch(err => {
        console.log(err);
    })
}
export default saveText;
