<template>
  <div class="product">
    <div class="product-name">
      <p class="product-name-label">Name</p>
      <p>{{ productData.name }}</p>
    </div>
    <div class="product-quantity">
      <p class="product-quantity-label">Quantity</p>
      <div class="product-quantity-selector">
        <button
          :disabled="productData.quantity === 1"
          v-on:click="decreaseQuantity(productData, index)"
        >
          -
        </button>
        <input type="text" :value="productData.quantity" />
        <button v-on:click="increaseQuantity(productData, index)">+</button>
      </div>
    </div>
    <div class="product-price">
      <p class="product-price-label">Price</p>
      <p>{{ itemTotal }}</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/CartStore";

export default {
  name: "ProductItem",
  props: {
    index: Number,
    productData: Object,
  },
  computed: {
    itemTotal() {
      return this.productData.price * this.productData.quantity;
    },
  },
  setup() {
    const cartStore = useCartStore();
    return {
      cartStore,
    };
  },
  methods: {
    increaseQuantity(product, index) {
      this.cartStore.increaseProductQuantity(product, index);
    },
    decreaseQuantity(product, index) {
      this.cartStore.decreaseProductQuantity(product, index);
    },
  },
};
</script>

<style lang="scss">
.product {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background: white;
  color: black;
  margin: 10px 0;

  &-name {
    margin: 0;

    &-label {
      color: #cecece;
      font-size: 10px;
    }
  }

  &-price {
    font-weight: bold;

    &-label {
      color: #cecece;
      font-size: 10px;
    }
  }

  &-quantity {
    color: #cecece;

    &-label {
      color: #cecece;
      font-size: 10px;
    }

    &-selector {
      display: flex;
      align-items: center;

      input {
        max-width: 15px;
        margin: 0 4px;
        text-align: center;
      }
    }
  }
}
</style>
