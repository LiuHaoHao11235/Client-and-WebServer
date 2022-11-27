const defaultState = {
  phonetype: "notthing",
  phonedatafromapi: [],
};
const headerReducer = (state = defaultState, action) => {
  //console.log(action);
  if (action.type === "LOAD_POSTS_SUCCESS") {
    const newState = JSON.parse(JSON.stringify(state)); //深copy state整個物件 有缺點 盡量別這樣用
    newState.phonedatafromapi = [...action.data];
    //console.log(newState.phonedatafromapi);
    newState.phonetype = "iphone";
    return newState; //返回給store store存了Newstate
  }
  if (action.type === "click_star") {
    const newState = JSON.parse(JSON.stringify(state)); //深copy state整個物件 有缺點 盡量別這樣用
    newState.star = action.star;
    return newState; //返回給store store存了Newstate
  }

  if (action.type === "reload_phone") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.phonetype = action.phonetype;
    return newState;
  }
  return state;
};
export default headerReducer;

//TODO:reducer分開管理 再一起export到最外層的reducer去
