<template>
  <div class="progress-bar">

    <div v-for="(item, index) in items" :key="item.id"
         :class="['progress-bar__items', {
          'progress-bar__items--active': index < status.activeSlide,
          'progress-bar__items--paused': index === status.pausedSlide,
         }]"
    >
      <div v-if="startAnimate(index)" :ref="'animateline_' + index" class="animate-line" style="animation-duration: 5000ms;"></div>
    </div>

    <div class="progress-bar__pointer-line"></div>
  </div>
</template>

<script>
export default {
  name: "CasesProgressBar",
  props: {
    items: {
      type: Array,
      require: true
    },
    status: {
      type: Object,
      require: true
    }
  },
  computed: {
    startAnimate (){


      return index => {
        console.log(1);

        if(index === this.status.activeSlide){



          this.callbackStartAnimate(index)

          return true








        } else {
          return false
        }

        //return `${salut} ${this.firstName} ${this.lastName}`;
      }




    }
  },
  methods: {
    callbackStartAnimate (index){

      let vm = this

      setTimeout(function () {
        let item = vm.$refs['animateline_' + index];

        if(typeof item == 'undefined') return

        if(typeof item[0] == 'undefined') return

        console.log(typeof item);
        console.log(item);

        function animationEndCallback (e) {
          item[0].removeEventListener('animationend', animationEndCallback);
          vm.$emit('goNext')
        }
        item[0].addEventListener('animationend', animationEndCallback);
      }, 10)

    }
  }
}
</script>

<style lang="scss">

  .progress-bar {

    z-index: 100;
    width: calc(100% - 40px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    left: 24px;
    padding: 16px 0;

    @media (max-width: 600px) {
      width: calc(100% - 24px);
      left: 16px
    }


    &__items {
      height: 2px;
      border-radius: 4px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      background-color: rgba(102, 103, 120, 1);
      margin-right: 8px;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 0px;
      flex: 1 1 0;
      position: relative;
      overflow: hidden;

      @media (max-width: 600px) {
        margin-right: 4px;
      }

      &--active {
        background-color: rgba(191, 191, 191, 1);
      }

      .animate-line {
        display: block;
        content: " ";
        position: absolute;
        background-color: rgba(191, 191, 191, 1);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-animation: _3o33W 5s linear;
        animation: _3o33W 5s linear;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        will-change: transform;
      }

      &--paused .animate-line {
        -webkit-animation-play-state: paused;
        animation-play-state: paused;
      }

    }

    &__pointer-line {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
      z-index: 101;
    }

  }

  @-webkit-keyframes _3o33W {
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

</style>
