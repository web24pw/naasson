<template src="./template.pug" lang="pug"></template>

<script>
export default {
  name: "MainBanner"
}
</script>

<style scoped lang="scss">
  ._3GoE- {
    white-space: pre-wrap;
    font-size: 80px;
    line-height: 80px;
    font-family: var(--fontFamilyAeroport);
    font-weight: 200;
    color: var(--beigePrimary);
    margin-bottom: 48px;
    margin-right: 40px; }

  @media (max-width: 1920px) {
    ._3GoE- {
      font-size: calc(40px + 40 * ((100vw - 768px) / 1152));
      line-height: calc(40px + 40 * ((100vw - 768px) / 1152)); } }

  @media (max-width: 1460px) {
    ._3GoE- {
      font-size: calc(56px + 24 * ((100vw - 768px) / 672));
      line-height: calc(56px + 24 * ((100vw - 768px) / 672)); } }

  @media (max-width: 600px) {
    ._3GoE- {
      font-size: calc(36px + 20 * ((100vw - 320px) / 280));
      line-height: calc(36px + 20 * ((100vw - 320px) / 280));
      margin-bottom: 28px; } }


</style>
