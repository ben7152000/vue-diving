<template>
  <div class="container">
    <span></span>
    <h2>{{ subtitle }}</h2>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'Subtitle',
  props: {
    subtitle: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  flex: 2;
  background: #fff;
  height: 1px;
}
h2 {
  flex: 1;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  font-weight: 400;
}
</style>
