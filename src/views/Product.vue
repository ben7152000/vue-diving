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
              <div class="card" v-for="freediving in goods.freediving" :key="freediving.id">
                <div class="img">
                  <img :src="require('../static/Good/'+freediving.img)" :alt="freediving.name">
                </div>
                <h4>{{ freediving.name }}</h4>
                <p>NT {{ freediving.price }}</p>
              </div>
            </div>
            <div class="info" v-if="$route.path === '/products/snorkeling'">
              <div class="card" v-for="snorkeling in goods.snorkeling" :key="snorkeling.id">
                <div class="img">
                  <img :src="require('../static/Good/'+snorkeling.img)" :alt="snorkeling.name">
                </div>
                <h4>{{ snorkeling.name }}</h4>
                <p>NT {{ snorkeling.price }}</p>
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
import axios from 'axios'

export default {
  name: 'Product',
  components: {
    Breadcrumb,
    Subtitle
  },
  data () {
    return {
      goods: []
    }
  },
  async created () {
    try {
      const res = await axios.get('/goods')
      this.goods = res.data.data
    } catch (e) {
      console.log(e)
    }
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
    height: 350px;
    > img {
      width: 100%;
      height: 100%;
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
