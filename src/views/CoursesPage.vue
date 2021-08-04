<template>
  <section>

    <Breadcrumb name="執照課程"/>
    <Subtitle subtitle="執照課程"/>

    <section>
      <div class="container">
        <div class="row">
          <div class="card" v-for="course in coursesList" :key="course.id">
            <h2>{{ course.title }}</h2>
            <div @click="courseDetail(course.en)" class="link">
              <img :src="require('../static/Course/'+course.img)" :alt="course.title">
              <span>了解更多</span>
            </div>
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
  },
  data () {
    return {
      coursesList: this.$store.state.coursesAbout.coursesList
    }
  },
  created () {
    this.$store.dispatch('coursesAbout/getCourseListInfo')
  },
  methods: {
    courseDetail (en) {
      this.$router.push({
        name: 'CoursePage',
        params: { id: en }
      })
    }
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
  > .link {
    display: inline-block;
    width: 100%;
    height: 350px;
    cursor: pointer;
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
