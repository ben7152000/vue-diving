<template>
  <div class="banner">
    <img src="../static/Banner/banner-1.jpeg" alt="龍洞岬潛水中心">
    <div class="banner-cover"></div>
    <div class="banner-info">
      <h2>龍洞岬裝備中心</h2>
      <h4>跨出冒險的第一步</h4>
      <div class="banner-button">
        <a href="/">了解更多</a>
        <a href="/">立即報名</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 0;
  margin: 0;
  width: 100%;
  height: calc(100vh - 60px);
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > .banner-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #000;
    opacity: .3;
  }
  > .banner-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    > h2, h4 {
      text-shadow: 0 10px 10px rgba(0, 0, 0);
      letter-spacing: 2px;
    }
    > h2 {
      font-size: 4rem;
      padding: 8px;
    }
    > h4 {
      font-size: 2rem;
      padding: 8px;
    }
    > .banner-button {
      padding: 16px;
      > a {
        display: inline-block;
        font-size: 1.3rem;
        padding: 16px 24px;
        border-radius: 24px;
        &:first-child {
          color: #E37E0C;
          background: #fff;
          margin-right: 32px;
          transition: color .5s ease,background-color .5s ease;
          &:hover {
            color: #fff;
            background: #E37E0C;
          }
        }
        &:last-child {
          color: #fff;
          background: #E37E0C;
          transition: color .5s ease,background-color .5s ease;
          &:hover {
            color: #E37E0C;
            background: #fff;
          }
        }
      }
    }
  }
}
</style>
