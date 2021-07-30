<template>
  <div class="footer">
    <p class="lead">&copy; 2021, Developed By Mohamed Hesham</p>
  </div>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: max-content;
  background-color: #ea0f1e6e;
  p {
    width: fit-content;
    color: #fffdfd;
    font-family: monospace;
    margin: auto;
    font-size: calc(1rem - 2px);
  }
}
</style>
