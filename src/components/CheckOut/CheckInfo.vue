<template>
  <div class="container">
      <div class="row">
        <el-table
          style="width: 100%"
          :header-cell-style="tableHeader"
          :cell-style="tableRow"
          :data="tableData"
        >
          <el-table-column prop="title" label="商品名稱" width="280" />
          <el-table-column prop="date" label="日期" width="140" />
          <el-table-column prop="time" label="時段" width="140" />
          <el-table-column label="數量" width="200">
            <div slot-scope="scope">
              <span class="addAndSub">-</span>
              <span>{{ scope.row.count }}</span>
              <span class="addAndSub">+</span>
            </div>
          </el-table-column>
          <el-table-column prop="unit" label="單位" width="180" />
          <el-table-column prop="price" label="單價" width="180" />
          <el-table-column label="小計" width="180">
            <div slot-scope="scope">
              <span>{{ scope.row.price * scope.row.count }}</span>
            </div>
          </el-table-column>
          <el-table-column>
            <div>
              <span><font-awesome-icon icon="trash" /></span>
            </div>
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CheckInfo',
  data () {
    return {
      tableData: [
        {
          title: 'AIDA 1 初級自由潛水員課程',
          date: '2021-08-18',
          time: '1',
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
.el-table {
  margin-top: 64px;
}
</style>
