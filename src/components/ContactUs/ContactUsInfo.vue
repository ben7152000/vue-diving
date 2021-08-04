<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="left">
          <p>親愛的貴賓您好，如果您想更了解我們或是其他有任何疑問，歡迎您線上留言給我們，收到您的訊息後，我們盡快請專人回覆您的問題，謝謝您 !!</p><br>
          <p>* 請務必填寫</p>
        </div>
        <div class="right">
          <h2>龍洞岬潛水裝備中心</h2>
          <h4>電子信箱：</h4>
          <p>bang92830@gmail.com ( 課程教學、裝備出租 )</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUsInfo'
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: flex-start;
  color: #fff;
  > .left {
    flex: 1;
    background: #242323;
    padding: 64px;
    > p {
      font-size: 1.3rem;
      line-height: 2;
    }
  }
  > .right {
    flex: 1;
    padding: 64px;
    > h2 {
      font-size: 2.5rem;
    }
    > h4 {
      font-size: 1.5rem;
      margin: 16px 0;
    }
    > p {
      font-size: 1.2rem;
    }
  }
}
</style>
