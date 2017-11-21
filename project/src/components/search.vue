<template>
  <div class="wrapper">
      <div class="re_search">
        <input type="search" :placeholder="inputWorld" >
      </div>
      <div class="hotwrapper" ref="hotwrapper">
          <ul class="hot_word content">
            <li @click.stop.prevent="selecthot(x.title)" class="hotitem" v-for="x in $store.getters.getFalseHotWord">{{x.title}}</li>
          </ul>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      inputWorld: '请输入商品名称1'
    }
  },
  methods: {
    selecthot (x) {
      this.inputWorld = x
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.hotwrapper, {
          scrollX: true,
          click: true,
          eventPassthrough: 'vertical'
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
.wrapper{

}
  input[type="search"]{
    display:inline-block;
    outline: none;
    border: none;
    border-radius:1rem;
    box-sizing: border-box;
    padding:0;
    width:80%;
    height:2rem;
    text-align:center;
  }
  .re_search{
    line-height:0;
    padding:0;
    text-align:center;
    font-size:0.9rem;
    }
    .hotwrapper{
      width:100%;
      overflow: hidden;
      white-space: nowrap;
    }
  .hot_word{
    font-size:0.8rem;
    color:white;
    width:200%;
}

.hotitem{
  display:inline-block;
  padding:0.4rem 0.5rem 0.2rem 0.5rem;
}
</style>
