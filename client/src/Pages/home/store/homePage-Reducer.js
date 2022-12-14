// import { createAction, createReducer } from "@reduxjs/toolkit";
// const increment = createAction("INCREMENT");
// const decrement = createAction("DECREMENT",payload);
// const counter = createReducer(0, {
//   [increment.type]: (state) => state + 1,
//   [decrement.type]: (state) => state - 1,
// });
// export const addTodo = createAction('ADD_TODO', text => {
//   return {
//     payload: { id: nextTodoId++, text }
//   }
// })
const defaultState = {
  commoditylist: [],
  height: 3250,
  window_resize: false,
  page: 1,
  maxpage: 3,
};
const homePageReducer = (state = defaultState, action) => {
  if (action.type === "LOAD_COMMODITY_SUCCESS") {
    const newState = JSON.parse(JSON.stringify(state));
    // newState.commoditylist = [...action.data][0].commoditys;
    newState.commoditylist = [...action.data];
    // console.log(newState.commoditylist);
    return newState;
  }
  if (action.type === "load_more_commodity") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.window_resize = action.window_resize;
    // newState.commoditylist = [...action.data][0].commoditys;
    newState.commoditylist = [...action.data];
    // console.log(newState.commoditylist);
    newState.page = state.page + 1;
    return newState;
  }
  if (action.type === "resizeWindow") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.window_resize = action.window_resize;
    newState.height = action.new_height;

    newState.commoditylist = [];
    return newState;
  }
  if (action.type === "load_max_page") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.loadmaxpage = true;

    return newState;
  }
  if (action.type === "reset_Homecomponent") {
    return defaultState;
  }
  return state;
};
export default homePageReducer;
