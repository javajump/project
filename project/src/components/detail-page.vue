<template>
  <div class="wrap">
    <div class="shang">
      <div>
        <div class="avatar">
          <img class="yuanjiao" width="64" height="64" :src="seller.avatar">
        </div>
        <div class="content">
          <div class="">
            <span><img width="36" height="20" src="../../static/brand.png" alt="品牌图片"></span>
            <span>{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div v-if="seller.supports" class="support">
            <span :class="classMap[seller.supports[0].type]"><img height="20" src="../../static/decrease.png" alt="图片"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
          <span class="bulleting-image"><img height="20" src="../../static/bulleting.png" alt=""></span><span class="bulletin-text">{{seller.bulletin}}</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="background">
        <img :src="seller.avatar" width="100%" height="100%" alt="">
      </div>
        <div v-show="detailShow" class="detail">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h2 class="name">{{seller.name}}</h2>
              <div class="star-wrapper">
                <star :score="seller.score"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul v-if="seller.supports" class="supports">
                <li class="support-item" v-for="(item,index) in seller.supports">
                  <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                  <span class="text">{{seller.supports[index].description}}</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="bulletin">
                <p class="content1">{{seller.bulletin}}</p>
              </div>
            </div>
          </div>
          <div class="detail-close" @click="hideDetail">关闭
          </div>
        </div>
    </div>
    <div class="zhong">  
          <div class="good">
            <router-link to="/detail/goods">商品</router-link>
          </div>
          <div class="rating">
            <router-link to="/detail/ratings"><a>评价</a></router-link>
          </div>
          <div class="seller">
           <router-link to="/detail/seller"><a>商家</a></router-link>
          </div>
    </div>
   <router-view :score='seller.score' :seller='seller'></router-view>

  </div>
</template>
<script>
import star from './star.vue'
export default {
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  props: ['seller'],
  components: {
    star
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  },
  data () {
    return {
      ff: false,
      detailShow: false
    }
  }
}
</script>
<style scoped>
.yuanjiao{
  border-radius: 10%
}
.wrap{
  position: fixed;
  top:0;
  bottom:0;
  width:100%;
  height:100%;
  overflow: auto;
  background-color: #fff
}
.shang{
  color:#fff;
  position:relative;
  background-color: rgba(7,17,27,0.5);
  }
  .avatar{
    padding:1rem 0 1rem 1.3rem;
    display:inline-block;
    font-size: 1rem;
  }
  .content{
    font-size: 1rem;
    display:inline-block;
    margin-left:1rem;
    padding-top: 1rem;
    position:absolute;
    color:white;

  }

 img{
  vertical-align: bottom
 }
 .name{
  margin-top:2rem;
   line-height: 16px;
   text-align: center;
   font-size: 16px;
   font-weight: 700;
 }
  .background{
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    z-index: -1;
    filter: blur(10px);
}
.zhong{
  display:flex;
  text-align: center;
  font-size: 1.2rem;
  font-weight:900;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1)
}
.rating{
  flex:1;
  padding-top:0.5rem;
  padding-bottom:0.5rem;
}
.good{
  flex:1;
  padding-top:0.5rem;
  padding-bottom:0.5rem;
}
.seller{
  flex:1;
  padding-top:0.5rem;
  padding-bottom:0.5rem;
}
a{
  text-decoration: none
}
.bulletin-wrapper{
  position: relative;
  height: 28px;
  line-height: 28px;
  padding: 0 22px 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: rgba(7, 17, 27, 0.2);
  }
  .bulleting-image{
    position: relative;
    display:inline-block;
    padding-right: 0.5rem;
    bottom:0.2rem;
  }
  .detail{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    opacity: 1;
    background: rgba(7, 17, 27, 0.8);
  }
  .star-wrapper{
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }
  .title{
    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;
  }
    .line{
      flex: 1;
      position: relative;
      top: -6px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
.supports{
  width: 80%;
  margin: 0 auto;
}
.support-item{
  padding: 0 12px;
  margin-bottom: 12px;
  font-size:0.8rem;
}
.icon{
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: top;
  margin-right: 6px;
  background-size: 16px 16px;
  background-repeat: no-repeat;
}
.decrease{
  background-image: url(../../static/decrease.png);
}
.discount{
  background-image: url(../../static/discount.png);
}
.special{
  background-image: url(../../static/special.png);
}
.invoice{
  background-image: url(../../static/invoice.png);
}
.guarantee{
  background-image: url(../../static/guarantee.png);
}
.bulletin{
  width: 80%;
  margin: 0 auto;
}
.content1{
  padding: 0 12px;
  line-height: 24px;
  font-size: 12px;
}
.detail-close{
  position: absolute;
  font-size: 1.5rem;
  top:0;
  right:0;
}
</style>
