import { combineReducers } from "redux";
import servicesReducer from "./reducers";

const Reducers=()=>combineReducers({
    servicesData:servicesReducer
})
export default Reducers