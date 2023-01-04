import { defineStore } from "pinia";

export const useCartStore = defineStore("ProductStore", {
  state: () => ({
    open: false,
    products: [],
  }),
  getters: {},
  actions: {
    addProduct(product) {
      this.products = [...this.products, product];
      this.open = true;
    },
    clearProducts() {
      this.products = [];
      this.open = true;
    },
    closeCart() {
      this.open = false;
    },
    increaseProductQuantity(product, index) {
      const arrayCopy = Array.from(this.products);
      const updatedProduct = {
        ...product,
        quantity: product.quantity + 1,
      };
      arrayCopy.splice(index, 1, updatedProduct);
      this.products = arrayCopy;
    },
    decreaseProductQuantity(product, index) {
      const arrayCopy = Array.from(this.products);
      const updatedProduct = {
        ...product,
        quantity: product.quantity - 1,
      };
      if (product.quantity === 1) return;
      arrayCopy.splice(index, 1, updatedProduct);
      this.products = arrayCopy;
    },
  },
});
