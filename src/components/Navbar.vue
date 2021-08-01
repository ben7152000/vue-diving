<template>
  <nav class="navbar">
    <div class="container">
      <div class="row">
        <h1>
          <a href="/">LOGO</a>
        </h1>
        <ul>
          <li>
            關於龍洞岬
            <ul>
              <li>龍洞岬介紹</li>
              <li>服務項目</li>
              <li>服務據點</li>
            </ul>
          </li>
          <li>
            執照課程
            <ul>
              <li>ADIA 1 初級潛水員</li>
              <li>ADIA 2 進階潛水員</li>
              <li>ADIA 3 專業潛水員</li>
            </ul>
          </li>
          <li>
            商品櫥窗
            <ul>
              <li>浮潛裝備</li>
              <li>自由裝備</li>
            </ul>
          </li>
          <li>
            潛水知識
            <ul>
              <li>潛水玩什麼</li>
              <li>入門開始</li>
              <li>潛水裝備</li>
              <li>避免潛水意外</li>
              <li>小常識</li>
            </ul>
          </li>
          <li>
            聯絡我們
          </li>
          <li>
            會員專區
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

.navbar {
  background-color: #000;
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
          transition: opacity .5s ease;
        }
      }
      > ul {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 72px;
        background: lighten(#000, 20%);
        width: 210px;
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
}
</style>
