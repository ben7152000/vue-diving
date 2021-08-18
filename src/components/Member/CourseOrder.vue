<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="top">
          <input type="text" placeholder="訂單編號查詢">
          <font-awesome-icon icon="search" class="icon" />
        </div>
        <div class="bottom">
          <el-table
            style="width: 100%"
            :header-cell-style="tableHeader"
            :cell-style="tableRow"
            empty-text="目前尚無訂單"
            :data="tableData"
          >
            <el-table-column prop="orderId" label="訂單編號" width="180" />
            <el-table-column prop="date" label="上課時間" width="180" />
            <el-table-column prop="location" label="上課地點" width="180" />
            <el-table-column prop="isPaid" label="訂單狀態" width="180" />
            <el-table-column prop="total" label="總價" width="180" />
            <el-table-column prop="user.name" label="訂購人" />
            <el-table-column label="付款" width="180">
              <div>
                <el-button>確認付款</el-button>
              </div>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CourseOrder',
  data () {
    return {
      tableData: [],
      tableHeader: {
        color: '#fff',
        background: '#333',
        fontSize: '1.2rem',
        fontWeight: '300',
        textAlign: 'center',
        padding: '24px 0'
      },
      tableRow: {
        color: '#fff',
        background: '#333',
        fontSize: '1rem',
        fontWeight: '300',
        textAlign: 'center',
        padding: '24px 0'
      }
    }
  },
  mounted () {
    this.tableData = this.order
  },
  computed: {
    ...mapState('order', ['order'])
  }
}
</script>

<style lang="scss" scoped>
.row {
  > .top {
    position: relative;
    display: inline-block;
    width: 300px;
    > input {
      width: 100%;
      height: 40px;
      background: lighten(#000, 30%);
      border: 1px solid #fff;
      font-size: 1.2rem;
      padding-left: 16px;
      letter-spacing: 1.5px;
      color: #fff;
      &:valid, &:focus, &:active {
        outline: none;
      }
    }
    > .icon {
      color: lighten(#000, 50%);
      font-size: 1.2rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5%;
      z-index: 3;
      cursor: pointer;
      transition: color .5s ease;
      &:hover {
        color: #fff;
      }
    }
  }
  > .bottom {
    margin-top: 32px;
  }
}

.el-table {
  background: #333;
  font-size: 1.4rem;
}

.el-button {
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  padding: 16px 16px;
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
