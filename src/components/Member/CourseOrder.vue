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
            <el-table-column prop="orderNumber" label="訂單編號" width="180" />
            <el-table-column prop="courseName" label="課程名稱" width="250" />
            <el-table-column prop="orderActive" label="訂單狀態" width="180" />
            <el-table-column prop="courseTime" label="上課時間" width="180" />
            <el-table-column prop="courseLocation" label="上課地點" width="180" />
            <el-table-column prop="orderDetail" label="詳細" />
          </el-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CourseOrder',
  data () {
    return {
      tableData: [
        {
          orderNumber: '123',
          courseName: 'AIDA 1 初級自由潛水員課程',
          orderActive: '未付款',
          courseTime: '7月25號',
          courseLocation: '龍洞',
          orderDetail: '沒裝備'
        },
        {
          orderNumber: '123',
          courseName: 'AIDA 1 初級自由潛水員課程',
          orderActive: '未付款',
          courseTime: '7月25號',
          courseLocation: '龍洞',
          orderDetail: '沒裝備'
        },
        {
          orderNumber: '123',
          courseName: 'AIDA 1 初級自由潛水員課程',
          orderActive: '未付款',
          courseTime: '7月25號',
          courseLocation: '龍洞',
          orderDetail: '沒裝備'
        }
      ],
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

</style>
