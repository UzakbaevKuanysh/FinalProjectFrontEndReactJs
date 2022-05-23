import askReducer from "./ask";
import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    ask : askReducer,
    isLogged : loggedReducer
});
export default allReducers;