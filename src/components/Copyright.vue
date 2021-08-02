<template>
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="left">
          <h2>龍洞岬潛水中心</h2>
          <h2>Copyright © 2021 All Rights Reserved.</h2>
        </div>
        <div class="right">
          <ul>
            <li>營業時間：每日早上05:00-下午18:30</li>
            <li>服務地點：新北市貢寮區龍洞街1-5號</li>
            <li>服務電話：0955-857-339</li>
            <li>電子郵件：bang92830@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: flex-end;
  padding: 50px 0;
  > .left {
    flex: 1;
    color: #fff;
    > h2 {
      padding: 8px;
      font-weight: 300;
    }
  }
  > .right {
    flex: 1;
    > ul {
      display: flex;
      flex-wrap: wrap;
      > li {
        width: 50%;
        padding: 8px 8px 8px;
        font-size: 1.2rem;
        font-weight: 300;
        color: darken(#fff, 50%);
        list-style: none;
      }
    }
  }
}
</style>
