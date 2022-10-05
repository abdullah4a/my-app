import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getSearched, saveSearched } from "../services/search-service";
import { getSearchAction } from "../redux/actions/saveSearch";
import { saveSearchAction } from "../redux/actions/saveSearch";

export function Input(props) {
    const { query } = useSelector((state) => state.saveText);
    const [text, setText] = useState(query);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        e.persist();
        setText(e.target.value);
        dispatch(saveSearchAction(text));
        // saveSearch(e.target.value);
    }
    const getAllSearched = async () => {
        await getSearched().then(({ data: res }) => {
            setText(res.text);
            // dispatch(getSearchAction(res.text));
        }).catch((err) => {
            console.error("Error fetching text: ", err.message);
        })

    }
    useEffect(() => {
        const newText = text;
    }, [text]);
    // const saveSearch = (payLoad) => {
    //     saveSearched(payLoad).then(res => {
    //         console.log("Fetched", res.data);
    //     }).catch(err => {
    //         console.error("Error while saving your text: " + err.message);
    //     });
    // }
    useEffect(() => {
        getAllSearched().then(res => res);
    }, []);
    return (<div className="row App-header">
        <div className="col-md-3 col-sm-6">
            <form>
                <div className="form-group">
                    <input type="text" name="Text" value={text} onChange={handleChange} className="form-control"
                        placeholder="Enter Text" />
                </div>
            </form>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        test: state.query,
    }
}
export default connect(mapStateToProps)(Input)


