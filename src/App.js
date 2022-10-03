import './App.css';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input} from "./component/Input";
import {LOCAL_STORAGE} from "./services/handler-service/API";
import {v4 as uuidv4} from 'uuid';
import {saveUser} from "./services/users.service";

function App() {
    const user = LOCAL_STORAGE.getItem("userId");
    if (user === null) {
        const id = uuidv4();
        saveUser(id).then(res => {
            //    TODO Then Save user as Local User
            console.log(res.data);
        }).catch(err => {
            console.error("User Can't be Saved", err.message);
        })
        //TODO Remove Line Below and save after user saved in DataBase
        LOCAL_STORAGE.setItem("userId", id.slice(0, 8));
    }
    return (<Input/>);
}

export default App;
