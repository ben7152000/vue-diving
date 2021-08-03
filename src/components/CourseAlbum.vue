<template>
  <div class="container">
    <div class="row">
      <div class="img">
        <img src="../static/Course/course-1.jpeg" alt="">
      </div>
      <div class="txt">
        <h4>玩水也要美美的</h4>
        <p>龍洞岬提供專屬的臨岸沖水區，臨海帳篷休息區，就是要讓美美的您，與我們一同輕鬆自在的享受，大自然給予我們的美好。</p>
      </div>
      <div class="img">
        <img src="../static/Course/course-1.jpeg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="img">
        <img src="../static/Course/course-1.jpeg" alt="">
      </div>
      <div class="img">
        <img src="../static/Course/course-1.jpeg" alt="">
      </div>
      <div class="img">
        <img src="../static/Course/course-1.jpeg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="img">
        <img src="../static/Course/course-1.jpeg" alt="">
      </div>
      <div class="txt">
        <h4>拋開煩惱盡情享受</h4>
        <p>完善的保險制度以及水上救援，讓您在美好的假期，盡情釋放自己，享受海洋給您的滿滿正能量。</p>
      </div>
      <div class="img">
        <img src="../static/Course/course-1.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseAlbum'
}
</script>

<style lang="scss" scoped>
.container {
  padding: 64px 0;
}
.row {
  display: flex;
  justify-content: space-between;
  .img{
    flex: 1;
  }
  .txt {
    flex: 1;
    color: #fff;
    background: #E37E0C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h4 {
      font-size: 2.5rem;
      margin-bottom: 16px;
    }
    p {
      font-size: 1.4rem;
      font-weight: 300;
      padding: 0 16px;
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
