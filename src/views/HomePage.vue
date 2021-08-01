<template>
  <div class="homepage">
    <Banner />
    <ServerLocation />
    <Courses />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import ServerLocation from '../components/ServerLocation'
import Courses from '../components/Courses'
export default {
  name: 'HomePage',
  components: {
    Banner,
    ServerLocation,
    Courses
  }
}
</script>

<style lang="scss" scoped>

</style>
