<template>
  <el-drawer
    title="購物車"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose">
    <span>我来啦!</span>
  </el-drawer>
</template>

<script>
export default {
  name: 'ShoppingDrawer',
  data () {
    return {
      drawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    openDrawer () {
      this.drawer = true
    },
    handleClose () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
