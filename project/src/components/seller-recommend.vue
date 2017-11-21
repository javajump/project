<template>
    <div class="dingwei" ref="contentWrapper">
        <div>
          <h3>商家推荐:</h3>
          <router-link to="/detail" style="text-decoration:none">
          <div v-for="(item,value,index) in $store.state.falseBussinessInfo">
              <div  class="clearfix firstrecommend" v-show="index === 0">
                  <div class="section1">
                      <img width="80px" height="80px" :src="item.image_url" alt="1">
                  </div>
                  <div class="section2">
                      <div class="section2-1">{{item.shop_name}}</div>
                      <div class="section2-2"><star :score="item.shop_rating"></star></div>
                      <div class="section2-3">评分{{ item.shop_rating }}</div>
                  </div>
                  <div class="section3">
                      <div class="section3-1" v-if="item.on_time">准时达</div>
                      <div class="section3-2"  v-if="item.fengniao">疯狗专送</div>
                      <div class="section3-3">配送费{{ item.send_cost }}</div>
                  </div>
              </div>
          </div> 
          </router-link>
          <router-link to="/nodata">
          <div v-for="(item,value,index) in $store.state.falseBussinessInfo">
              <div  class="clearfix firstrecommend" v-show="index > 0">
                  <div class="section1">
                      <img width="80px" height="80px" :src="item.image_url" alt="1">
                  </div>
                  <div class="section2">
                      <div class="section2-1">{{item.shop_name}}</div>
                      <div class="section2-2"><star :score="item.shop_rating"></star></div>
                      <div class="section2-3">评分{{ item.shop_rating }}</div>
                  </div>
                  <div class="section3">
                      <div class="section3-1" v-if="item.on_time">准时达</div>
                      <div class="section3-2"  v-if="item.fengniao">疯狗专送</div>
                      <div class="section3-3">配送费{{ item.send_cost }}</div>
                  </div>
              </div>
          </div> 
          </router-link>
        </div>
     </div>     
</template>

<script>
import star from './star'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      sucker: this.$store.state.falseBussinessInfo
    }
  },
    components: {
      star
    },
    mounted: function () {
      this.$nextTick(function () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.contentWrapper, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firstrecommend{
  position:relative;
  margin-top: 0rem;
  border-top:1px solid yellow;
}
.section1{
  position:relative;
  top:10px;
  left:10px;
  display:inline-block;
  height:100px;
  width:100px;
  float:left;

}
.section1>img{
     border-radius: 10% 
}
.section2{
  position:relative;
  top:9px;
  display:inline-block;
  height:100px;
  float:left;
  margin-left:1rem;
  color:#69cffa;
  font-weight:700;
  font-size: 0.9rem
}
.section3{
  position:relative;
  top:9px;
  display:inline-block;
  height:100px;
  margin-right:1rem;
  margin-left:1rem;
  color:#69cffa;
  font-weight:700;
  float:right;
  font-size: 0.9rem
}
.section2-1,.section3-1{
    margin-top:10px;
}
.section2-2,.section3-2{
  margin-top:10px;
}
.section2-3,.section3-3{
    margin-top:10px;
}
.dingwei{
    position:relative;
    bottom:0;
    height:16rem;
    overflow: hidden

}
.clearfix:after{
    display:block;
    content:"";
    height:0px;
    clear:both;
}
.image{
    border:0.1rem solid yellow;
}
.image>div{
    float:left;
}
.ggg{
    height:110px;
}
img{
    margin:0;
    padding:0;
}
.image>p:nth-of-type(2){
    margin:24px 0px;
}
p{
    border:0;
    padding:0;
    margin:0;
    text-decoration: blink
}
</style>
