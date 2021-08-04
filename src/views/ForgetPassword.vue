<template>
  <section>

    <Breadcrumb name="忘記密碼"/>
    <Subtitle subtitle="忘記密碼"/>

    <section>
      <div class="container">
        <div class="row">
          <form>
            <div class="input">
              <label for="account">會員帳號</label>
              <input type="tel" id="account" placeholder="請填入手機號碼 ...">
            </div>
            <button>確認送出</button>
          </form>
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
