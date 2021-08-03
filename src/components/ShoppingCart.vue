<template>
  <div class="shopping-cart">
    <div class="icon">
      <font-awesome-icon icon="shopping-cart" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart'
}
</script>

<style lang="scss" scoped>
.shopping-cart {
  position: fixed;
  right: 1%;
  bottom: 2%;
}

.icon {
  margin: 16px 0;
  font-size: 1.8rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  text-align: center;
  background: #E37E0C;
  transition: color .5s ease, background-color .5s ease;
  color: darken(#000, 30%);
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #E37E0C;
  }
}
</style>
