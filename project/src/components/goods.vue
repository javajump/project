s  <template>
  <div>
  <div class="goods " >
    <div class="menu-wrapper" ref="menuWrapper">
    	<ul>
    		<li v-for='(item,index) in goods' class="ok" :class="{'current':currentIndex===index}" @click='selectMenu(index,$event)'>{{item.name}}</li>
    	</ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
    	<ul>
    		<li v-for='item in goods' class="food-list-hook">
    		    <h2 class="ok1">{{item.name}}</h2>
    				<div @click="selectFood(food,$event)" class="iac" v-for='food in item.foods'>

              <div class="image">
                <img height="100" width="100" :src="food.icon" alt="">
              </div>

              <div class="text4">
                <h4 class="">{{food.name}}</h4>
                <p class="">{{food.description}}</p>
                <div class="">
                  月售{{food.sellCount}}份;好评率{{food.rating}}%
                </div>
                <div class="">
                  <span>￥{{food .price}}</span>
                </div>
              </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol @add="addFood" :food="food"></cartcontrol>
                </div>
    				</div>
    	 </li>
    	</ul>
    </div>
  </div>
  <shopcart ref="shopcart"  :selectFoods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  <food :food="selectedFood" ref="food"></food>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import shopcart from './shopcart.vue'
import cartcontrol from './cartcontrol.vue'
import food from './food.vue'
export default {
  props: ['score', 'seller'],
  data () {
    return {
      goods: this.$store.state.Data.goods,
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  components: {
    shopcart,
    cartcontrol,
    food
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  methods: {
    selectMenu (index, event) {
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    },
    selectFood (food, event) {
      if (!event._constructed) {
        return
      }
      this.selectedFood = food
      this.$refs.food.show()
    },
    addFood (target) {
      this._drop(target)
    },
    _drop (target) {
      // 体验优化,异步执行下落动画
        this.$refs.shopcart.drop(target)
    },
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })

      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3,
        click: true
      })

      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (var i = 0; i < foodList.length; i++) {
        var item = foodList[i]
        height = height + item.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  mounted () {
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
      this._calculateHeight()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current{
  background-color: #fff;
  position:relative;
}
.ok{
	text-align:center;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	height:3rem;
}

ul,li{
list-style-type:none;
margin:0;
padding:0;
width:100%;

}
.menu-wrapper>ul{
  height:30rem;
  font-weight: 700;
  font-size:0.9rem;
}
.menu-wrapper>ul>li{
  height:2rem;
  padding: 0.5rem 0
}
.foods-wrapper>ul{
  height:300rem;
}
.goods{
	display: flex;
	background-color: orange;
	bottom:3rem;
	position: absolute;
	width:100%;
	top:10.6rem;

}
.menu-wrapper{
	flex:0 0 4.5rem;
	background-color: rgba(0, 160, 220, 0.2);
	overflow: hidden;
}
.foods-wrapper{
	flex:1 1 auto;
	background-color: #fff;
	overflow: hidden;
}
h4{
  margin:0;
  padding:0;
}
.ok1{
  padding:0.5rem 0 0.5rem 2rem;
  background-color: #f4f5f7;
}

.image{
  display:inline-block;
}
.text4{
  display:inline-block;
  width:8rem;
}
.iac{
  position:relative;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1)
}
  .cartcontrol-wrapper{
    position:absolute;
    right:0;
    top:1.5rem;
  }

</style>
