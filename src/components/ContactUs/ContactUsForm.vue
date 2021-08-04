<template>
  <section>
    <div class="container">
      <div class="row">
        <el-form :model="formInfo" :rules="rules" ref="formInfo">
          <div class="form-info">
            <div class="input-group">
                <el-form-item prop="name" label="姓名" class="input">
                  <el-input
                    type="text"
                    id="name"
                    placeholder="請輸入姓名 ..."
                    v-model="formInfo.name"
                  />
                </el-form-item>
              <el-form-item prop="tel" label="聯絡電話" class="input">
                <el-input
                  type="text"
                  id="phone"
                  placeholder="0915-123-456 ..."
                  v-model="formInfo.tel"
                />
              </el-form-item>
              <el-form-item prop="email" label="電子信箱" class="input">
                <el-input
                  type="email"
                  id="email"
                  placeholder="admin@gmail.com ..."
                  v-model="formInfo.email"
                />
              </el-form-item>
            </div>
            <el-form-item class="textarea" prop="desc" label="諮詢內容">
              <el-input
                type="textarea"
                id="content"
                placeholder="請輸入內容 ..."
                v-model="formInfo.desc"
              />
            </el-form-item>
          </div>
          <el-button @click.prevent="submitHandler('formInfo')">確認送出</el-button>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUsForm',
  data () {
    return {
      formInfo: {
        name: '',
        tel: '',
        email: '',
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
        desc: [
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
    submitHandler (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$notify({
            title: '成功',
            message: '感謝你寶貴的意見',
            type: 'success'
          })
          this.formInfo.name = ''
          this.formInfo.tel = ''
          this.formInfo.email = ''
          this.formInfo.desc = ''
        } else {
          return false
        }
      })
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
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 64px 48px;
    .input-group {
      display: flex;
      justify-content: space-between;
      > .input {
        width: 30%;
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

.el-button {
  cursor: pointer;
  margin-top: 64px;
  color: #fff;
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
