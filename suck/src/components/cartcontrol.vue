<template>
	<div>
		<div class="cartcontrol">
			<transition name="move">
				<div class="cart-decrease" v-show="food.count>0" @click.stop="decreaseCart">
					<div class="inner iconfont icon-jianhao"></div>
			    </div>
			</transition>
			<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
			<div class="cart-add" @click.stop="addCart">
				<i  class="iconfont icon-plus"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('add', event.target)
    },
    decreaseCart (event) {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style scoped>
div{
  color:rgb(0,160,220);
}
.cartcontrol{
   position:relative;
}

.cart-count{
  display:inline-block;
  text-align: center
}
.cart-add{
  display:inline-block;
  }
.iconfont{
	font-size:1.5rem;
}
.cart-decrease{
  display:inline-block;
  transition: all 0.4s linear;
}
.inner{
 display: inline-block;
 transition: all 0.4s linear;
}
.move-enter,.move-leave-active{
	opacity: 0;
	transform: translate3d(24px, 0, 0) 
}
.move-enter>.inner,.move-leave-active>.inner{
	transform: rotate(180deg);  
}
</style>