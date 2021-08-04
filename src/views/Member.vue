<template>
  <section>

    <Breadcrumb :name="isShowWay ? '會員專區' : '會員資料修改'"/>
    <Subtitle subtitle="會員專區"/>

    <section>
      <div class="container">
        <div class="row">
          <span :class="{ on: isShowWay }" @click="isShowWay = true">課程報名訂單</span>
          <span :class="{ on: !isShowWay }" @click="isShowWay = false">會員資料修改</span>
        </div>
      </div>
    </section>

    <CourseOrder v-if="isShowWay"/>

    <MemberFix v-else/>

  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'
import CourseOrder from '../components/CourseOrder'
import MemberFix from '../components/MemberFix'

export default {
  name: 'Member',
  components: {
    Breadcrumb,
    Subtitle,
    CourseOrder,
    MemberFix
  },
  data () {
    return {
      isShowWay: true // ture 為報名訂單, false 為會員資料修改
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  > span {
    display: inline-block;
    width: 200px;
    text-align: center;
    padding: 16px;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: #333;
    border-bottom: 4px solid #333;
    cursor: pointer;
    transition: .5s ease;
    &.on {
      color: #fff;
      border-bottom: 4px solid #fff;
    }
  }
}
</style>
