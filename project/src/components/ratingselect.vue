<template>
  <div>
    <div class="rating-type">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1,$event)" class="block negative" :class="{'active1':selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div class="switch">
      <div @click="toggleContent" :class="{'on':onlyContent}" class="icon-dui iconfont"></div>
      <span>只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  const POSITIVE = 0
  const NEGATIVE = 1
  const ALL = 2

  export default {
    computed: {
      positives () {
        return this.ratings.filter((theitem) => {
          return theitem.rateType === POSITIVE
        })
      },
      negatives () {
        return this.ratings.filter((theitem) => {
          return theitem.rateType === NEGATIVE
        })
      }
    },
    methods: {
      select (type, event) {
        if (!event._constructed) {
          return
        }
        this.$emit('select', type)
      },
      toggleContent (event) {
        if (!event._constructed) {
          return
        }
        this.$emit('toggle')
      }
    },
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: true
      },
      desc: {
        type: Object,
        default () {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    }
  }
</script>

<style scoped>
.rating-type{
  padding: 18px 0;
  margin: 0 18px;
}
.block{
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  line-height: 16px;
  border-radius: 1px;
  font-size: 12px;
  color: rgb(77, 85, 93);
}
.count{
  margin-left: 2px;
  font-size: 8px;
}
.positive{
  background: rgba(0, 160, 220, 0.2)
}
.negative{
  background: rgba(77, 85, 93, 0.2)
}
.active{
  background: rgb(0, 160, 220);
  color: #fff
}
.active1{
  background: rgb(77, 85, 93);
  color: #fff
}
.switch{
  padding: 12px 18px;
  line-height: 24px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  color: rgb(147, 153, 159);
}
.on{
color: green
  }
  .icon-dui{
    font-size:1.3rem;
    display:inline-block;
  }
</style>