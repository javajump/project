<template>
  <div >
  	   <div class="clearfix yyy" >
    		    <router-link to="/address">
              <div class="location icon-dingwei iconfont"></div>
            </router-link>
            <div class="location">
              &nbsp;<span class="text">{{address}}</span>
            </div>
    		 <router-link to="/loginpage">
           <div class="right login"><span class="sss">登录</span>&nbsp;</div>
         </router-link>
  	   </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String
    }
  }
}
</script>

<style scoped>
.icon-dingwei{
  font-size:1.8rem;
  padding-left: 0.5rem;
  color:white;
  font-weight:200;
}
span{
  display:inline-block;
  height:1.5rem;
  line-height:1.5rem;
  font-weight:700;
}
  .clearfix:after{
  	content:'';
  	height:0;
  	display:block;
  	clear: both;
  }
  .login{
  	float:right;
    color:#69cffa;
  }
  .location{
	float:left;

  }
 .right{
 float:right;
 }
 .text{
  color:white;
 }
  .yyy{
  	padding-top: 1rem
  }
  .sss{
    display:inline-block;
    background-color:yellow;
    height:1.5rem;
    width:3rem;
    border-radius: 2rem;
    text-align:center;
  }
</style>
