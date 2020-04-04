<template lang="pug">
  section.stories-item(:ref="mainRef" v-if="active")

    .stories-item-project(:style="horizontalTransform")

      .stories-item-project__item(
        :style="{ width: widthStoriesBox + 'px', order: index }"
        v-for='(item, index) in items'
        :key='item.id'
        @mousedown='mousedownSlide'
        @mouseup='mouseupSlide'
        @click='getPos($event)')

        slot(name='content', :item='item')
          ._1s_Wk.E2rkU._1legF
            //picture._3YPgL._1s_Wk
            //  source._3YPgL._1s_Wk(
            //    srcset=''
            //    type='image/webp')
            //  source._3YPgL._1s_Wk(
            //    srcset=''
            //    type='image/jpeg')
            //  img._3YPgL._1s_Wk(
            //    src='')
            //picture._3vPoA
            //  img._3vPoA(src='data:image/jpeg;base64,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')

            br
            br
            br


            button(@click="activeBTN") activeBTN
            pre(style='color: #fff')
              | {{ item }}
            br
            div
              | Width: {{ window.width }},
              | Height: {{ window.height }}

</template>

<script>
export default {
  name: 'StoriesMain',
  data () {
    return {

      active: false,
      window: {
        width: 0,
        height: 0
      },
      widthStoriesBox: 1200,
    }
  },
  props: {
    items: {
      type: Array,
      require: true
    },
    code: {
      type: String,
      require: true
    },
    status: {
      type: Object,
      require: true
    }
  },
  computed: {
    mainRef () {
      return 'storiesitem_' + this.code
    },
    horizontalTransform (){

      let vm = this,
        translate3d = ''

      if(vm.status.activeSlide === 0){
        translate3d = 'translate3d(0px, 0px, 0px)'
      } else {

        let left = vm.status.activeSlide * vm.widthStoriesBox

        translate3d = 'translate3d(-' + left + 'px, 0px, 0px)'
      }

      return {
        transform: translate3d
      }
    }
  },
  methods: {
    randomInteger (min, max) {
      let rand = min + Math.random() * (max + 1 - min)
      return Math.floor(rand)
    },
    mousedownSlide () {
      this.$emit('mousedown-slide', ['x', 'y'])
    },
    mouseupSlide () {
      this.$emit('mouseup-slide', ['x', 'y'])
    },
    getPos (event) {
      const rect = this.$refs[this.mainRef].getBoundingClientRect()

      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      if (x <= (rect.width / 2)) {
        this.$emit('go-prev')
      } else if (x > (rect.width / 2)) {
        this.$emit('go-next')
      }

      //console.log(x,y, rect.width );

    },
    activeBTN () {
      console.log(this.$refs[this.mainRef])
      console.log(this.$refs[this.mainRef].clientWidth)
    },
    handleResize () {

      if (typeof window !== 'undefined') {
        this.window.width = window.innerWidth
        this.window.height = window.innerHeight

        //console.log('widthStoriesBox', this.$refs[  this.mainRef  ])

        if (typeof this.$refs[this.mainRef] !== 'undefined') {
          this.widthStoriesBox = this.$refs[this.mainRef].clientWidth
        }

      }


    }
  },
  mounted () {
    let vm = this

    this.$nextTick(() => {

      vm.active = true

      setTimeout(function () {
        vm.handleResize()
      }, 100)

    })

  },
  created () {

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize)
    }

    this.handleResize()
  },
  destroyed () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize)
    }
  }
}
</script>

<style lang="scss">

  .stories-item-project {
    transform: translate3d(-4704px, 0px, 0px);
  }

  /*

 */
  .stories-item {
    overflow: hidden;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    * {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &-project {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      will-change: transform;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;

      transition: all 1000ms cubic-bezier(0.68, 0.35, 0.15, 0.87);

      &__item {
        position: relative;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        overflow: hidden;
      }

    }


  }
</style>
