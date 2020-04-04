<template>

  <main>

    <div>

      <app-svg-sprite/>

      <app-header/>

      <app-cases/>

<!--      <app-how-we-work/>-->

      <app-clients/>

      <app-footer/>

    </div>

  </main>

</template>

<script>
import SVGSprite from '~/components/SVG/Sprite.vue'
import Header from '~/components/Common/Header.vue'
import Footer from '~/components/Common/Footer.vue'
import Clients from '~/components/Clients.vue'
import MainBanner from '~/components/MainBanner'
import Cases from '~/components/Cases/List/index.vue'
import HowWeWork from '~/components/HowWeWork/index.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    'app-svg-sprite': SVGSprite,
    'app-header': Header,
    'app-footer': Footer,
    'app-clients': Clients,
    'app-main-banner': MainBanner,
    'app-cases': Cases,
    'app-how-we-work': HowWeWork,
  }
}
</script>

<style>

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
