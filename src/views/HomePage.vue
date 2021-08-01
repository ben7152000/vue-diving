<template>
  <div class="homepage">
    <Banner />
    <ServerLocation />
    <Courses />
    <SmallBanner />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import ServerLocation from '../components/ServerLocation'
import Courses from '../components/Courses'
import SmallBanner from '../components/SmallBanner'
export default {
  name: 'HomePage',
  components: {
    Banner,
    ServerLocation,
    Courses,
    SmallBanner
  }
}
</script>

<style lang="scss" scoped>

</style>
