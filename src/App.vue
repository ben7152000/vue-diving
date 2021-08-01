<template>
  <div id="app" class="main-container">
    <Navbar />
    <main>
      <router-view/>
    </main>
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Copyright
  }
}
</script>

<style lang="scss">
@import "scss/main";

main {
  margin-top: 60px;
  flex: 1;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
}

section {
  padding-top: 100px;
}

</style>
