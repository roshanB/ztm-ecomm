export const addItemToCart = (cartItems, itemToAdd) => {
  const existing = cartItems.find((item) => item.id === itemToAdd.id);

  if (existing) {
    return cartItems.map((item) => {
      if (item.id === existing.id) {
        item.quantity += 1;
      }
      return item;
    });
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemFromCart = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (itemFromCart) {
    if (itemFromCart.quantity > 1) {
      return cartItems.map((cartItem) => {
        if (cartItem.id === itemToRemove.id) {
          //cartItem.quantity -= 1;
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
    } else {
      return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    }
  }
};
