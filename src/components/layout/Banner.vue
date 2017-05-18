<template lang="pug">
  #banner
    .banner-img(:style="banner_css")
</template>

<script>
export default {
  props: ['banner_data'],
  computed: {
    banner_css () {
      return {
        'background-image': "url('" + this.banner_data + "')"
      }
    }
  }
}
</script>

<style scoped lang="sass">
.banner-img
  background: no-repeat center
  height: 300px
  margin-top: 70px
  background-size: cover
</style>
