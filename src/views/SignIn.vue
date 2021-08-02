<template>
  <section>
    <Breadcrumb name="會員登入"/>
    <Subtitle subtitle="會員登入"/>
    <section>
      <div class="container">
          <form>
            <div class="input">
              <label for="account">會員帳號</label>
              <input type="tel" id="account" placeholder="請填入手機號碼 ...">
            </div>
            <div class="input">
              <label for="password">會員密碼</label>
              <input type="tel" id="password" placeholder="請填入密碼 ...">
            </div>
            <p>溫馨提醒：未註冊帳號的手機，登入時將會自動註冊</p>
            <router-link to="/forget-password">忘記密碼？</router-link>
            <button>確認送出</button>
          </form>
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
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  > .input {
    display: flex;
    align-items: center;
    padding: 24px;
    > input {
      width: 600px;
      height: 50px;
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

label {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  margin-right: 32px;
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
