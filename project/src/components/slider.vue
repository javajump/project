<template>
  <div>
      <swipe class="my-swipe">
        <swipe-item class="slide1">
          <div>
            <div class="wrapper">
              <div class="item">
                <img src="../images/slider-pic/slider-pic1.jpeg" alt="">
                <p>美食1</p>
              </div>
              <div class="item">
                <img src="../images/slider-pic/slider-pic2.jpeg" alt="">
                <p>美食2</p>
              </div>
              <div class="item">
                <img src="../images/slider-pic/slider-pic3.jpeg" alt="">
                <p>美食3</p>
              </div>
            </div>
            <div class="wrapper">
              <div class="item">
                <img src="../images/slider-pic/slider-pic4.jpeg" alt="">
                <p>美食4</p>
              </div>
              <div class="item">
                <img src="../images/slider-pic/slider-pic5.jpeg" alt="">
                <p>美食5</p>
              </div>
              <div class="item">
                <img src="../images/slider-pic/slider-pic6.jpeg" alt="">
                <p>美食6</p>
              </div>
            </div>
          </div>
        </swipe-item>
        <swipe-item class="slide1">
          <div>
            <div class="wrapper">
              <div class="item">
                <img src="../images/slider-pic/slider-pic11.jpeg" alt="">
                <p>美食7</p>
              </div>
              <div class="item">
                <img src="../images/slider-pic/slider-pic12.jpeg" alt="">
                <p>美食8</p>
              </div>
              <div class="item">
                <img src="../images/slider-pic/slider-pic13.jpeg" alt="">
                <p>美食9</p>
              </div>
            </div>
            <div class="wrapper">
              <div class="item">
                <img src="../images/slider-pic/slider-pic14.jpeg" alt="">
                <p>美食10</p>
              </div>
              <div class="item">
                <img src="../images/slider-pic/slider-pic15.jpeg" alt="">
                <p>美食11</p>
              </div>
              <div class="item">
                <img src="../images/slider-pic/slider-pic16.jpeg" alt="">
                <p>美食12</p>
              </div>
            </div>
          </div>
        </swipe-item>
      </swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
  components: {
    swipe: Swipe,
    swipeItem: SwipeItem
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width:3rem;
  height:3rem;
}
.itmejuzhong{
  text-align:center;
}
.my-swipe {
  height: 9rem;
  color:#69cffa ;
  text-align: center;
  font-size: 0.8rem
}
p{
  margin:0;
  padding:0;
}
.wrapper{
  display:flex;
}
.item{
  flex:1;
}
</style>
