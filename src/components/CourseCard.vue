<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="img">
          <img src="../assets/ProductIcon/team.png" alt="專業教練團隊">
        </div>
        <h4>專業教練團隊</h4>
        <p>集結潛水系統的優質教練，透過互相交流和討論，以各種多元化方式循循善誘的解決你所有疑難雜症。</p>
      </div>
      <div class="card">
        <div class="img">
          <img src="../assets/ProductIcon/place.png" alt="專屬訓練基地">
        </div>
        <h4>專屬訓練基地</h4>
        <p>擁有唯一自己專屬海邊基地，讓你加倍輕鬆的學習，真正實現「背上裝備、十步入水」的便利。</p>
      </div>
      <div class="card">
        <div class="img">
          <img src="../assets/ProductIcon/diving.png" alt="高級訓練裝備">
        </div>
        <h4>高級訓練裝備</h4>
        <p>進口熱銷的訓練裝備，美觀又實用的創造潛水樂趣，讓你隨時隨地跟上科技時尚的腳步。</p>
      </div>
    </div>
    <div class="row">
      <div class="card">
        <div class="img">
          <img src="../assets/ProductIcon/protection.png" alt="在乎你的安全">
        </div>
        <h4>在乎你的安全</h4>
        <p>我們視學員如親，水上救援系統及完善的保險制度，保障你潛水時可以安心開心又放心。</p>
      </div>
      <div class="card">
        <div class="img">
          <img src="../assets/ProductIcon/promotion.png" alt="重點式保證班">
        </div>
        <h4>重點式保證班</h4>
        <p>保證由資深專業教練擬定最適合你的國際教案，我們也保證能在期間完成所有教學課程。</p>
      </div>
      <div class="card">
        <div class="img">
          <img src="../assets/ProductIcon/friendship.png" alt="俱樂部大家庭">
        </div>
        <h4>俱樂部大家庭</h4>
        <p>結業後自動免費成為會員，裡面有數不清的兄弟姊妹，分享各自的潛水經驗、熱情的揪團共潛。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard'
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
  .card {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    > .img {
      width: 150px;
      height: 150px;
    }
    > h4 {
      font-size: 2rem;
      margin: 24px 0;
    }
    > p {
      font-size: 1.4rem;
      line-height: 1.6;
      width: 350px;
      text-align: center;
    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
