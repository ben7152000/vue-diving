<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="img">
            <img src="../static/ServiceItem/service-item-1.jpeg" alt="潛水旅遊">
          </div>
          <div class="txt">
            <span>NO.1</span>
            <h2>潛水旅遊</h2>
            <p>AIDA潛水中心，提供最專業的潛水教學課程。過內外多元課程移地訓練，可以渡假學潛水，輕鬆取得專業潛水證照。</p>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img src="../static/ServiceItem/service-item-2.jpeg" alt="裝備銷售與維修">
          </div>
          <div class="txt">
            <span>NO.2</span>
            <h2>裝備銷售與維修</h2>
            <p>專業潛水器材供應商，提供最專業銷售與維修服務，品質絕對有保固。引進國外最優質潛水周邊商品。</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="img">
            <img src="../static/ServiceItem/service-item-3.jpeg" alt="潛水旅遊">
          </div>
          <div class="txt">
            <span>NO.3</span>
            <h2>潛水旅遊</h2>
            <p>行程、潛點、渡假村...完整規劃，一手包，揪團、客製、Mini Tour自由行，任君選。</p>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img src="../static/ServiceItem/service-item-4.jpeg" alt="潛水會員">
          </div>
          <div class="txt">
            <span>NO.4</span>
            <h2>潛水會員</h2>
            <p>加入會員，可以得知我們的最新資訊，有購買商品優惠。</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="img">
            <img src="../static/ServiceItem/service-item-5.jpeg" alt="絕佳地點">
          </div>
          <div class="txt">
            <span>NO.5</span>
            <h2>絕佳地點</h2>
            <p>龍洞四號第一間，停車方便、盥洗方便、休息方便，讓你上課舒適又安心。</p>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img src="../static/ServiceItem/service-item-6.jpeg" alt="後勤補給">
          </div>
          <div class="txt">
            <span>NO.6</span>
            <h2>後勤補給</h2>
            <p>結合小雜貨店風格，販賣各種食物，讓你在上課或休息時，可以馬上補充體力。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceItem'
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.card {
  width: 50%;
  padding: 16px;
  position: relative;
  > .img {
    height: 500px;
  }
  > .txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 70%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    > span {
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background: lighten(#E37E0C, 10%);
      color: #fff;
      border-radius: 50%;
      font-weight: 900;
    }
    > h2 {
      font-weight: 900;
      font-size: 1.8rem;
      padding: 16px 0;
    }
    > p {
      font-size: 1.2rem;
    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
