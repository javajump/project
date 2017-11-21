<template>
  <div class="wrapper">
    <div class="posit" >
        <div class="fle">
          <div class="iconfont icon-waimai1">首页</div>
        </div>
      <router-link to="/dingdan" class="fle">
          <div class="iconfont icon-dingdan">订单</div>
      </router-link> 
      <router-link to="/mydata" class="fle"> 
          <div class="iconfont icon-touxiang">我的</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.iconfont{
  color:#1d82fe;
  font-size:1.5rem;
}
.wrapper{
  background:#fff;
  position:fixed;
  left:0;
  right:0;
  bottom:0px;
}
.posit{
  display:flex;
}
.fle{
  flex:1;
  text-align: center;
  text-decoration: none;
}

</style>
