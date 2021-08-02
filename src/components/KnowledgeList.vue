<template>
  <section>
    <div class="container">
        <ul class="row">
          <li>
            <font-awesome-icon icon="check-circle" class="icon"/>
            潛水玩什麼
          </li>
          <li>
            <font-awesome-icon icon="check-circle" class="icon"/>
            入門開始
          </li>
          <li>
            <font-awesome-icon icon="check-circle" class="icon" />
            潛水裝備
          </li>
          <li>
            <font-awesome-icon icon="check-circle" class="icon" />
            避免潛水意外
          </li>
          <li>
            <font-awesome-icon icon="check-circle" class="icon" />
            小常識
          </li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KnowledgeList'
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  > li {
    list-style: none;
    margin-right: 16px;
    transition: color .5s ease;
    > .icon {
      margin-right: 16px;
    }
    &:hover {
      color: #E37E0C;
    }
  }
}
</style>
