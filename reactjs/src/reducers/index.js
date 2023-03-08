import {combineReducers} from "redux";
import plannerReducer from '../scenes/Planner/reducers/plannerReducer'

export default combineReducers({
    'react-planner': plannerReducer,
});
