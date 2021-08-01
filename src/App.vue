<template>
  <div id="app" class="main-container">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {

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

</style>
