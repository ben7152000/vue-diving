<template>
  <nav class="navbar">
    <div class="container">
      <div class="row">
        <h1>
          <router-link to="/">LOGO</router-link>
        </h1>
        <ul>
          <router-link to="/about-us" tag="li">關於龍洞岬</router-link>
          <li>
            <router-link to="/courses-page">執照課程</router-link>
            <ul>
              <router-link to="/courses-page/experience" tag="li">體驗自由潛水課程</router-link>
              <router-link to="/courses-page/aida-1" tag="li">AIDA 1 初級自由潛水課程</router-link>
              <router-link to="/courses-page/aida-2" tag="li">AIDA 2 進階自由潛水課程</router-link>
              <router-link to="/courses-page/aida-3" tag="li">AIDA 3 專業自由潛水課程</router-link>
            </ul>
          </li>
          <li>
            <router-link to="/products">商品櫥窗</router-link>
            <ul>
              <router-link to="/products/snorkeling" tag="li">浮潛裝備</router-link>
              <router-link to="/products/freediving" tag="li">自潛裝備</router-link>
            </ul>
          </li>
          <router-link to="/contact-us" tag="li">聯絡我們</router-link>
          <router-link to="/sign-in" tag="li">會員專區</router-link>
        </ul>
        <div class="phone">
          <div class="toggle" @click="toggle = true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <ul class="nav-list" v-if="toggle">
        <font-awesome-icon icon="times" class="times" @click="toggle = false"/>
        <router-link to="/about-us" tag="li">關於龍洞岬</router-link>
        <router-link to="/courses-page" tag="li">執照課程</router-link>
        <router-link to="/products" tag="li">商品櫥窗</router-link>
        <router-link to="/contact-us" tag="li">聯絡我們</router-link>
        <router-link to="/sign-in" tag="li">會員專區</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['courses'],
  data () {
    return {
      toggle: false
    }
  },
  watch: {
    $route (to, from) {
      if (to.path === '/' || to.path === '/about-us' || to.path === '/courses-page' || to.path === '/products' || to.path === '/contact-us' || to.path === '/sign-in') {
        this.toggle = false
      }
    }

  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

.navbar {
  background-color: #000;
  position: fixed;
  width: 100%;
  z-index: 999;
}

.row {
  display: flex;
  align-items: center;
  color: #fff;
  > h1 {
    margin-right: auto;
    padding: 24px;
    font-size: 1.2rem;
    font-weight: 900;
    a {
      color: #fff;
      padding: 24px;
    }
  }
  > ul {
    display: flex;
    a {
      color: #fff;
    }
    > li {
      margin-right: 8px;
      padding: 24px;
      position: relative;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        > ul {
          opacity: 1;
          visibility: visible;
          transition: opacity .5s ease;
        }
      }
      > ul {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        left: 0;
        top: 72px;
        background: lighten(#000, 20%);
        width: 280px;
        > li {
          padding: 24px;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 700;
          transition: color .5s ease;
          &:hover {
            color: #E37E0C;
          }
        }
      }
    }
  }
  > .phone {
    display: none;
  }
}

.nav-list {
  display: none;
}

@media screen and (max-width: 768px) {
  .row {
    justify-content: space-between;
    > ul {
      display: none;
    }
    > .phone {
      display: block;
      padding: 24px;
      > .toggle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        > span {
          display: block;
          width: 30px;
          height: 4px;
          background: #fff;
          margin-top: 2px;
          margin-bottom: 2px;
        }
      }
    }
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: .8;
    z-index: 999;
    > .times {
      color: #fff;
      font-size: 2.5rem;
      position: absolute;
      top: 24px;
      right: 50px;
      z-index: 999;
      cursor: pointer;
      &:hover {
        color: #E37E0C;
      }
    }
    > li {
      color: #fff;
      font-size: 2.5rem;
      padding: 24px 0;
      transition: .5s ease;
      &:hover {
        color: #E37E0C;
      }
    }
  }
}
</style>
