<template>
<section>
  <div class="container">
    <div class="row">
      <div class="left">
        <div class="img">
          <img src="../static/aboutUs-1.jpeg" alt="全方位一站式的龍洞岬裝備服務中心">
        </div>
      </div>
      <div class="right">
        <div class="txt">
          <h2>全方位一站式的龍洞岬裝備服務中心</h2>
          <h4>全方位潛水教學</h4>
          <p>龍洞岬潛水中心為專業的潛水教學及裝備出租，我們擁有強大的專業資深師資，並擁有國際潛水認證標準、國際認證教學系統</p><br>
          <p>除了擁有最有經驗的資深教練群更領先業界開創出北海岸潛水深度，與在地其他店家多年開發合作經驗，同時擁有最佳都後勤補給地點</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'AboutUsIntro'
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  position: relative;
  > .left {
    width: 60%;
    > .img {
      height: 500px;
    }
  }
  > .right {
    width: 55%;
    background: rgba(255, 255, 255, .8);
    position: absolute;
    height: 500px;
    left: 45%;
    top: 20%;
    padding: 16px;
    > .txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #000;
      border: 1px solid #999;
      > h2 {
        font-size: 2rem;
      }
      > h4 {
        font-size: 1.5rem;
        padding: 16px 0;
      }
      > p {
        font-size: 1.2rem;
        padding: 0 32px;
        text-align: center;
        line-height: 2;
      }
    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
