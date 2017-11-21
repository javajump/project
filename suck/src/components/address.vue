<template>
	<div class="nodataWrapper">
		<div class="back"><span class="iconfont icon-fanhui" @click="back"></span></div>
    	<section>
    		<div class='dingwei'>
    			<div class="dingwei1">当前定位城市:</div>
    			<div class="dingwei2">定位不准时请搜索</div>	
    		</div>
    		<div class="current">
    		<div>城市:{{address}}</div>
    		<div>地点:{{detail}}</div>
			<div>地名:{{kuahao}}</div>
    	    </div>
    		<div class="inputstyle"><input @keyup="find" v-model="keywor" type="text"><button type="button" @click="find">搜索</button></div>
    		
    	</section>
    	<div class="word" v-for="(item,index) in tips" v-show="index < 5" @click="getDetail(item.address, item.name)">
    	<div class="iconfont icon-location">{{item.address}}</div>
    	<div>({{item.name}})</div>
        </div>

	</div>
</template>
<script>
  import split from './split'
  export default {
    data () {
      return {
        tips: [],
        keywor: this.keyword,
        detail: '',
        kuahao: ''
      }
    },
    props: {
      address: {
        type: String
      },
      adcode: {
        type: String
      },
      keyword: {
        type: String,
        default: '银行'
      }
    },
    computed: {
    },
    mounted () {
      this.$nextTick(function () {
        this.$http.jsonp('http://restapi.amap.com/v3/assistant/inputtips', {
          params: {
            key: '071a935364fa2bf0a413b380d2501b8b',
            keywords: this.keywor,
            type: '',
            location: '',
            city: this.adcode,
            citylimit: true,
            datatype: 'all',
            output: 'json',
            callback: ''
          }
        }).then(response => {
          this.tips = response.body.tips
        }, response => {
        })
      })
    },
    components: {
      split
    },
    methods: {
      getDetail (dada, dada1) {
        this.detail = dada
        this.kuahao = dada1
      },
      back () {
        this.$router.go(-1)
      },
      find () {
        this.$nextTick(function () {
          this.$http.jsonp('http://restapi.amap.com/v3/assistant/inputtips', {
            params: {
              key: '071a935364fa2bf0a413b380d2501b8b',
              keywords: this.keywor,
              type: '',
              location: '',
              city: this.adcode,
              citylimit: true,
              datatype: 'all',
              output: 'json',
              callback: ''
            }
          }).then(response => {
            this.tips = response.body.tips
          })
        })
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
	}
	span{
		display:inline-block;
	}
	.back{
		background-color: purple;
		height:3rem;
	}
	.icon-fanhui{
	   margin-top:6px;
       font-size:2rem; 
       color:white;
	}
	.dingwei{
		display:flex;
		font-size: 14px;
		font-weight: 700;
		margin-top:0.8rem;
		margin-bottom:0.6rem;
	}
	.dingwei1{
		flex:0 0 7rem;
		margin-left:0.4rem;

	}
	.dingwei2{
		flex:1;
		margin-left:0.6rem;
	}
	.current{
		margin-left:1rem;
		margin-bottom:6px;
		font-size:16px;
		font-weight: 700;
		color:purple;
	}
	.inputstyle{
		text-align: center;
		padding-bottom: 1rem;
		padding-top: 1rem;
		background-color: purple
	}
	input{
		width:60%;
		height:30px;
		text-align: center;
		font-size:1rem;
		margin:0;
		padding:0;
	}
	button{
		height:35px;
		width:5rem;
		background-color: green;
		margin:0;
		padding:0;
		border-color: green
	}
	.hotCity{
		height:3rem;
		line-height:3rem;
		margin-left:1rem;

	}
	.listHeight{
		border-top:1px solid #1d82fe;
		height:4rem;
	}
	.hotCityList{
		display:flex;
				padding-top:0.5rem;
	}
	.hotCityItem{
		flex:1;
		text-align:center;
		color:#1d82fe
	}
	.word{
		font-size:0.9rem;
		padding:6px;
		background-color: #EEFCFF;
		border:1px solid black;
	}
.icon-location{
	color:#1d82fe;
}
</style>