import * as React from 'react';
// import {Map} from 'immutable';
import {legacy_createStore} from "redux";
import {Provider as ReduxProvider} from "react-redux";
import rootReducer from "../../reducers";

/* eslint-disable no-param-reassign */

import {
  // Models as PlannerModels,
  // reducer as PlannerReducer,
  // ReactPlanner,
  Plugins as PlannerPlugins,
}
from 'react-planner';
import ReactPlanner from "./ReactPlanner";

import MyCatalog from "./catalog/mycatalog";

const store = legacy_createStore(rootReducer);

const Planner = (

) => {
  // const AppState = Map({
  //   'react-planner': new PlannerModels.State(),
  // });
  //
  // const reducer = (state, action) => {
  //   // eslint-disable-next-line no-param-reassign
  //   state = state || AppState;
  //   state = state.update('react-planner', (plannerState) => PlannerReducer(plannerState, action));
  //   return state;
  // };
  //
  // const store = legacy_createStore(
  //   reducer,
  //   null,
  //     // eslint-disable-next-line no-undef
  //   window.devToolsExtension
  //       // eslint-disable-next-line no-undef
  //     ? window.devToolsExtension()
  //     : (f) => f
  // );

  const plugins = [
    PlannerPlugins.Keyboard(),
    PlannerPlugins.Autosave('react-planner_v0'),
    PlannerPlugins.ConsoleDebugger(),
  ];

  console.log(plugins);
  console.log(MyCatalog);

  return (
    <ReactPlanner
      catalog={MyCatalog}
      width={1600}
      height={1200}
      plugins={plugins}
      stateExtractor={(state) => {console.log(state); return state;}}
      store={store}
    />
  );
}

export default Planner;
