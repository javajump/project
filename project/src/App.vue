<template>
  <div id="app">
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      seller: this.$store.state.Data.seller
    }
  }
}
</script>

<style>

</style>
