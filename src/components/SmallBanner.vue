<template>
  <div class="small-banner"></div>
</template>

<script>
export default {
  name: 'SmallBanner'
}
</script>

<style lang="scss" scoped>
.small-banner {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  height: 350px;
  background-image: url("../static/Banner/banner-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .2;
  }
}
</style>
