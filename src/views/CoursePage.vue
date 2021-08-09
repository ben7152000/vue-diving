<template>
<section>

  <Breadcrumb name="執照課程"/>
  <Subtitle subtitle="執照課程"/>

  <div class="container">
    <h2>{{ filterCourse[0].title }}</h2>
  </div>

  <section>
    <div class="container">
      <div class="row">
        <div class="img">
          <img :src="require('../static/Course/'+filterCourse[0].img)" :alt="filterCourse[0].title">
        </div>
        <p>{{ filterCourse[0].desc }}</p>
      </div>
    </div>
  </section>

  <CourseBanner />

  <CourseCard />

  <CourseAlbum />

  <Subtitle subtitle="報名費用"/>

  <div class="container">
    <div class="budget">
      <p>報名費用： <span>{{ filterCourse[0].price }}</span>元 ( 每人 )</p>
    </div>
  </div>

  <Subtitle subtitle="課程介紹"/>

  <div class="container">
    <div class="intro">
      <h3>課程資格</h3>
      <ul>
        <li>1. 需年滿 <span>18</span> 歲(16~17歲者需家長陪同)</li>
        <li>2. 無特殊疾病(若有氣胸、氣喘、心臟疾病、神經系統、心血管系統等疾病，需要醫生檢查後確認可以進行自由潛水活動並簽署健康申明書使得參加)</li>
      </ul>
    </div>
    <div class="intro">
      <h3>課程內容</h3>
      <ul>
        <li
          v-for="(content, index) in filterCourse[0].content"
          :key="index"
        >
          {{ index + 1 }}. {{ content }}
        </li>
      </ul>
    </div>
    <div class="intro">
      <h3>課程費用包含</h3>
      <ul>
        <li
          v-for="(budgeContent, index) in filterCourse[0].budgeContent"
          :key="index"
        >
          {{ index + 1 }}. {{ budgeContent }}
        </li>
        <li><span>※</span>訓練時間為 <span>{{ filterCourse[0].time }}</span>{{ filterCourse[0].unit }}</li>
        <li><span>※</span>小班制度 ( {{ filterCourse[0].limit }}人即可成班，最多四人 )</li>
      </ul>
    </div>
  </div>

  <Subtitle subtitle="其他說明"/>

  <div class="container">
    <div class="other">
      <h3>課程須知</h3>
      <ul>
        <li>1. 如有近視者請自備隱形眼鏡</li>
        <li>2. 若當日氣候及浪況不適合下水需改期會以LINE通知</li>
        <li>3. 課程進行中遇天候不佳等突發狀況，安全起見教練有權停止上課擇日補課不得退款</li>
        <li>4. 課程前4-10天內因個人因素取消需負擔一成行政處理費用,課程前3天取消恕不退款 (名額可轉讓)</li>
        <li>5. 如果於課程時間內無法取得證照資格，每月將另行公布團練及補考時間</li>
      </ul>
    </div>
    <div class="other">
      <h3>{{ filterCourse[0].applyInfo.title }}</h3>
      <ul>
        <li
          v-for="(applyInfo, index) in filterCourse[0].applyInfo.content"
          :key="index"
        >
          {{ index + 1 }}.{{ applyInfo.content }}<span>※</span>{{ applyInfo.notify }}</li>
      </ul>
    </div>
  </div>

  <Subtitle subtitle="前往報名"/>

  <div class="container">
    <div class="apply">
      <el-button @click.prevent.stop="handleOpenDialog">前往報名</el-button>
    </div>
  </div>

  <!-- 報名彈窗 -->
  <AddToCartDialog ref="dialog" :filterCourse="filterCourse[0]"/>

</section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'
import CourseBanner from '../components/CoursePage/CourseBanner'
import CourseCard from '../components/CoursePage/CourseCard'
import CourseAlbum from '../components/CoursePage/CourseAlbum'
import AddToCartDialog from '../components/AddToCartDialog'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CoursePage',
  components: {
    Breadcrumb,
    Subtitle,
    CourseBanner,
    CourseCard,
    CourseAlbum,
    AddToCartDialog
  },
  created () {
    this.getCourses()
  },
  computed: {
    ...mapState(['courses']),
    filterCourse () {
      return this.courses.filter(i => {
        return i.en === this.$route.params.id
      })
    }
  },
  methods: {
    ...mapActions(['getCourses']),
    handleOpenDialog () {
      this.$refs.dialog.handleOpen()
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #fff;
  padding: 64px 0 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.row  {
  display: flex;
  > .img {
    flex: 1;
    height: 400px;
  }
  > p {
    flex: 1;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 2.5rem;
    padding: 0 32px ;
  }
}

.budget {
  text-align: center;
  padding: 64px 0;
  > p {
    color: #aaa;
    font-size: 2rem;
    > span {
      color: #fff;
      font-size: 4rem;
      padding: 0 16px 0 0;
    }
  }
}

.intro {
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  > h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: 300;
    padding: 0 0 32px 32px;
  }
  > ul {
    > li {
      font-size: 1.2rem;
      list-style: none;
      color: #fff;
      padding: 8px 0;
      > span {
        color: #cb2323;
        font-size: 1.6rem;
        font-weight: 900;
        padding: 0 8px 0;
      }
    }
  }
}

.other {
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  &:last-child {
    padding-bottom: 64px;
  }
  > h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: 300;
    padding: 0 0 32px 32px;
  }
  > ul {
    > li {
      font-size: 1.2rem;
      list-style: none;
      color: #fff;
      padding: 8px 0;
      > span {
        color: #cb2323;
      }
    }
  }
}

.apply {
  text-align: center;
  .el-button {
    cursor: pointer;
    margin-top: 64px;
    color: #fff;
    font-size: 1.3rem;
    padding: 16px 32px;
    border-radius: 16px;
    outline: none;
    border: none;
    background: #E37E0C;
    transition: color .5s ease,background-color .5s ease;
    &:hover {
      color: #E37E0C;
      background: #fff;
    }
  }
}

</style>
