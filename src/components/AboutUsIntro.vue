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
  > .left {
    width: 60%;
    > .img {
      height: 500px;
    }
  }
  > .right {
    position: absolute;
    right: 0;
    top: 50%;
    background: #fff;
    opacity: .3;
    > .txt {
      height: 500px;
      color: #000;
      z-index: 3;

    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
