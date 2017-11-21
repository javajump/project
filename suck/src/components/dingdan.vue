<template>
	<div class="nodataWrapper">
		<div class="iconfont icon-fanhui" @click="back">返回</div>
		<div class="position">
		订单页
	    </div>
	</div>
</template>
<script>
  export default {
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
	.nodataWrapper{
		width:100%;
		position:absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background-color: white;
		font-size:2rem;
	}
	.iconfont{
       font-size:2rem; 
	}
	.position{
		text-align: center
	}
</style>