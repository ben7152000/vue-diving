<template>
  <section>

    <Breadcrumb name="會員登入"/>
    <Subtitle subtitle="會員登入"/>

    <section>
      <div class="container">
          <el-form :model="formAccount" status-icon :rules="rules" ref="formAccount">
            <el-form-item label="會員帳號" prop="account">
              <el-input type="tel" id="account" placeholder="請填入手機號碼 ..." v-model="formAccount.account" />
            </el-form-item>
            <el-form-item label="會員密碼" prop="password">
              <el-input type="tel" id="password" placeholder="請填入密碼 ..." v-model="formAccount.password"/>
            </el-form-item>
            <p>溫馨提醒：未註冊帳號的手機，登入時將會自動註冊</p>
            <router-link to="/forget-password">忘記密碼？</router-link>
            <el-button @click="submitHandler('formAccount')">確認送出</el-button>
          </el-form>
      </div>
    </section>

  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'

export default {
  name: 'SignIn',
  components: {
    Breadcrumb,
    Subtitle
  },
  data () {
    return {
      formAccount: {
        account: '',
        password: ''
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
        ],
        password: [
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/member')
          this.$message('成功登入')
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
  > p {
    color: #fff;
    font-size: 1.2rem;
    margin: 32px 0;
  }
  > a {
    color: #E37E0C;
    font-size: 1.1rem;
    font-weight: 300;
  }
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
