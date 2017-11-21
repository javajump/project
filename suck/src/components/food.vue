<template>
  <div>
    <transition>
    <div v-show="showFlag" class="food" ref="food">
      <div>
        <div class="image-header">
          <img :src="food.image">
          <div @click="hide" class="back">返回</div>
        </div>
        <div class="content">
          <h3 class="title">{{food.name}}</h3>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol @add="$parent.addFood" :food="food"></cartcontrol>
          </div>
          <transition name="fade">
          <div class="buy" @click.stop.prevent="addFirst" v-show="!food.count || food.count===0">
            加入购物车
          </div>
        </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div>
          <h1 class="title">商品评价</h1>
          <ratingselect  @toggle="toggleContent" @select="selectRating" :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings">
          </ratingselect>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li  v-show="shang(rating.rateType) && xia(rating.text)" class="li-item" v-for="rating in food.ratings">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" :src="rating.avatar">
                </div>
                <div class="time">{{ rating.rateTime | formatDate }}</div>
                <p class="text">
                  <span :class="{'icon-wenzhangxiangqing-zancai- iconfont':rating.rateType===0,'icon-wenzhangxiangqing-zancai-1 iconfont':rating.rateType===1}"></span>
                 {{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
import cartcontrol from './cartcontrol.vue'
import BScroll from 'better-scroll'
import split from './split.vue'
import ratingselect from './ratingselect.vue'
import {formatDate} from '../js/date'
  const ALL = 2
  export default {
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date)
      }
    },
    components: {
      cartcontrol,
      split,
      ratingselect
    },
    props: {
      food: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    computed: {

    },
    methods: {
      // 方法二：shang和xia方法共同实现selecType和onlyContent评价联动,ratings组件
      shang (Type) {
        if (this.selectType === 2) {
          return true
        }
        if ((this.selectType === 0) && (Type === 0)) {
          return true
        }
        if ((this.selectType === 0) && (Type === 1)) {
          return false
        }
        if ((this.selectType === 1) && (Type === 1)) {
          return true
        }
        if ((this.selectType === 1) && (Type === 0)) {
          return false
        }
      },
      xia (text) {
        if (this.onlyContent && !text) {
          return false
        } else {
          return true
        }
      },
      // needShow (type, text) {
      //   if (this.onlyContent && !text) {
      //     return false
      //   }
      //   if (this.selectType === ALL) {
      //     return true
      //   } else {
      //     return type === this.selectType
      //   }
      // },
      toggleContent () {
        this.onlyContent = !this.onlyContent
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      selectRating (type) {
        this.selectType = type
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      addFirst (event) {
        if (!event._constructed) {
          return
        }
        this.$emit('add', event.target)
        this.$set(this.food, 'count', 1)
      },
      show () {
        this.showFlag = true
        this.selectType = ALL
        this.onlyContent = false
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showFlag = false
      }
    }
  }
</script>

<style scoped>
li{
  list-style-type: none
}
  .food{
    position:fixed;
    left:0;
    top:0;
    bottom:3rem;
    width:100%;
    background:white;
  }
  .v-enter-active,.v-leave-active{
  transition: all 0.2s linear
  }
  .v-enter,.v-leave-to{
  transform: translate3d(100%, 0, 0)
  }
  .back{
    position: absolute;
    top: 10px;
    left: 0;
    color:blue;
    font-size:2rem;
  }
  .image-header{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-color: white
  }
  .image-header>img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .content{
    position: relative;
    padding: 18px;
  }
  .title{
    line-height: 14px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(7, 17, 27);
  }
  .detail{
    margin-bottom: 18px;
    line-height: 10px;
    height: 10px;
  }
  .sell-count, .rating{
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .sell-count{
    margin-right: 12px;
  }
  .price{
    font-weight: 700;
    line-height: 24px;
  }
  .now{
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
  }
  .old{
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147, 153, 159);
    }
  .cartcontrol-wrapper{
    position: absolute;
    right: 18px;
    bottom: 18px;
  }
  .buy{
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 5;
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 10px;
    color: #fff;
    background: rgb(0, 160, 220);
    opacity: 1;
  }
  .info{
    padding: 18px;
}
.rating{
  padding-top: 18px;
}
  .title{
    line-height: 14px;
    margin-left: 18px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .rating-wrapper{
    padding: 0 18px;
  }
  .li-item{
    position: relative;
  }
  .user{
    position: absolute;
    right: 0;
    top: 0;
  }
        .name{
          display: inline-block;
          margin-right: 6px;
          vertical-align: top;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .avatar{
          border-radius: 50%;
          background-color: red
        }
      .time{
        margin-bottom: 6px;
        line-height: 12px;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
      .text{
        line-height: 16px;
        font-size: 12px;
        color: rgb(7, 17, 27);
      }
  .icon-wenzhangxiangqing-zancai-{
    color: blue;
    font-size:1.3rem;
    font-weight:800;
  }
  .icon-wenzhangxiangqing-zancai-1{
    color: gray;
    font-size:1.3rem;
    font-weight:600;
  }
        .icon-thumb_up{
          color: rgb(0, 160, 220);
        }
        .icon-thumb_down{
          color: rgb(147, 153, 159);
        }

    .no-rating{
      padding: 16px 0;
      font-size: 12px;
      color: rgb(147, 153, 159);
    }
</style>