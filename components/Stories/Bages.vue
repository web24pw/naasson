<template lang="pug">
  ._3IeQK
    svg.X_xqR(width='30px' height='30px')
      use(xlink:href='#icon-SliderAmountIcon')
    span._3NTCg {{ countItems }}
</template>

<script>
export default {
  name: "StoriesBages",
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
    countItems () {
      return this.items.length
    }
  }
}
</script>

<style scoped>
  /*
    bage
     */
  ._3IeQK {
    z-index: 2;
    position: absolute;
    bottom: 12px;
    right: 16px;
  }

  ._3NTCg {
    position: absolute;
    color: #e0d7ce;
    opacity: 0.5;
    width: 25px;
    top: 4px;
    left: 0;
    font-size: 15px;
    line-height: 10px;
    font-family: 'Aeroport-light', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', sans-serif;
    font-family: var(--fontFamilyAeroport);
    font-weight: 200;
    text-align: center;
  }

</style>
