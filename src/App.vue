<template>
  <div id="app" class="main-container">
    <Navbar />
    <keep-alive>
      <main>
        <router-view/>
      </main>
    </keep-alive>
    <Footer />
    <Copyright />
    <SocialMedia />
    <ShoppingCart @click.native="openDrawer" />
    <ShoppingDrawer ref="drawer" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import SocialMedia from './components/SocialMedia'
import ShoppingCart from './components/ShoppingCart'
import ShoppingDrawer from './components/ShoppingDrawer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Copyright,
    SocialMedia,
    ShoppingCart,
    ShoppingDrawer
  },
  methods: {
    openDrawer () {
      this.$refs.drawer.openDrawer()
    }
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
