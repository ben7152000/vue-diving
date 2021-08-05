<template>
  <div class="social-media">
      <a class="icon" href="https://line.me/ti/p/4dHz9K9d1-" target="_blank">
        <font-awesome-icon :icon="['fab','line']" />
      </a>
      <a class="icon" href="https://www.instagram.com/yu_cheng_ig/?hl=en" target="_blank">
        <font-awesome-icon :icon="['fab','instagram-square']" />
      </a>
      <a class="icon" href="https://www.facebook.com/ben7152000/" target="_blank">
        <font-awesome-icon :icon="['fab','facebook-square']" />
      </a>
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
  display: flex;
  flex-direction: column;
}

  .icon {
    display: inline-block;
    margin: 8px 0;
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

</style>
