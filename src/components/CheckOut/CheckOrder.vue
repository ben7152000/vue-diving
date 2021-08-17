<template>
  <div class="container">
    <div class="row">
      <div class="check-order">
        <h2>訂單編號：123456</h2>
        <el-divider />
        <h4>訂購人資訊</h4>
        <el-table
          :data="order"
          style="width: 100%"
          :header-cell-style="tableHeader"
          :cell-style="tableRow"
        >
          <el-table-column type="expand">
            <div slot-scope="scope">
              <p>信箱：{{ scope.row.email }}</p>
              <p>電話：{{ scope.row.tel }}</p>
              <p>地址：{{ scope.row.address }}</p>
            </div>
          </el-table-column>
          <el-table-column label="訂購人資訊" prop="name" />
          <el-table-column label="訂購日期" prop="date" />
          <el-table-column label="訂單狀態" prop="checkPaid" />
          <el-table-column label="總金額" prop="total" />
        </el-table>
        <h4>訂單明細</h4>
        <el-table
          :data="product"
          style="width: 100%"
          :header-cell-style="tableHeader"
          :cell-style="tableRow"
        >
          <el-table-column type="expand">
            <div slot-scope="scope">
              <p>信箱：{{ scope.row.email }}</p>
              <p>電話：{{ scope.row.tel }}</p>
              <p>地址：{{ scope.row.address }}</p>
            </div>
          </el-table-column>
          <el-table-column prop="title" label="商品名稱" />
          <el-table-column prop="count" label="數量" />
          <el-table-column prop="unit" label="單位" />
          <el-table-column prop="price" label="單價" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckOrder',
  data () {
    return {
      order: [
        {
          name: '周昱澄',
          date: '2021-08-17',
          checkPaid: '尚未付款',
          total: 5500,
          email: 'ben7152000@gamil.com',
          tel: '0915768987',
          address: '新北市某某區'
        }
      ],
      product: [
        {
          title: 'AIDA 1 初級自由潛水課程',
          count: 1,
          unit: '天',
          price: 5500
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
.check-order {
  padding: 64px 0 0;
}

h2 {
  color: #fff;
}

h4 {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 16px 0;
}

::v-deep .el-icon {
  font-weight: 900;
  color: #E37E0C;
}

::v-deep .el-table__expanded-cell {
  background: #333;
  p {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 100;
  }
  &:hover {
    background: #333 !important;
  }
}
</style>
