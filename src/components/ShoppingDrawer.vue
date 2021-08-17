<template>
  <el-drawer title="購物車" :visible.sync="drawer">
    <div class="cart-container" v-if="items.length !== 0">
      <div class="row">
        <div class="card" v-for="(item, index) in items" :key="index">
          <div class="img">
            <img :src="require('../static/Course/'+item.course.img)" :alt="item.course.title">
          </div>
          <div class="info">
            <h3>{{ item.course.title }}</h3>
            <p>NT $ {{ item.course.price }}</p>
            <div class="qty">
              <span class="addAndSub" @click="subItem(index)">-</span>
              <span>{{ item.course.count }}</span>
              <span class="addAndSub" @click="addItem(index)">+</span>
              <span @click="removeItem(index)"><font-awesome-icon icon="trash" /></span>
            </div>
          </div>
        </div>
      </div>
      <div class="num-group">
        <p>小計：<span>NT $ {{ total }}</span></p>
        <button @click.prevent="checkoutHandler">前往結帳</button>
      </div>
    </div>
    <div class="empty-cart" v-else>購物車是空的</div>
  </el-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ShoppingDrawer',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['total'])
  },
  methods: {
    ...mapMutations('cart', ['addItem', 'subItem', 'removeItem']),
    openDrawer () {
      this.drawer = true
    },
    checkoutHandler () {
      this.$router.push('/checkout')
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  //border: 1px solid;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

::v-deep .el-drawer {
  background: #eee;
  width: 20% !important;
}

::v-deep .el-drawer__body {
  padding: 0;
}

::v-deep .el-drawer__header {
  font-size: 1.4rem;
  color: #000;
}

.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  > .row {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }
  > .num-group {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }
}

.card {
  display: flex;
  margin: 10px auto;
  height: 150px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
  > .img {
    width: 40%;
  }
  > .info {
    width: 60%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h3 {
      font-size: 1.3rem;
    }
    > p {
      font-size: .9rem;
    }
    > .qty {
      display: flex;
      justify-content: space-between;
      > span {
        display: inline-block;
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        font-weight: 900;
        &:last-child {
          cursor: pointer;
          transition: .5s ease;
          &:hover {
            color: red;
          }
        }
      }
      > .addAndSub {
        background: #242323;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

.num-group {
 > p {
   padding: 8px 0;
   font-size: 1.4rem;
   font-weight: 700;
   > span {
     font-size: 1.8rem;
     font-weight: 900;
   }
 }
  > button {
    padding: 8px 0;
    border: none;
    background: #E37E0C;
    border-radius: 10px;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
  }
}

.empty-cart {
  padding: 0 16px;
  font-size: 1.4rem;
  font-weight: 500;
  color: #E37E0C;
}
</style>
