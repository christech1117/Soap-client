<template lang="pug">
  #home
    banner(:banner_data="banner_img")
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import Banner from '@/components/layout/Banner'

export default {
  components: { NavBar, Banner },
  data () {
    return {
      banner_img: 'http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg'
    }
  }
}
</script>

<style scoped lang="sass">
</style>
