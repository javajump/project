<template>
  <div>
    <div class='location-and-search'>
      <v-location  :address="address" class="xialai"></v-location>
      <div class="lalala"></div>
      <v-search></v-search>
    </div>
    <v-slider></v-slider>
    <seller-recommend v-bind:seller="seller" ></seller-recommend>
    <router-view :adcode="adcode" :address='address' :seller="seller"></router-view >
    <div class="space"></div>
    <v-fixednav ></v-fixednav>
  </div> 
</template>
<script>
import slider from '../components/slider.vue'
import sellerRecommend from '../components/seller-recommend.vue'
import location from '../components/location.vue'
import search from '../components/search.vue'
import fixednav from '../components/fixednav.vue'
export default {
  components: {
    'v-slider': slider,
    'seller-recommend': sellerRecommend,
    'v-location': location,
    'v-search': search,
    'v-fixednav': fixednav
  },
  data: function () {
    return {
      seller: this.$store.state.Data.seller,
      address: '',
      adcode: ''
    }
  },
  created () {
    this.$http.jsonp('http://restapi.amap.com/v3/ip', {
      params: {
        key: '071a935364fa2bf0a413b380d2501b8b',
        output: 'json'
    }
    }).then(response => {
      this.address = response.body.city
      this.adcode = response.body.adcode
    }, response => {
    })
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.location-and-search{
  /*background-color: #ffde5a;*/
  background-color: purple;
  margin:0;
  padding:0;
}
.space{
  position:relative;
  bottom:8rem;
}
.lalala{
  height: 0.5rem;
}
h3{
  border-bottom:1px solid rgba(7,17,27,0.2);
  padding:10px 0 10px 0;
  margin:0;
}
</style>
