import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getSearched} from "../services/search-service";

export function Input(props) {
    console.log(props)
    const test = props.test;
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    useEffect(() => {
        console.log(test);
        getSearched().then(res => {
            console.log("Fetched", res.data);
        }).catch(err => {
            console.error("Error while getting your text: " + err.message);
        })
    })
    return (
        <div className="row">
            <div className={"col-md-4 col-sm-6"}></div>
            <div className="col-md-4 center col-sm-6">
                <form>
                    <div className="form-group">
                        <input type="text" name="Text" value={text} onChange={handleChange} className="form-control"
                               placeholder="Enter Text"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        test: state.query,
    }
}
export default connect(mapStateToProps)(Input)
