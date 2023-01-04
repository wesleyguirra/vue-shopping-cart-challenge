<template>
  <div class="shopping-cart" :class="{ visible: cartStore.open }">
    <div class="shopping-cart-header">
      <h3>Shopping Cart</h3>
      <button class="btn small error" v-on:click="closeCart()">x</button>
    </div>
    <div class="product-list">
      <ProductItem
        v-for="(product, index) in cartStore.products"
        :key="product.name"
        :product-data="product"
        :index="index"
      />
    </div>
    <div class="shopping-cart-footer" v-if="cartStore.products.length">
      <span>Total</span>
      {{ productsTotal }}
    </div>
    <div v-else>
      <p class="empty-message">Your shopping cart is empty, add some items.</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/CartStore";
import ProductItem from "@/components/ProductItem";

export default {
  name: "ShoppingCart",
  components: {
    ProductItem,
  },
  computed: {
    productsTotal() {
      return this.cartStore.products
        .reduce((acc, { price, quantity }) => acc + price * quantity, 0)
        .toFixed(2);
    },
  },
  setup() {
    const cartStore = useCartStore();
    return {
      cartStore,
    };
  },
  methods: {
    closeCart() {
      this.cartStore.closeCart();
    },
  },
};
</script>

<style lang="scss">
.shopping-cart {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(360px);
  background: #efefef;
  color: black;
  height: 100vh;
  width: 360px;
  padding: 0 20px;
  overflow: scroll;
  transition: transform 0.2s linear;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &-header,
  &-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }

  .product-list {
    display: flex;
    flex-direction: column;
  }
  &.visible {
    transform: translateX(0);
  }

  .empty-message {
  }
}
</style>
