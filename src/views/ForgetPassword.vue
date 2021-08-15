<template>
  <section>

    <Breadcrumb name="忘記密碼"/>
    <Subtitle subtitle="忘記密碼"/>

    <section>
      <div class="container">
        <div class="row">
          <el-form :model="formAccount" status-icon :rules="rules" ref="formAccount">
              <el-form-item prop="account" label="會員帳號">
                <el-input id="account" placeholder="請填入手機號碼 ..." v-model="formAccount.account" />
              </el-form-item>
              <el-button @click.prevent="submitHandler('formAccount')">確認送出</el-button>
          </el-form>
        </div>
      </div>
    </section>

  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'

export default {
  name: 'ForgetPassword',
  components: {
    Breadcrumb,
    Subtitle
  },
  data () {
    return {
      formAccount: {
        account: ''
      },
      rules: {
        account: [
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
        ]
      }
    }
  },
  methods: {
    submitHandler (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/sign-in')
          setTimeout(() => {
            this.$message({
              message: '密碼為 123456',
              type: 'success'
            })
          }, 2000)
          // 清空
          this.account = ''
        } else {
          console.log('error submit!!')
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
  flex-direction: column;
  align-items: center;
}

::v-deep .el-form-item {
  display: flex;
  align-items: center;
  padding: 24px;
}

::v-deep .el-form-item__content {
  display: flex;
  align-items: center;
  width: 100%;
}

::v-deep .el-input__inner {
  width: 600px;
  height: 50px;
  background: lighten(#000, 30%);
  border: 1px solid #fff;
  font-size: 1.2rem;
  padding-left: 16px;
  letter-spacing: 1.5px;
  color: #fff;
}

::v-deep .el-form-item__label {
  width: 200px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  margin-right: 32px;
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
