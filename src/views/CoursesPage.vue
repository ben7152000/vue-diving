<template>
  <section>
    <Breadcrumb name="執照課程"/>
    <Subtitle subtitle="執照課程"/>
    <section>
      <div class="container">
        <div class="row">
          <div class="card">
            <h2>體驗自由潛水</h2>
            <router-link to="/courses-page/experience">
              <img src="../static/Product/freediving-1.jpeg" alt="體驗自由潛水">
              <span>了解更多</span>
            </router-link>
          </div>
          <div class="card">
            <h2>AIDA 1 初級自由潛水課程</h2>
            <router-link to="/courses-page/aida-1">
              <img src="../static/Product/freediving-1.jpeg" alt="AIDA 1 初級自由潛水課程">
              <span>了解更多</span>
            </router-link>
          </div>
          <div class="card">
            <h2>AIDA 2 進階自由潛水課程</h2>
            <router-link to="/courses-page/aida-2">
              <img src="../static/Product/freediving-1.jpeg" alt="AIDA 2 進階自由潛水課程">
              <span>了解更多</span>
            </router-link>
          </div>
          <div class="card">
            <h2>AIDA3 專業自由潛水課程</h2>
            <router-link to="/courses-page/aida-3">
              <img src="../static/Product/snorkeling-1.jpeg" alt="AIDA 3 專業自由潛水課程">
              <span>了解更多</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'
export default {
  name: 'CoursesPage',
  components: {
    Breadcrumb,
    Subtitle
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 45%;
  margin: 0 auto 64px;
  > h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 16px;
  }
  > a {
    display: inline-block;
    width: 100%;
    height: 350px;
    > span {
      margin: 16px 0;
      padding: 16px 0;
      text-align: center;
      width: 100%;
      display: block;
      background: #111;
      color: #fff;
      font-size: 1.3rem;
      font-weight: 700;
      border-radius: 16px;
      transition: background-color .5s ease;
    }
  }
  &:hover {
    span {
      background: #E37E0C;
    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
