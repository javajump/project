<template>
	<div>
		<div class="shopcart">
			<div class="content" @click="toggleList">
				<div class="content-left">
					<div class="logo-wrapper">
						<div class=" logo" :class="{ countget: totalCount }" >
							<span class="icon-gouwuche iconfont"></span>
						</div>
						<div class="num">{{totalCount}}</div>
					</div>
					<div class="price">￥{{totalPrice}}</div>
					<div class="desc">配送费{{deliveryPrice}}</div>
				</div>
				<div class="content-right">
					<div class="pay" :class="{manzu:qisong}" @click.stop.prevent="pay">
						{{payDesc}}
					</div>
				</div>
			</div>
		</div>
      <div class="ball-container">
          <transition v-for="ball in balls" key="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
      </div>
 <!--      <transition name="fold"> -->
        <div class="shopcart-list"  v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price2">
                  <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol @add="$parent.addFood"  :food="food"></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
<!--       </transition> -->
	</div>
</template>

<script>
  import cartcontrol from './cartcontrol.vue'
  import BScroll from 'better-scroll'
  export default {
    components: {
      cartcontrol
    },
    data () {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        dropBalls: [],
        fold: true
      }
    },
    props: {
      selectFoods: {
        type: Array,
        default () {
          return [{
            price: 10,
            count: 1
          }]
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    methods: {
      empty () {
        this.selectFoods.forEach((food) => {
          food.count = 0
        })
      },
      pay () {
        if (this.totalPrice < this.minPrice) {
          return
        }
        window.alert('支付' + this.totalPrice + '元')
      },
      toggleList () {
        if (!this.totalCount) {
          return
        }
        this.fold = !this.fold
      },
      drop (el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            this.dropBalls.push(ball)
            return
          }
        }
      },
        beforeDrop (el) {
          let count = this.balls.length
          while (count--) {
            let ball = this.balls[count]
            if (ball.show) {
              let rect = ball.el.getBoundingClientRect()
              let x = rect.left - 32
              let y = -(window.innerHeight - rect.top - 22)
              el.style.display = ''
              el.style.webkitTransform = 'translate(0,' + y + 'px)'
              el.style.transform = 'translate(0,' + y + 'px)'
              let inner = el.getElementsByClassName('inner-hook')[0]
              inner.style.webkitTransform = 'translate3d(' + x + 'px,' + '0,0)'
              inner.style.transform = 'translate(' + x + 'px,0)'
            }
          }
        },
        dropping (el, done) {
          /* eslint-disable no-unused-vars */
          let rf = el.offsetHeight
          this.$nextTick(() => {
            el.style.webkitTransform = 'translate(0,0)'
            el.style.transform = 'translate(0,0)'
            let inner = el.getElementsByClassName('inner-hook')[0]
            inner.style.webkitTransform = 'translate(0,0)'
            inner.style.transform = 'translate(0,0)'
            el.addEventListener('transitionend', done)
          })
        },
        afterDrop (el) {
          let ball = this.dropBalls.shift()
          if (ball) {
            ball.show = false
            el.style.display = 'none'
          }
        }
    },
    computed: {
      listShow () {
        if (!this.totalCount) {
          this.fold = true
          return false
        }
        let show = !this.fold
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
        return show
      },
      payDesc () {
        if (this.totalPrice === 0) {
          return '￥' + this.minPrice + '元起送'
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice
          return '还差' + '￥' + diff + '元起送'
        } else {
          return '去结算'
        }
      },
      qisong () {
       if (this.totalPrice >= this.minPrice) {
        return true
       } else {
        return false
       }
      },
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      totalCount () {
        let count = 0
        this.selectFoods.forEach((food) => {
          count = count + food.count
        })
        return count
      }
    }
  }
</script>

<style scoped>
  .shopcart{
     position: fixed;
     left:0;
     bottom:0;
     z-index:30;
     width:100%;
     height:3rem;
     background-color: black
  }
  .content{
    display:flex;
    background: #141d27
  }
  .content-left{
  	flex:1;
  	background: #141d27
  }
  .content-right{
  	flex:0 0 7rem;
  }
  .logo-wrapper{
    display:inline-block;
    position: relative;
    top:-10px;
    margin:0 0 0 12px;
    padding:6px;
    width:56px;
    height:56px;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 50%;
  }
  .price{
  	display:inline-block;
  	vertical-align: top;
  	line-height: 24px; 
  	margin: 12px 0px;
  	padding-right:12px;
  	box-sizing: border-box;
  	border-right: 1px solid rgba(255,255,255,0.1);
  	font-size:16px;
  	font-weight: 700;
  	color: white;
    width:2rem;

  }
  .desc{
  	display: inline-block;
  	vertical-align: top;
  	margin: 12px 0 0 12px;
  	line-height: 24px;
  	color: white;
    font-weight: 600;
  }
  .logo{
  	width:100%;
  	height:100%;
  	border-radius: 50%;
    background:gray;
    text-align: center;

  }
  .countget{
    background:#1d82fe;
  }

  .pay{
  	height:3rem;
  	line-height: 3rem;
  	text-align:center;
  	font-size:1rem;
    color:white;
  	background-color: #2b333b
  }
  .num{
  	  position: absolute;
  	  top: 0;
  	  right: 0;
  	  width: 24px;
  	  height: 16px;
  	  line-height: 16px;
  	  text-align: center;
  	  border-radius: 16px;
  	  font-size: 9px;
  	  font-weight: 700;
  	  color: #fff;
  	  background: rgb(240, 20, 20);
  	  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }
  .manzu{
    background-color: red
  }
    .ball{
      position: fixed;
      left: 32px;
      bottom: 22px;
      z-index: 200;
      transition: all 0.4s cubic-bezier(.04,-0.45,.34,-0.1)
    }
    .inner{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgb(0, 160, 220);
        transition: all 0.4s linear
      }
    .shopcart-list{
      position: absolute;
      left: 0;
      bottom:3rem;
      z-index: 3;
      width: 100%;
    }
    .list-header{
      display:flex;
        height: 4rem;
        line-height: 2rem;
        padding: 0 18px;
        background: #f3f5f7;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        
      }
      .title{
         flex:1;
          font-size: 2rem;
          color: rgb(7, 17, 27);
          margin-top:1rem;
        }
        .empty{
          flex:1;
          font-size: 2rem;
          color: rgb(0, 160, 220);
          text-align:right;
          margin-top:1rem;
        }
        .list-content{
          padding: 0 18px;
          max-height: 217px;
          overflow: hidden;
          background: #fff;
        }
.food{
  position: relative;
  padding: 12px 0;
  box-sizing: border-box;
  }
.name{
  line-height: 24px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}
 .price2{
   position: absolute;
  right: 90px;
  bottom: 12px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  color: rgb(240, 20, 20);
}
.cartcontrol-wrapper{
  position: absolute;
  right: 0;
  bottom: 6px;
            }
.icon-gouwuche{
  display:inline-block;
  position:relative;
  bottom:-10px;
  color:white;
}
</style>