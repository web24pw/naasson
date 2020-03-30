<template>
  <section class="yujJN _2oDbc" name="cases">
    <div class="_3Fnel">
      <div class="_2XCvR">
        <div style="display: contents;">
          <div class="_fY8m">

            <app-cases-progress-bar :items="ProjectItems"
                                    :status="status"
                                    @goPrev="goPrev"
                                    @goNext="goNext"
            ></app-cases-progress-bar>

            <app-cases-bages :items="ProjectItems" :status="status"></app-cases-bages>

            <app-cases-main :items="ProjectItems"
                            :status="status"
                            @mousedownSlide="mousedownSlide"
                            @mouseupSlide="mouseupSlide"
                            @goPrev="goPrev"
                            @goNext="goNext"

            >

              <template #default>

              </template>
            </app-cases-main>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CasesBages from '~/components/Cases/Bages.vue'
import CasesProgressBar from '~/components/Cases/ProgressBar.vue'
import CasesMain from '~/components/Cases/Main.vue'

export default {
  name: "Cases",
  data() {
    return {
      status: {
        activeSlide: 2,
        pausedSlide: false
      },
      ProjectItems: [
        {}, {},
        {}, {},
        {}, {},
        // {}, {},
        // {}, {},
        // {}, {},
        // {}, {},
      ]
    }
  },
  computed: {
    countProjectItems() {
      return this.ProjectItems.length
    }
  },
  components: {
    'app-cases-bages': CasesBages,
    'app-cases-progress-bar': CasesProgressBar,
    'app-cases-main': CasesMain
  },
  methods: {
    mousedownSlide() {
      this.status.pausedSlide = this.status.activeSlide
    },
    mouseupSlide() {
      this.status.pausedSlide = false
    },
    goNext() {

      //console.log('Next');

      if ((this.status.activeSlide + 1) === this.countProjectItems) {
        this.status.activeSlide = 0;
      } else {
        this.status.activeSlide = this.status.activeSlide + 1;
      }
      //console.log(this.status.activeSlide);

    },
    goPrev() {

      //console.log('Prev');

      if (this.status.activeSlide === 0) {
        this.status.activeSlide = this.countProjectItems - 1;
      } else {
        this.status.activeSlide = this.status.activeSlide - 1;
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


  ///


  ._32yjM {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #86878f;
  }

</style>
