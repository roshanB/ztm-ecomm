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
