<template>
	<div class="nodataWrapper">
		<header>
		 	<div class="iconfont icon-fanhui" @click="back"></div>
		 	<div class="info">我的信息页</div>
		 	<div class="avatarWrapper">
		 		<div class="iconfont icon-touxiang"></div>
		 		<div class="twoitem">
		 			<div>用户名</div>
		 			<div>132****1696</div>
		 	    </div>
		 	</div>
		</header>
		<div class="money">
			<div class="moneyItem">
				<div class="orange">100元</div>
				<div class="icon-yue01 iconfont">余额</div>
		    </div>
		    <div class="moneyItem">
		    	<div class="red">30个</div>
		    	<div class="itemfont">优惠</div>
		    </div>
		    <div class="moneyItem">
		    <div class="green">99分</div>
		    <div class="itemfont">积分</div>
		    </div>
		</div>
		<split></split>
		<div class="listitem">
			<div class="iconfont icon-dingdan"></div>
			<div>我的订单</div>
		</div>
		<div class="listitem">
			<div class="iconfont icon-jifenshangcheng"></div>
			<div>积分商城</div>
		</div>
		<div class="listitem">
			<div class="iconfont icon-huiyuanqia"></div>
			<div>会员才能爽</div>
		</div>
		<div class="listitem">
			<div class="iconfont icon-fuwuzhongxin"></div>
			<div>服务中心</div>
		</div>
		<div class="listitem">
			<div class="iconfont icon-xiazai"></div>
			<div>下载app</div>
		</div>
	</div>
</template>
<script>
import split from './split.vue'
  export default {
    components: {
      split
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
header{
	background-color: #1d82fe;
	height:8rem;
	position:relative;
}
	.icon-fanhui{
		height:2rem;
		color:white;
		font-weight:600;
		font-size:1.6rem; 
		display:inline-block;
		position:absolute;
	}
	.icon-touxiang{
		height:2rem;
		color:orange;
		font-weight:600;
		font-size:2.5rem; 
		display:inline-block
	}
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
	.info{
		color:white;
		font-size:1.6rem;
		font-weight:600;
		text-align:center;
	}
	.avatarWrapper{
		position:absolute;
		bottom:2rem;
		left:2rem;
	}
	.twoitem{
		display:inline-block;
		font-size:1rem;
		margin-left:1rem;
		text-align:center;
		color:white;
		font-weight:600;
	}
	.money{
		display:flex;
		height:4.5rem;

	}
	.icon-yue01,.itemfont{
		font-size:0.9rem;
		margin-top:0.2rem;
	}
	.moneyItem{
		flex:1;
		text-align:center;
		font-size:0.9rem;
		font-weight:600;
		margin-top:1rem;
	}
	.orange{
		color:orange;
	}
	.red{
		color:red;
	}
	.green{
		color:green;
	}
	.listitem{
		height:2rem;
		padding: 0.3rem 0 0.3rem 0.5rem;
		border-bottom:6px solid #f4f4f4;
		font-size: 1rem
	}
	.listitem>div{
		display:inline-block;
		font-size:1.2rem;
		margin-top:0.3rem;
	}
	.listitem>div.iconfont{
		color:#1d82fe;
	}
</style>