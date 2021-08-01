<template>
  <nav class="breadcrumb">
    <ul class="nav-list">
      <li class="nav-item" @click="$router.push('/')">首頁</li>
      <li class="nav-item active">{{ name }}</li>
    </ul>
  </nav>
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
  font-size: 14px;
}

li:not(:last-child) {
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #44607a;
  }

  &:after {
    content: "/";
    margin: 5px;
  }
}

.active {
  color: #ffc66c;
}
</style>
