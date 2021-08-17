<template>
    <div class="container">
      <div class="row">
        <el-form :model="formInfo" :rules="rules" ref="formInfo">
          <div class="form-info">

            <div class="input-group">
              <el-form-item prop="name" label="姓名" class="input">
                <el-input
                  type="text"
                  id="name"
                  placeholder="請輸入您的姓名 ..."
                  v-model="formInfo.name"
                />
              </el-form-item>
              <el-form-item prop="email" label="電子信箱" class="input">
                <el-input
                  type="email"
                  id="email"
                  placeholder="請輸入您的信箱 ..."
                  v-model="formInfo.email"
                />
              </el-form-item>
            </div>

            <div class="input-group">
              <el-form-item prop="tel" label="聯絡電話" class="input">
                <el-input
                  type="text"
                  id="phone"
                  placeholder="請輸入您的手機 ..."
                  v-model="formInfo.tel"
                />
              </el-form-item>
              <el-form-item prop="address" label="地址" class="input">
                <el-input
                  type="text"
                  id="address"
                  placeholder="請輸入您的地址 ..."
                  v-model="formInfo.address"
                />
              </el-form-item>
            </div>

            <el-form-item prop="desc" label="備註" class="input">
              <el-input
                type="textarea"
                id="desc"
                placeholder="請輸入備註 ..."
                v-model="formInfo.desc"
              />
            </el-form-item>

          </div>
        </el-form>
      </div>
    </div>
</template>

<script>

export default {
  name: 'CheckForm',
  data () {
    return {
      formInfo: {
        name: '',
        email: '',
        tel: '',
        address: '',
        desc: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '此欄為必填',
            trigger: 'blur'
          }
        ],
        tel: [
          {
            required: true,
            message: '此欄為必填',
            trigger: 'blur'
          },
          {
            pattern: /^09\d{8}$/,
            message: '格式不符，須為 10 碼數字且不含符號（eg. 0912345678）',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: '此欄為必填',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Email 格式不正確',
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            message: '此欄為必填',
            trigger: 'blur'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  .form-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 64px 48px 0;
    .input-group {
      display: flex;
      justify-content: space-between;
      > .input {
        width: 45%;
      }
    }
  }
}

::v-deep .el-form-item {
  display: flex;
  flex-direction: column;
  padding: 24px 0;
}

::v-deep .el-form-item__content {
  display: flex;
  align-items: center;
  width: 100%;
}

::v-deep .el-form-item__label {
  text-align: start;
  margin-bottom: 8px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  display: inline-block;
}

::v-deep .el-input__inner {
  width: 100%;
  height: 50px;
  background: lighten(#000, 30%);
  border: 1px solid #fff;
  font-size: 1.2rem;
  padding-left: 16px;
  letter-spacing: 1.5px;
  color: #fff;
}

::v-deep .el-textarea__inner {
  width: 100%;
  height: 300px;
  background: lighten(#000, 30%);
  border: 1px solid #fff;
  padding: 16px;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  color: #fff;
  &:valid, &:focus, &:active {
    outline: none;
  }
}
</style>
