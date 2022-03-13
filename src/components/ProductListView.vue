<template>
  <div v-if="cartItems.length > 0">
    <ProductListItem
      v-for="product in cartItems"
      :key="product.id"
      :product="product"
    />
  </div>
  <p v-else>You haven't added anything to your cart yet!</p>
</template>

<script>
import ProductListItem from "../components/ProductListItem.vue";
export default {
  name: "ProductListView",
  components: { ProductListItem },
  props: ["cartItems"],
};
</script>

<style scoped>
</style>