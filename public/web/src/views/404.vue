<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/404_cloud.png" alt="404">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  computed: {
    message() {
      return '网管说这个页面你不能进......'
    }
  }
}
</script>

<style  scoped>
.wscn-http404-container{

}
</style>
