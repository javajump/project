<template>
  <div>
    <span :class="itemclass" class="staritem" v-for='itemclass in itemclasses'></span>
  </div>
</template>
<script>
export default {
  props: ['score'],
  data () {
    return {
    }
  },
  computed: {
    itemclasses () {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push('on')
      }
      if (hasDecimal) {
        result.push('half')
      }
      while (result.length < 5) {
        result.push('off')
      }
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .staritem{
  	display:inline-block;
  	width:1rem;
  	height:1rem;
 
  }
  .on{
  	background-image: url('../../static/star-on.png');
  	background-size: 1rem;
  	background-repeat: no-repeat;
  }
    .off{
  	background-image: url('../../static/star-off.png');
  	background-size: 1rem;
  	background-repeat: no-repeat;
  }
    .half{
    background-image: url('../../static/star-half.png');
    background-size: 1rem;
    background-repeat: no-repeat;
  }

</style>
