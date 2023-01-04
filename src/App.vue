<template>
  <HomePage />
  <ShoppingCart />
</template>

<script>
import HomePage from "@/components/HomePage";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  name: "App",
  components: {
    HomePage,
    ShoppingCart,
  },
};
</script>

<style lang="scss">
* {
  font-family: sans-serif;
}
.btn {
  padding: 12px 20px;
  border-radius: 4px;
  border: none;

  &.primary {
    background: black;
    color: white;
  }
  &.secondary {
    background: lightgray;
    color: black;
  }
  &.error {
    background: indianred;
    color: white;
  }
  &.small {
    padding: 6px 10px;
  }
}
</style>
