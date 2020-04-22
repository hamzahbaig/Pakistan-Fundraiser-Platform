export const addToBasket = (campaign, id) => {
    console.log("HERE")
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "ADD_TO_BASKET", campaign, id });
    console.log("HAMZAH")
  };
};
