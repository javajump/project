<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title1">服务态度</span>
            <star class="star" :score="seller.serviceScore"></star>
            <span class="score1">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title1">商品评分</span>
            <star class="star" :score="seller.foodScore"></star>
            <span class="score1">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title2">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <split></split>

      <ratingselect @select="selectRating" @toggle="toggleContent" :selectType="selectType" :onlyContent="onlyContent"
                    :ratings="ratings"></ratingselect>


      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" v-show="needShow(rating.rateType, rating.text)" class="rating-item">
            <div class="avatar">
              <img class="image" width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <div class="name">{{rating.username}}</div>
              <div class="star-wrapper">
                <star class="star1" :score="rating.score"></star>
                <span class="delivery1" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-wenzhangxiangqing-zancai- iconfont"></span>
                <span class="item" v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time">
                {{rating.rateTime|formatDate}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ratingselect from './ratingselect'
import split from './split'
import star from './star'
import BScroll from 'better-scroll'
import {formatDate} from '../js/date'

const ALL = 2
  export default {
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    created () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.ratings, {
          click: true
        })
      })
    },
    methods: {
      // 方法一：实现selecType和onlyContent评价联动,方法二见food组件
      needShow (type, text) {
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }
      },
      selectRating (type) {
        this.selectType = type
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      toggleContent () {
        this.onlyContent = !this.onlyContent
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        ratings: this.$store.state.Data.ratings,
        selectType: ALL,
        onlyContent: true
      }
    },
    components: {
      ratingselect,
      split,
      star
    }
  }
</script>

<style scoped>
.ratings{
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.overview{
  display: flex;
   padding: 18px 0;
}
.overview-left{
   flex: 0 0 120px;
  padding: 6px 0;
  width: 120px;
  border-right: 1px solid rgba(7, 17, 27, 0.1);
  text-align: center;
}
.score{
  margin-bottom: 6px;
  line-height: 28px;
  font-size: 24px;
  color: rgb(255, 153, 0);
}
.title{
  margin-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: rgb(7, 17, 27);
}
.rank{
  line-height: 10px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.overview-right{
  flex: 1;
  padding: 2px 0 2px 10px;
}
.score-wrapper{

}
.title1{
  display: inline-block;
/*  line-height: 18px;*/
  vertical-align: top;
  font-size: 12px;
  color: rgb(7, 17, 27);
}
.star{
  display: inline-block;
  margin: 0 6px;
  vertical-align: top;
}
.score1{
  display: inline-block;
/*  line-height: 18px;*/
  vertical-align: top;
  font-size: 12px;
  color: rgb(255, 153, 0);
  }
.title2{
  line-height: 18px;
  font-size: 12px;
  color: rgb(7, 17, 27);
}
.delivery{
  margin-left: 12px;
  font-size: 12px;
  color: rgb(147, 153, 159);
}
.rating-wrapper{
  padding: 0 18px;
}
.rating-item{
  display: flex;
  padding: 18px 0;
  }
.avatar{
  flex: 0 0 28px;
  width: 28px;
  margin-right: 12px;
}
.image{
  border-radius: 50%
}
.content{
  position: relative;
  flex: 1;
}
.name{
  margin-bottom: 4px;
  line-height: 12px;
  font-size: 10px;
  color: rgb(7, 17, 27);
}
.star-wrapper{
  margin-bottom: 6px;
  font-size: 0;
}
.star1{
  display: inline-block;
  margin-right: 6px;
          vertical-align: top;
  }
.delivery1{
  display: inline-block;
  vertical-align: top;
  line-height: 12px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.text{
  margin-bottom: 8px;
  line-height: 18px;
  color: rgb(7, 17, 27);
  font-size: 12px;
}
.recommend{
  line-height: 16px;
   font-size: 0;
}
.icon-thumb_up, .item{
  display: inline-block;
  margin: 0 8px 4px 0;
  font-size: 9px;
}
        /*大拇指icon-暂无*/
/*        .icon-thumb_up{
          color: rgb(0, 160, 220);
        }*/
.item{
  padding: 0 6px;
  border: 1px solid rgba(7, 17, 27, 0.1);
  border-radius: 1px;
  color: rgb(147, 153, 159);
  background: #fff;
        }
.time{
  position: absolute;
  top: 0;
  right: 0;
  line-height: 12px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.icon-wenzhangxiangqing-zancai-{
  font-size:1.3rem;
}
</style>