<template>
  <section>
    <Breadcrumb name="商品結帳"/>
    <Subtitle subtitle="商品結帳"/>

    <section>
      <div class="container">
        <div class="row">
          <el-steps simple :active="active">
            <el-step title="確認商品" icon="el-icon-shopping-cart-2" />
            <el-step title="訂購資訊" icon="el-icon-edit" />
            <el-step title="付款完成" icon="el-icon-bank-card" />
          </el-steps>
        </div>
      </div>

      <CheckInfo v-if="active === 0"/>
      <CheckForm v-if="active === 1" />
      <CheckOrder v-if="active === 2" />
      <CheckAlert v-if="active === 3"/>

      <div class="container">
        <div class="row">
          <div class="btn" v-if="active === 0">
            <el-button>確認商品</el-button>
          </div>
          <div class="btn" v-if="active === 1">
            <el-button>送出訂單</el-button>
          </div>
          <div class="btn" v-if="active === 2">
            <el-button>確認付款</el-button>
          </div>
          <div v-if="active === 3" class="btn-group">
            <router-link to="/member">
              <el-button>查看訂單紀錄</el-button>
            </router-link>
            <router-link to="/">
              <el-button>回首頁</el-button>
            </router-link>
          </div>
        </div>
      </div>

    </section>
  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'
import CheckInfo from '../components/CheckOut/CheckInfo'
import CheckForm from '../components/CheckOut/CheckForm'
import CheckOrder from '../components/CheckOut/CheckOrder'
import CheckAlert from '../components/CheckOut/CheckAlert'

export default {
  name: 'Checkout',
  components: {
    Breadcrumb,
    Subtitle,
    CheckInfo,
    CheckForm,
    CheckOrder,
    CheckAlert
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>

.el-steps--simple {
  padding: 16px 150px;
  background: #4E4E4E;
}

::v-deep .is-process {
  color: #E37E0C;
}

::v-deep .is-finish {
  color: #808080;
}

.btn,
.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-group {
  a:nth-child(2) {
    margin-left: 16px;
  }
}

.el-button {
  cursor: pointer;
  color: #fff;
  margin-top: 64px;
  font-size: 1.3rem;
  padding: 16px 32px;
  border-radius: 16px;
  outline: none;
  border: none;
  background: #E37E0C;
  transition: color .5s ease,background-color .5s ease;
  &:hover {
    color: #E37E0C;
    background: #fff;
  }
}
</style>
