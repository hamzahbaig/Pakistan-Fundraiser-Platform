function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("checkout");
    if (serializedState == null) return null;
    return JSON.parse(serializedState);
  } catch (e) {
    return null;
  }
}

const initState = {
  basket: loadFromLocalStorage(),
};

const checkoutReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      let basket = action.campaign;
      try {
        const serializedState = JSON.stringify(basket);
        localStorage.setItem("checkout", serializedState);
      } catch (e) {
        console.log(e);
      }
      return { basket };
    default:
      return state;
  }
};

export default checkoutReducer;
