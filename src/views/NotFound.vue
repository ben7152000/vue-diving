<template>
  <section>
    <div class="container">
      <div class="row">
        <p>404 找不到網頁</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  > p {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: #ccc;
  }
}
</style>
