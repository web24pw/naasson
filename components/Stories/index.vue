<template lang="pug">

  ._3Fnel
    ._2XCvR
      div(style="display: contents")
        ._fY8m

          app-progress-bar(
            :items="items"
            :status="status"
            @go-to="goTo"
            @go-prev="goPrev"
            @go-next="goNext")

          app-bages(
            :items="items"
            :status="status")

          app-main(
            :code="code"
            :items="items"
            :status="status"
            @mousedown-slide="mousedownSlide"
            @mouseup-slide="mouseupSlide"
            @go-prev="goPrev"
            @go-next="goNext")

            template(#default="")

</template>

<script>
import Bages from '~/components/Stories/Bages.vue'
import ProgressBar from '~/components/Stories/ProgressBar.vue'
import Main from '~/components/Stories/Main.vue'

export default {
  props: {
    items: {
      type: Array,
      require: true
    },
    code: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      status: {
        activeSlide: 0,
        pausedSlide: false
      }
    }
  },
  computed: {
    countItems () {
      return this.listItems.length
    },
    listItems () {
      return this.items
    }
  },
  components: {
    'app-bages': Bages,
    'app-progress-bar': ProgressBar,
    'app-main': Main
  },
  methods: {
    mousedownSlide () {
      this.status.pausedSlide = this.status.activeSlide
    },
    mouseupSlide () {
      this.status.pausedSlide = false
    },
    goTo (index) {
      this.status.activeSlide = index
    },
    goNext () {

      //console.log('Next');

      if ((this.status.activeSlide + 1) === this.countItems) {
        this.status.activeSlide = 0
      } else {
        this.status.activeSlide = this.status.activeSlide + 1
      }
      //console.log(this.status.activeSlide);

    },
    goPrev () {

      //console.log('Prev');

      if (this.status.activeSlide === 0) {
        this.status.activeSlide = this.countItems - 1
      } else {
        this.status.activeSlide = this.status.activeSlide - 1
      }
      //console.log(this.status.activeSlide);


    }
  }
}
</script>

<style lang="scss">

  ._fY8m {
    cursor: -webkit-grab;
    cursor: grab;
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
    background-color: #1d1e21;
    background-color: var(--darkSecondary);

    border-radius: 6px;
    overflow: hidden;
    position: relative
  }

  ._fY8m:hover .WZVeO {
    display: block !important;
  }

  ._fY8m:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  ._fY8m {

    -webkit-box-flex: 1;

    -ms-flex-positive: 1;

    flex-grow: 1;
    width: 100%;
    height: 768px
  }

  @media (max-width: 1920px) {
    ._fY8m {
      height: 40vw
    }
  }

  @media (max-width: 1024px) {
    ._fY8m {
      height: 60vw
    }
  }

  @media (max-width: 600px) {
    ._fY8m {
      height: 130vw
    }
  }

  ._32yjM {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #86878f;
  }

</style>
