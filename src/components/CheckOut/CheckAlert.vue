<template>
  <div class="container">
    <div class="row">
      <el-alert
        title="感謝您的預訂，報名確認信將於3日內寄出，期待與您相見：)"
        type="success"
        show-icon
        :closable="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckAlert'
}
</script>

<style lang="scss" scoped>
.el-alert {
  margin: 64px 0 0;
  padding: 16px;
  background: #333;
  color: #E37E0C;
}

::v-deep .el-alert__title,
::v-deep .el-icon-success {
  font-size: 1.2rem;
}

</style>
