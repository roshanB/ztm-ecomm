import CartActions from "./cart.action-types";

export const toggleCartDropdown = () => {
  return {
    type: CartActions.TOGGLE_CART_DROPDOWN,
  };
};
