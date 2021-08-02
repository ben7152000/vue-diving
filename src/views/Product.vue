<template>
  <section>
    <Breadcrumb name="商品櫥窗"/>
    <Subtitle subtitle="商品櫥窗"/>
    <section>
      <div class="container">
        <div class="row">
          <div class="left">
            <h2>產品種類</h2>
            <hr>
            <ul>
              <router-link to="/products/freediving" tag="li">自潛裝備</router-link>
              <router-link to="/products/snorkeling" tag="li">浮潛裝備</router-link>
            </ul>
          </div>
          <div class="right">
            <div class="info" v-if="$route.path === '/products/freediving'">
              <div class="card">
                <div class="img">
                  <img src="../static/Product/freediving-2.jpeg" alt="">
                </div>
                <h4>長蛙鞋</h4>
                <p>NT 100</p>
              </div>
              <div class="card">
                <div class="img">
                  <img src="../static/Product/freediving-2.jpeg" alt="">
                </div>
                <h4>長蛙鞋</h4>
                <p>NT 100</p>
              </div>
              <div class="card">
                <div class="img">
                  <img src="../static/Product/freediving-2.jpeg" alt="">
                </div>
                <h4>長蛙鞋</h4>
                <p>NT 100</p>
              </div>
              <div class="card">
                <div class="img">
                  <img src="../static/Product/freediving-2.jpeg" alt="">
                </div>
                <h4>長蛙鞋</h4>
                <p>NT 100</p>
              </div>
            </div>
            <div class="info" v-if="$route.path === '/products/snorkeling'">
              <div class="card">
                <div class="img">
                  <img src="../static/Product/snorkeling-2.jpeg" alt="">
                </div>
                <h4>一般面鏡</h4>
                <p>NT 70</p>
              </div>
              <div class="card">
                <div class="img">
                  <img src="../static/Product/snorkeling-2.jpeg" alt="">
                </div>
                <h4>一般面鏡</h4>
                <p>NT 70</p>
              </div>
              <div class="card">
                <div class="img">
                  <img src="../static/Product/snorkeling-2.jpeg" alt="">
                </div>
                <h4>一般面鏡</h4>
                <p>NT 70</p>
              </div>
              <div class="card">
                <div class="img">
                  <img src="../static/Product/snorkeling-2.jpeg" alt="">
                </div>
                <h4>一般面鏡</h4>
                <p>NT 70</p>
              </div>
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
  name: 'Product',
  components: {
    Breadcrumb,
    Subtitle
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  > .left {
    width: 20%;
    color: #fff;
    text-align: center;
    > h2 {
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 2px;
      padding: 0 0 16px;
    }
    > ul {
      margin-top: 32px;
      > li {
        font-size: 1.2rem;
        list-style: none;
        padding: 16px 0;
        cursor: pointer;
        transition: color .5s ease;
        &:hover {
          color: #E37E0C;
        }
      }
    }
  }
  > .right {
    width: 80%;
    > .info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding-left: 64px;
    }
  }
}

.card {
  width: 30%;
  margin: 0 16px 32px;
  color: #fff;
  > .img {
    width: 100%;
    > img {
      width: 100%;
      object-fit: cover;
    }
  }
  > h4, p {
    text-align: center;
  }
  > h4 {
    font-size: 1.2rem;
    margin: 8px 0;
  }
}
</style>
