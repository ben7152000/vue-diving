<template>
  <section>
    <Breadcrumb name="商品櫥窗"/>
    <Subtitle subtitle="商品櫥窗"/>
    <section>
      <div class="container">
        <div class="products">
          <div class="left">
            <router-link to="/products/freediving">自潛裝備</router-link>
            <div class="img">
              <img src="../static/Product/freediving-1.jpeg" alt="自潛裝備">
            </div>
            <div class="img">
              <img src="../static/Product/freediving-2.jpeg" alt="自潛裝備">
              <span/>
            </div>
          </div>
          <div class="right">
            <router-link to="/products/snorkeling">浮潛裝備</router-link>
            <div class="img">
              <img src="../static/Product/snorkeling-1.jpeg" alt="浮潛裝備">
            </div>
            <div class="img">
              <img src="../static/Product/snorkeling-2.jpeg" alt="浮潛裝備">
              <span/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'
export default {
  name: 'Products',
  components: {
    Breadcrumb,
    Subtitle
  }
}
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  justify-content: center;
  > .left, .right {
    display: flex;
    flex: 1;
    position: relative;
    &:hover {
      a {
        opacity: 1;
      }
    }
  }
}

.img {
  height: 360px;
  width: 360px;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

span {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 3;
  left: 0;
  opacity: .6;
}

a {
  position: absolute;
  color: #fff;
  z-index: 4;
  top: 50%;
  left: 80%;
  transform: translate(-80%,-50%);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  transition: color .5s ease, opacity .5s ease;
  opacity: 0;
  &:hover {
    color: #E37E0C;
  }
}

</style>
