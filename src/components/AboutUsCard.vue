<template>
  <div class="container">
    <div class="row">
      <ul>
        <li>
          <h2><span>-</span>教學體系</h2>
          <div class="content">
            <p>我們擁有強大的專業資深師資，並擁有國際潛水認證標準、國際認證教學系統，可以提供多家教學系統的認證</p>
          </div>
        </li>
        <li>
          <h2><span>-</span>硬體設施</h2>
          <div class="content">
            <span>服務門市：</span><p>位於東北角，龍洞四號第一間，店內陳列完整全品項的各式輕重裝，並提供教學、裝備等專業諮詢。並擁有影音視聽中心、資訊中心等等讓學員使用。</p>
            <span>室內教室：</span><p>教室位於新店捷運站附近，交通方便、提供完整的影音設備，優良的教學環境，讓學習效率提升</p>
            <span>訓練泳池：</span><p>目前訓練泳池使用南港運動中心五米深水區，那裡室內溫水、安全、加上交通方便，是理想的訓練地點。</p>
          </div>
        </li>
        <li>
          <h2><span>-</span>會員活動</h2>
          <div class="content">
            <p>課程結束後不用擔心成為潛水孤兒，我們有專業的潛水岬俱樂部，帶領你開啟你的潛水人生，實現海底活動的夢想。</p>
            <span>參加資格：</span>
            <p>您必須先成為龍洞岬會員</p>
            <span>享有好處：</span>
            <p>
              1. 加入俱樂部，立即贈送俱樂部精美會員禮 <br>
              2. 購買網路或是實體店面商品享有優惠會員價格 <br>
              3. 擁有不定時的第一手活動與特價消息
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsCard'
}
</script>

<style lang="scss" scoped>
.row {
  color: #fff;
  padding: 32px 64px;
  background: #444;
  > ul {
    display: flex;
    flex-direction: column;
    > li {
      list-style: none;
      display: flex;
      padding: 64px 0;
      &:not(:last-child) {
        border-bottom: 2px solid #666;
      }
      > h2 {
        width: 25%;
        font-size: 2rem;
        > span {
          margin-right: 8px;
        }
      }
      > .content {
        width: 75%;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        span {
          font-size: 1.2rem;
          font-weight: 700;
          color: #E37E0C;
          padding-bottom: 8px;
        }
      }
      p {
        font-size: 1.4rem;
        line-height: 1.6;
        color: #fff;
        padding-bottom: 16px;
      }
    }
  }
}

</style>
