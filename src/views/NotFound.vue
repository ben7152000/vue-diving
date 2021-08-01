<template>
  <div class="container">
    <p>404 找不到網頁</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(white, 0.8), rgba(white, 0));
}

p {
  font-weight: 500;
  letter-spacing: 2px;
  color: #44607a;
}
</style>
