<template>
  <div class="container">
      <ul class="nav-list">
          <li class="nav-item" @click="$router.push('/')">首頁</li>
          <li class="nav-item active">{{ name }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    name: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
}

.nav-list {
  display: flex;
  align-items: baseline;
  line-height: 40px;
  font-weight: 400;
  font-size: 1.2rem;
}

li:not(:last-child) {
  cursor: pointer;
  font-weight: 500;
  color: #fff;
  transition: color .5s ease;

  &:hover {
    color: darken(#fff, 30%);
  }

  &:after {
    content: "/";
    margin: 0 16px;
  }
}

.active {
  color: #ffc66c;
}
</style>
