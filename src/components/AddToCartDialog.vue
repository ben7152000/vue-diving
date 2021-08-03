<template>
  <el-dialog :visible.sync="dialogVisible" width="80%">
    <div class="row">
      <div class="img">
        <img src="../static/Product/snorkeling-1.jpeg" alt="product" />
      </div>
      <div class="info">
        <h1>AIDA 1 初級自由潛水課程</h1>
        <p>NT$ 5000</p>
        <el-form status-icon>
          <label>日期</label>
          <el-form-item prop="date">
            <el-date-picker
              type="date"
              placeholder="請選擇日期"
              style="width: 100%"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
            />
          </el-form-item>
          <label>時段</label>
          <el-form-item prop="time">
            <el-time-select
              :picker-options="{
                  start: '07:00',
                  step: '02:00',
                  end: '15:00',
                }"
              placeholder="請選擇時段"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item >
            <el-select placeholder="請選擇報名人數" style="width: 100%" value="123">
              <el-option label="num" value="num">選購 1 人</el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="btn-wrapper">
          <button>加入購物車</button>
          <button>立即購買</button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddToCartDialog',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleOpen () {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.row {
  display: flex;
  > .img {
    flex: 1;
    padding: 16px;
  }
  > .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
  }
}

h1 {
  font-size: 2rem;
}

p {
  font-weight: 600;
  font-size: 20px;
  color: #44607a;
}

label {
  display: inline-block;
  font-size: 1rem;
  padding: 16px 0;
}

button {
  width: 100%;
  border: none;
  outline: none;
  padding: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  &:first-child {
    margin-bottom: 16px;
    color: #E37E0C;
    background: #ddd;
    transition: .5s ease;
    &:hover {
      background: darken(#ddd, 10%);
    }
  }
  &:last-child {
    color: #fff;
    background: #E37E0C;
    transition: .5s ease;
    &:hover {
      background: lighten(#E37E0C, 10%);
    }
  }
}

.el-input, .el-textarea {
  font-size: 1rem;
}

</style>
