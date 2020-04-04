<template lang="pug">
  section
    h1 как мы работаем
    pre
      | {{ items }}

      app-stories(:items="items")

</template>

<script>
import Stories from '~/components/Stories/index.vue'
//import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HowWeWork',
  data () {
    return {
      items: [{}, {}, {}]
    }
  },
  components: {
    'app-stories': Stories
  },
  computed: {
    //...mapGetters({
    //  projects: 'api/projects'
    //})
  },
  mounted () {
    //console.log('bidule', this.bidule)
    //this.callProjectsFromAppLogic()
  },
  methods: {
    //...mapActions({
    //  callProjectsFromAppLogic: 'applogic/callProjectsFromAppLogic'
    //  //add: 'add'
    //})
  }
}
</script>

<style lang="scss">
</style>
