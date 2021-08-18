<template>
  <footer>
    <div class="container">
      <div class="row">
        <ul>
          <li>
            關於龍洞岬
            <ul>
              <router-link to="/about-us" tag="li">龍洞岬介紹</router-link>
            </ul>
          </li>
          <li>
            執照課程
            <ul>
              <router-link to="/courses-page/experience" tag="li">體驗自由潛水課程</router-link>
              <router-link to="/courses-page/aida-1" tag="li">AIDA 1 初級自由潛水課程</router-link>
              <router-link to="/courses-page/aida-2" tag="li">AIDA 2 進階自由潛水課程</router-link>
              <router-link to="/courses-page/aida-3" tag="li">AIDA 3 專業自由潛水課程</router-link>
            </ul>
          </li>
          <li>
            會員專區
            <ul>
              <router-link to="/member" tag="li">會員專區</router-link>
              <router-link to="/forget-password" tag="li">忘記密碼</router-link>
            </ul>
          </li>
          <li>
            其他
            <ul>
              <router-link to="/contact-us" tag="li">聯絡我們</router-link>
              <router-link to="/products" tag="li">商品櫥窗</router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['courses']
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: 100px;
  width: 100%;
  background: #242323;
}

.row {
  padding: 100px 0;
  > ul {
    display: flex;
    text-align: center;
    > li {
      flex: 1;
      font-size: 1.4rem;
      font-weight: 500;
      list-style: none;
      color: #fff;
      > ul {
        padding-top: 32px;
        > a {
          color: darken(#fff, 50%);
        }
        > li {
          font-size: 1.1rem;
          list-style: none;
          padding: 8px 0;
          color: darken(#fff, 50%);
          transition: color .5s ease;
          cursor: pointer;
          &:hover {
            color: #E37E0C;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  footer {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .row {
    padding: 50px 0 25px;
    > ul {
      flex-wrap: wrap;
      > li {
        flex: 0 1 50%;
        > ul {
          padding: 32px 0;
        }
      }
    }
  }
}

</style>
