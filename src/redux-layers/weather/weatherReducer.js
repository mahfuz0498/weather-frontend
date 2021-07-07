const initialState = {
  itemList: []
};
// id: Math.random(),

const indexCalculate = (state, removing) => {
  let pos = -1;
  for (let i = 0; i < state.length; i++) {
    if (state[i].id === removing) {
      pos = i;
    }
  }
  return pos;
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("this is " + action.payload);
      return {
        ...state,
        itemList: [
          ...state.itemList,
          {
            id: Math.random(),
            data: action.payload
          }
        ]
      };

    case "REMOVE_ITEM":
      let index = indexCalculate(state, action.payload);
      return {
        ...state,
        itemList: state.itemList.filter(each => each.id !== action.payload)
      };

    default:
      return state;
  }
};

export default weatherReducer;
