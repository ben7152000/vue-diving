<template>
  <section>

    <Breadcrumb :name="isShowWay ? '龍洞岬介紹' : '服務項目'"/>
    <Subtitle :subtitle="isShowWay ? '龍洞岬介紹' : '服務項目'"/>

    <section>
      <div class="container">
        <div class="row">
          <span :class="{ on: isShowWay }" @click="isShowWay = true">龍洞岬介紹</span>
          <span :class="{ on: !isShowWay }" @click="isShowWay = false">服務項目</span>
        </div>
      </div>
    </section>

    <div v-if="isShowWay">

      <AboutUsIntro />

      <section>
        <div class="container">
          <h2>龍洞岬這兒到底有哪些優勢呢？</h2>
        </div>
      </section>

      <AboutUsCard />

    </div>

    <ServiceItem v-else />

  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'
import AboutUsIntro from '../components/AboutUs/AboutUsIntro'
import AboutUsCard from '../components/AboutUs/AboutUsCard'
import ServiceItem from '../components/AboutUs/ServiceItem'

export default {
  name: 'AboutUs',
  components: {
    Breadcrumb,
    Subtitle,
    AboutUsIntro,
    AboutUsCard,
    ServiceItem
  },
  data () {
    return {
      isShowWay: true // true 為介紹龍洞岬,false 為服務項目
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
      color: #E37E0C;
      border-bottom: 4px solid #E37E0C;
    }
  }
}

h2 {
  text-align: center;
  padding: 64px;
  color: #fff;
  font-size: 3rem;
}
</style>
