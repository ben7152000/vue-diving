<template>
  <section>
    <Subtitle subtitle="執照課程"/>
    <div class="container container-courses">
      <div class="img">
        <img src="../static/course-1.jpeg" alt="AIDA1潛水課程" v-if="isHover===0">
        <img src="../static/course-2.jpeg" alt="AIDA2潛水課程" v-if="isHover===1">
        <img src="../static/course-3.jpeg" alt="AIDA3潛水課程" v-if="isHover===2">
      </div>
      <div class="info">
        <div class="icon">
          <font-awesome-icon icon="address-card" />
        </div>
        <ul>
          <li @mousemove="isHover = 0">AIDA 1 初級自由潛水員</li>
          <li @mousemove="isHover = 1">AIDA 2 進階自由潛水員</li>
          <li @mousemove="isHover = 2">AIDA 3 專業自由潛水員</li>
          <li>-MORE-</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Subtitle from './Subtitle'
export default {
  name: 'Courses',
  components: {
    Subtitle
  },
  data () {
    return {
      isHover: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.container-courses {
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
}

.img {
  flex: 1;
  height: 500px;
  position: relative;
  left: 30px;
  > img {
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 1px solid #fff;
  height: 500px;
  transform: translate(-30px,30px);
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    opacity: .3;
    z-index: -1;
  }
  > .icon {
    position: absolute;
    text-align: center;
    top: -50px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 3rem;
    border-radius: 50%;
    background: #D8D8D8;
    color: #000;
  }
  > ul {
    width: 100%;
    text-align: center;
    padding: 64px 64px 32px;
    > li {
      list-style: none;
      font-size: 1.8rem;
      font-weight: 700;
      margin-top: 16px;
      padding: 16px;
      width: 100%;
      border-bottom: 2px dashed #fff;
      transition: color .5s ease;
      &:hover {
        color: #E37E0C;
      }
      &:last-child {
        border-bottom: none;
        color: lighten(#000, 30%);
      }
    }
  }
}
</style>
