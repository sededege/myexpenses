import { createStore} from "redux";
import { reducer } from "../reducers/reducer";
import thunk from 'redux-thunk';



export const store = createStore(
    reducer
    );