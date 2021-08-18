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
          <el-table-column prop="count" label="數量" width="200">
            <div slot-scope="scope" class="count">
              <span class="addAndSub" @click="subItem(scope.$index)">-</span>
              <span>{{ scope.row.count }}</span>
              <span class="addAndSub" @click="addItem(scope.$index)">+</span>
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
            <div slot-scope="scope">
              <span @click="removeItem(scope.$index)" class="trash"><font-awesome-icon icon="trash"/></span>
            </div>
          </el-table-column>
        </el-table>
        <p>總計：<span>NT $ {{ total }}</span></p>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CheckInfo',
  data () {
    return {
      tableData: [],
      tableHeader: {
        color: '#fff',
        background: '#333',
        fontSize: '1.2rem',
        fontWeight: '300',
        textAlign: 'center',
        padding: '16px 0 24px'
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
    this.tableData = this.items
  },
  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['total'])
  },
  methods: {
    ...mapMutations('cart', ['addItem', 'subItem', 'removeItem'])
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 64px;
}

.count {
  display: flex;
  justify-content: center;
  > .addAndSub {
    display: inline-block;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    font-weight: 900;
    background: #242323;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    margin: 0 16px;
  }
}

.trash {
  display: inline-block;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-weight: 900;
  cursor: pointer;
  transition: .5s ease;
  &:hover {
    color: red;
  }
}

p {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 24px;
  text-align: end;
}
</style>
