<template lang="pug">
  section.yujJN._2oDbc(name='stories')

    div
      | Название проекта - {{ data.name }}
    br
    app-stories(:items="data.items" :code="data.code")

</template>

<script>
import Stories from '~/components/Stories/index.vue'

export default {
  name: 'Cases',
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      status: {
        activeSlide: 1,
        pausedSlide: false
      }
    }
  },
  computed: {
    countProjectItems () {
      return this.listItems.length
    },
    listItems (){
      return this.data.items
    }
  },
  components: {
    'app-stories': Stories
  },
  methods: {
    mousedownSlide () {
      this.status.pausedSlide = this.status.activeSlide
    },
    mouseupSlide () {
      this.status.pausedSlide = false
    },
    goNext () {

      //console.log('Next');

      if ((this.status.activeSlide + 1) === this.countProjectItems) {
        this.status.activeSlide = 0
      } else {
        this.status.activeSlide = this.status.activeSlide + 1
      }
      //console.log(this.status.activeSlide);

    },
    goPrev () {

      //console.log('Prev');

      if (this.status.activeSlide === 0) {
        this.status.activeSlide = this.countProjectItems - 1
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
