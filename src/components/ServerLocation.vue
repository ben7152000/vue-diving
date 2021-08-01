<template>
  <section>
    <Subtitle subtitle="服務據點"/>
    <div class="container container-server">
      <div class="img">
        <img src="../static/serverLocation.jpg" alt="龍洞岬裝備中心">
      </div>
      <div class="info">
        <h2>龍洞岬潛水中心</h2>
        <h4>新北市貢寮區龍洞街1-5號</h4>
        <div class="phone">
        <div class="icon">
          <font-awesome-icon icon="mobile-alt" />
        </div>
        <span>0955-857-339</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Subtitle from './Subtitle'
export default {
  name: 'ServerLocation',
  components: {
    Subtitle
  }
}
</script>

<style lang="scss" scoped>
.container-server {
  padding-top: 100px;
  display: flex;
  align-items: center;
}

.img {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 500px;
  > img {
    height: 100%;
    width: 400px;
    object-fit: cover;
  }
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  > h2, h4 {
    letter-spacing: 2px;
  }
  > h2 {
    font-size: 3rem;
    padding: 8px;
  }
  > h4 {
    font-size: 1.5rem;
    padding: 8px;
  }
}

.phone {
  padding: 16px;
  > .icon, span {
    font-size: 1.5rem;
    display: inline-block;
  }
  > .icon {
    background: #E37E0C;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    margin-right: 16px;
  }
}
</style>
