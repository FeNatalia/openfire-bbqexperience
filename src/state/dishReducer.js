export default function dishReducer(state, action) {
  switch (action.type) {
    case "SET_DISHES":
      return setDishes(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function setDishes(action) {
  const { payload } = action;

  return payload;
}
