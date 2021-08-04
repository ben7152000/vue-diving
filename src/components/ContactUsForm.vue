<template>
  <section>
    <div class="container">
      <div class="row">
        <el-form @submit.prevent="submitAboutUsForm(formInfo)" novalidate ref="formInfo" :model="formInfo" :rules="rule">
          <div class="form-info">
            <div class="input-group">
              <div class="input">
                <label for="name">姓名 *</label><br>
                <el-form-item prop="name">
                  <el-input
                    type="text"
                    id="name"
                    placeholder="請輸入姓名 ..."
                    v-model="formInfo.name"
                  />
                </el-form-item>
              </div>
              <div class="input">
                <label for="phone">聯絡電話</label><br>
                <input
                  type="tel"
                  id="phone"
                  placeholder="0915-123-456..."
                  v-model="formInfo.tel"
                >
              </div>
              <div class="input">
                <label for="email">電子信箱 *</label><br>
                <input
                  type="email"
                  id="email"
                  placeholder="admin@gmail.com ..."
                  v-model="formInfo.email"
                >
              </div>
            </div>
            <div class="textarea">
              <label for="content">諮詢內容 *</label><br>
              <textarea
                id="content"
                placeholder="請輸入內容 ..."
                v-model="formInfo.desc"
              />
            </div>
          </div>
          <button>確認送出</button>
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
      rule: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitAboutUsForm (formName) {
      this.$refs.formInfo.validate(valid => {
        if (valid) {
          this.$notify({
            title: '成功',
            message: '感謝你寶貴的意見',
            type: 'success'
          })
        } else {
          this.$notify({
            title: '失敗',
            message: '表單錯誤',
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
form {
    display: flex;
    align-items: center;
    flex-direction: column;
    > .form-info {
      border: 1px solid #fff;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 64px 48px;
      > .input-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
        > .input {
          width: 30%;
          > span {
            color: #b31414;
            display: inline-block;
            padding: 16px 0 0;
            font-size: 1.2rem;
            font-weight: 700;
          }
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
        }
      }
    }
  }

::v-deep .el-input__inner {
  background: lighten(#000, 30%);
  text-align: center;
  border-color: #c0c4cc;
  color:#000
}

label {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  margin-bottom: 8px;
}

textarea {
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

button {
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
