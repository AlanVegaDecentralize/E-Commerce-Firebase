import { createSelector } from 'reselect';

// Create a smaller view of desired state
const selectCart = (state) => state.cart;

// Pass selected state into a <createSelector> for memoization, returns cart items
// Memoized cart selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// Uses cart item selector to act on and return cart item count
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
