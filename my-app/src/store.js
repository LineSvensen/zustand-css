import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (product, size) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        // increment quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // add a new item
        return {
          cart: [
            ...state.cart,
            {
              id: product.id,
              title: product.title,
              size: size,
              image: product.image.url,
              price: product.onSale ? product.discountedPrice : product.price,
              quantity: 1,
            },
          ],
        };
      }
    }),

  removeFromCart: (productId, size) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.id === productId && item.size === size)
      ),
    })),

  decrementItem: (productId, size) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === productId && item.size === size
      );
      if (!existingItem) return { cart: state.cart };

      if (existingItem.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item.id === productId && item.size === size
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          cart: state.cart.filter(
            (item) => !(item.id === productId && item.size === size)
          ),
        };
      }
    }),
}));
