<template>
  <div class="homepage">
    <Banner />
    <ServerLocation />
    <Courses />
    <SmallBanner />
    <Introduce />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import ServerLocation from '../components/ServerLocation'
import Courses from '../components/Courses'
import SmallBanner from '../components/SmallBanner'
import Introduce from '../components/Introduce'
export default {
  name: 'HomePage',
  components: {
    Banner,
    ServerLocation,
    Courses,
    SmallBanner,
    Introduce
  }
}
</script>

<style lang="scss" scoped>

</style>
