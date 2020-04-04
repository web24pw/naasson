<template lang="pug">
  section
    //pre
    //  | {{ projects }}

    app-case(
      v-for="(item, index) in projects"
      :key="index"
      :data="item")

</template>

<script>
import Case from '~/components/Cases/Item/index.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'CasesList',
  data () {
    return {
      items: [
        {
          name: 'test',
          items: [{}, {}, {}]
        },
        {
          name: 'test',
          items: [{}, {}, {}]
        },
        {
          name: 'test',
          items: [{}, {}, {}]
        },
        {
          name: 'test',
          items: [{}, {}, {}]
        },
        {
          name: 'test',
          items: [{}, {}, {}]
        }
      ]
    }
  },
  components: {
    'app-case': Case
  },
  computed: {
    ...mapGetters({
      projects: 'api/projects'
    })
  },
  mounted () {
    //console.log('bidule', this.bidule)
    this.callProjectsFromAppLogic()
  },
  methods: {
    ...mapActions({
      callProjectsFromAppLogic: 'applogic/callProjectsFromAppLogic'
      //add: 'add'
    })
  }
}
</script>

<style lang="scss">
</style>
