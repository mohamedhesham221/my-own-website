<template>
  <div class="error-view"></div>
</template>
<script>
export default {
  name: 'NotFound',
};
</script>
<style lang="scss" scoped>
.error-view {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/error.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
}
</style>
