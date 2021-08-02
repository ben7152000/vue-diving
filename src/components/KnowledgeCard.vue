<template>
    <div class="container">
      <div class="row">
        <div class="left">
          <div class="img">
            <img :src="img" :alt="knowledgeInfo.title">
          </div>
        </div>
        <div class="right">
          <h4>{{ knowledgeInfo.subtitle }}</h4>
          <h2>{{ knowledgeInfo.title }}</h2>
          <p>{{ knowledgeInfo.desc }}</p>
        </div>
        <a href="/">詳細閱讀</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'KnowledgeCard',
  props: {
    knowledgeInfo: {
      type: Object,
      require: true
    }
  },
  computed: {
    img () {
      return require(`../static/Knowledge/${this.knowledgeInfo.img}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  background: #333333;
  position: relative;
  margin: 32px 0;
  > .left {
    width: 20%;
    > .img {
      padding: 24px;
      > img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  > .right {
    width: 80%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h4 {
      font-size: 1rem;
      font-weight: 300;
      color: #aaa;
    }
    > h2 {
      font-size: 1.6rem;
      font-weight: 300;
      margin: 8px 0;
      color: #fff;
    }
    > p {
      line-height: 2;
      font-weight: 300;
      color: #aaa;
    }
  }
  > a {
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 16px 24px;
    color: #fff;
    background: #222;
    transition: color .5s ease;
    &:hover {
      color: #E37E0C;
    }
  }
}
</style>
