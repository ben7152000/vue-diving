<template>
  <section>
    <div class="container">
      <div class="row">
        <form>
          <div class="top">
            <div class="form-title">
              <font-awesome-icon icon="comment-dots" class="icon"/>
              <span>修改帳號資訊</span>
            </div>
            <div class="form-input">
              <div class="input">
                <label>會員帳號</label><br>
                <input type="text" disabled>
              </div>
              <div class="input">
                <label>會員舊密碼</label><br>
                <input type="password" placeholder="請輸入舊密碼">
              </div>
              <div class="input">
                <label>會員新密碼</label><br>
                <input type="password" placeholder="請輸入新密碼">
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="form-title">
              <font-awesome-icon icon="comment-dots" class="icon"/>
              <span>修改基本資料</span>
            </div>
            <div class="form-input">
              <div class="input-group-top">
                <div class="input">
                  <label>中文姓名</label><br>
                  <input type="text">
                </div>
                <div class="input">
                  <label>英文姓氏 ( 同護照 )</label><br>
                  <input type="text">
                </div>
                <div class="input">
                  <label>英文名字 ( 同護照 )</label><br>
                  <input type="text">
                </div>
                <div class="input">
                  <label>出生年月日</label><br>
                  <input type="text">
                </div>
                <div class="input">
                  <label>身分證字號</label><br>
                  <input type="text">
                </div>
                <div class="input">
                  <label>LIND ID</label><br>
                  <input type="text">
                </div>
                <div class="input">
                  <label>電話號碼</label><br>
                  <input type="tel">
                </div>
                <div class="input">
                  <label>鞋號</label><br>
                  <input type="text">
                </div>
                <div class="input">
                  <label>身高 ( cm )</label><br>
                  <input type="number">
                </div>
                <div class="input">
                  <label>體重 ( kg )</label><br>
                  <input type="number">
                </div>
              </div>
              <div class="input-group-bottom">
                <div class="input">
                  <label>信箱</label><br>
                  <input type="email">
                </div>
                <div class="input">
                  <label>地址</label><br>
                  <input type="text">
                </div>
                <div class="input">
                  <label>如何得知龍洞岬</label><br>
                  <select>
                    <option>請選擇</option>
                    <option value="網路查詢">網路查詢</option>
                    <option value="新聞媒體">新聞媒體</option>
                    <option value="報章雜誌">報章雜誌</option>
                    <option value="朋友介紹">朋友介紹</option>
                    <option value="其他">其他</option>
                  </select>
                </div>
              </div>
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
  name: 'MemberFix'
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  > .top {
    width: 100%;
    > .form-input {
      border: 1px solid #fff;
      display: flex;
      padding: 48px;
      > .input {
        width: 100%;
        > input {
          width: 90%;
        }
      }
    }
  }
  > .bottom {
    width: 100%;
    margin-top: 32px;
    > .form-input {
      border: 1px solid #fff;
      display: flex;
      flex-direction: column;
      padding: 48px;
      > .input-group-top {
        display: flex;
        flex-wrap: wrap;
        > .input {
          width: 20%;
          margin-bottom: 16px;
        }
      }
      > .input-group-bottom {
        display: flex;
        > .input {
          width: 30%;
          margin-right: 40px;
          > input {
            width: 100%;
          }
          > select {
            width: 100%;
          }
        }
      }
    }
  }
}

.form-title {
  color: #ccc;
  font-size: 2rem;
  margin-bottom: 24px;
  > .icon {
    margin-right: 16px;
  }
}

input {
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

select {
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

label {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  margin-bottom: 8px;
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
