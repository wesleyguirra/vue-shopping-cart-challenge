<template>
  <div class="home">
    <button
      class="btn primary"
      v-on:click="
        addProduct({
          name: 'Drink',
          price: 9.99,
          quantity: 1,
        })
      "
    >
      Add To Cart
    </button>
    <button class="btn secondary" v-on:click="clearCart()">Clear Cart</button>
  </div>
</template>
<script>
import { useCartStore } from "@/stores/CartStore";

export default {
  name: "HomePage",
  setup() {
    const cartStore = useCartStore();

    return {
      cartStore,
    };
  },
  methods: {
    addProduct(product) {
      this.cartStore.addProduct(product);
    },
    clearCart() {
      this.cartStore.clearProducts();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  height: 100vh;
  justify-content: center;
  align-items: center;

  * {
    margin: 10px;
  }
}
</style>
