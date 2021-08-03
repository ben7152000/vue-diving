<template>
  <div class="social-media">
    <div class="icons">
      <div class="icon">
        <font-awesome-icon :icon="['fab','line']" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab','instagram-square']" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab','facebook-square']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia'
}
</script>

<style lang="scss" scoped>
.social-media {
  position: fixed;
  right: 1%;
  top: 20%;
}

.icons {
  > .icon {
    margin: 16px 0;
    font-size: 1.8rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    line-height: 60px;
    text-align: center;
    background: #242323;
    transition: color .5s ease, background-color .5s ease;
    color: darken(#fff, 30%);
    cursor: pointer;
    &:hover {
      background: #fff;
      &:nth-child(1) {
        color: #01BB00;
      }
      &:nth-child(2) {
        color: #ed4040;
      }
      &:nth-child(3) {
        color: #1973EA;
      }
    }
  }
}
</style>
