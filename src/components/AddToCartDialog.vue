<template>
  <el-dialog :visible.sync="dialogVisible" width="80%">
    <div class="row">
      <div class="img">
        <img :src="require('../static/Course/'+filterCourse.img)" :alt="filterCourse.title" />
      </div>
      <div class="info">
        <h1>{{ filterCourse.title }}</h1>
        <p>NT$ {{ filterCourse.price }}</p>
        <el-form status-icon ref="submitForm" :rules="rules" :model="submitForm">
          <el-form-item prop="date" label="日期">
            <el-date-picker
              type="date"
              placeholder="請選擇日期"
              style="width: 100%"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              v-model="submitForm.date"
              :picker-options="pickerOptions"
            />
          </el-form-item>
          <el-form-item prop="time" label="時段">
            <el-time-select
              v-model="submitForm.time" :picker-options="{start: '07:00',step: '03:00',end: '16:00'}"
              placeholder="請選擇時段"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="人數">
            <el-select placeholder="請選擇報名人數" style="width: 100%" v-model="submitForm.selectedNum">
              <el-option :label="num" :value="num" v-for="num in 10" :key="num">選購 {{ num }} 人</el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="btn-group">
          <el-button @click="addCartForm('submitForm')">加入購物車</el-button>
          <el-button @click="buyNowHandler">立即購買</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddToCartDialog',
  props: {
    filterCourse: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      course: {},
      submitForm: {
        date: '',
        time: '',
        selectedNum: 1
      },
      pickerOptions: {
        disabledDate: time => {
          return time.getTime() < Date.now()
        }
      },
      rules: {
        date: [
          {
            required: true,
            message: '此欄為必填',
            trigger: 'blur'
          }
        ],
        time: [
          {
            required: true,
            message: '此欄為必填',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleOpen () {
      this.dialogVisible = true
    },
    addCartForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addToCartHandler()
        } else {
          return false
        }
      })
    },
    addToCartHandler () {
      // 複製一份
      this.course = this.filterCourse

      // 購物車資料
      const cartData = {
        courseId: this.course.id,
        title: this.course.title,
        price: this.course.price,
        img: this.course.img,
        qty: this.submitForm.selectedNum,
        date: this.submitForm.date,
        time: this.submitForm.time
      }

      // 建立購物車
      const cartList = []
      cartList.push(cartData)
      localStorage.setItem('cart', JSON.stringify(cartList))
      this.$message.success('商品已加入購物車')

      // 關閉彈窗
      this.dialogVisible = false

      // 清空表單
      this.resetDialogForm('submitForm')
    },
    buyNowHandler () {
      this.addToCartHandler()
      this.$router.push('/checkout')
    },
    resetDialogForm (formName) {
      this.$refs[formName].resetFields()
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
  color: #E37E0C;
}

::v-deep .el-form-item__label {
  font-size: 1.2rem;
  padding-bottom: 8px;
}

.el-button {
  width: 100%;
  border: none;
  outline: none;
  padding: 16px 0;
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
    margin: 0;
    &:hover {
      background: lighten(#E37E0C, 10%);
    }
  }
}

::v-deep .el-input__inner {
  font-size: 1.2rem;
}

</style>
