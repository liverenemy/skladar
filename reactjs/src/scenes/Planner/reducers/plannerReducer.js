import {
    PROJECT_ACTIONS,
    VIEWER2D_ACTIONS,
    VIEWER3D_ACTIONS,
    GROUP_ACTIONS,
    ITEMS_ACTIONS,
    HOLE_ACTIONS,
    LINE_ACTIONS,
    AREA_ACTIONS,
    SCENE_ACTIONS,
    VERTEX_ACTIONS
} from 'react-planner/src/constants';

import {
    ReactPlannerAreasReducer,
    ReactPlannerHolesReducer,
    ReactPlannerItemsReducer,
    ReactPlannerLinesReducer,
    ReactPlannerGroupsReducer,
    ReactPlannerProjectReducer,
    ReactPlannerSceneReducer,
    ReactPlannerVerticesReducer,
    ReactPlannerViewer2dReducer,
    ReactPlannerViewer3dReducer
} from 'react-planner/src/reducers/export';

import {State} from 'react-planner/src/models';

export const initialState = new State();

export default function appReducer(state = initialState, action) {
    if( PROJECT_ACTIONS[action.type] ) return ReactPlannerProjectReducer(...arguments);
    if( VIEWER2D_ACTIONS[action.type] ) return ReactPlannerViewer2dReducer(...arguments);
    if( VIEWER3D_ACTIONS[action.type] ) return ReactPlannerViewer3dReducer(...arguments);
    if( ITEMS_ACTIONS[action.type] ) return ReactPlannerItemsReducer(...arguments);
    if( HOLE_ACTIONS[action.type] ) return ReactPlannerHolesReducer(...arguments);
    if( LINE_ACTIONS[action.type] ) return ReactPlannerLinesReducer(...arguments);
    if( AREA_ACTIONS[action.type] ) return ReactPlannerAreasReducer(...arguments);
    if( GROUP_ACTIONS[action.type] ) return ReactPlannerGroupsReducer(...arguments);
    if( SCENE_ACTIONS[action.type] ) return ReactPlannerSceneReducer(...arguments);
    if( VERTEX_ACTIONS[action.type] ) return ReactPlannerVerticesReducer(...arguments);

    return state || initialState;
};
