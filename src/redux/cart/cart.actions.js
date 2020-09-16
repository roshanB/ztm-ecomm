import CartActions from "./cart.action-types";

export const toggleCartDropdown = () => {
  return {
    type: CartActions.TOGGLE_CART_DROPDOWN,
  };
};

export const addItem = (item) => {
  return {
    type: CartActions.ADD_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return { type: CartActions.CLEAR_ITEM_FROM_CART, payload: item };
};

export const removeItem = (item) => {
  return {
    type: CartActions.REMOVE_ITEM,
    payload: item,
  };
};
