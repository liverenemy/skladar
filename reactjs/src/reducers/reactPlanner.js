import {Models as PlannerModels, reducer as PlannerReducer} from "react-planner";
import {Map} from "immutable";


const appState = Map({
    'react-planner': new PlannerModels.State(),
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const reducer = (state = appState, action) => {
    // eslint-disable-next-line no-param-reassign
    // state = state || appState;
    // eslint-disable-next-line no-param-reassign
    state = state.update(
        'react-planner',
        (plannerState) => PlannerReducer(plannerState, action)
    );
    return state;
};

export default reducer;
