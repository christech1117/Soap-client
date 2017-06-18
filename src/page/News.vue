<template lang="pug">
#news
  banner(:banner_data="banner_img")
  .container
    .section-header
      h1
        i.fa.fa-newspaper-o(aria-hidden='true')
        | 最新消息
    ol.breadcrumb
      li
        router-link(:to="{ path: '/' }")
          i.fa.fa-home(aria-hidden='true')
      li.active 最新消息
    .list-group(v-for="one_new in news")
      router-link.list-group-item(:to="{ path: '/' }")
        ul
          li {{ one_new.create_at }}
          li {{ one_new.title }}
</template>

<script>
import Banner from '@/components/layout/Banner'

export default {
  components: { Banner },
  data () {
    return {
      banner_img: 'http://demo.mor-e.com.tw/demo/yatia/images/main/be27663b9469cd4b6f7a0110907aa275.jpg',
      news: []
    }
  },
  mounted () {
    this.axios.get('http://localhost:3000/news').then(response => {
      console.log(response.data)
      this.news = response.data
    })
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

#news
  font-weight: 400
  animation: fadeIn 1s ease both

</style>
