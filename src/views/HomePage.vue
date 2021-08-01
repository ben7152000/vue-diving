<template>
  <div class="homepage">
    <Banner />
    <ServerLocation />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import ServerLocation from '../components/ServerLocation'
export default {
  name: 'HomePage',
  components: {
    Banner,
    ServerLocation
  }
}
</script>

<style lang="scss" scoped>

</style>
