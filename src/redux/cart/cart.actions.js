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
