<template>
  <section>
    <div class="container">
      <div class="row">
        <form>
          <div class="form-info">
            <div class="input-group">
              <div class="input">
                <label for="name">姓名 *</label><br>
                <input type="text" id="name" placeholder="請輸入姓名 ...">
              </div>
              <div class="input">
                <label for="phone">聯絡電話</label><br>
                <input type="tel" id="phone" placeholder="0915-123-456...">
              </div>
              <div class="input">
                <label for="email">電子信箱 *</label><br>
                <input type="email" id="email" placeholder="admin@gmail.com ...">
              </div>
            </div>
            <div class="textarea">
              <label for="content">諮詢內容 *</label><br>
              <textarea id="content" placeholder="請輸入內容 ..." />
            </div>
          </div>
          <button>確認送出</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUsForm'
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
        margin-bottom: 32px;
        > .input {
          flex: 1;
          > input {
            width: 360px;
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
