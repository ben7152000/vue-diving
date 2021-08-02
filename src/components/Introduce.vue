<template>
  <section>
    <div class="container container-Introduce">
      <div class="intro">
        <h2>全方位一站式的龍洞岬裝備服務中心</h2>
        <p>龍洞岬潛水中心為專業的潛水教學及裝備出租，我們擁有強大的專業資深師資，並擁有國際潛水認證標準、國際認證教學系統</p><br>
        <p>除了擁有最有經驗的資深教練群更領先業界開創出北海岸潛水深度，與在地其他店家多年開發合作經驗，同時擁有最佳都後勤補給地點</p>
      </div>
      <div class="contact">
        <h2>聯絡我們</h2>
        <p>您對本網站若有任何建議、批評或指教，請例用這裡的信箱告訴我們</p>
        <router-link to="/contact-us">填寫聯絡表單</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Introduce'
}
</script>

<style lang="scss" scoped>
.container-Introduce {
  padding: 100px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #242323;
}

.intro, .contact {
  width: 60%;
  color: #fff;
  text-align: center;
  > h2 {
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 2px;
    padding: 16px;
    margin-bottom: 32px;
  }
  > p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2;
  }
}

.intro {
  margin-bottom: 100px;
}

.contact {
  > a {
    margin-top: 64px;
    color: #fff;
    display: inline-block;
    font-size: 1.3rem;
    padding: 16px 24px;
    border-radius: 16px;
    background: #E37E0C;
    transition: color .5s ease,background-color .5s ease;
    &:hover {
      color: #E37E0C;
      background: #fff;
    }
  }
}
</style>
