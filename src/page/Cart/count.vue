<template lang="pug">
  div
    // button.btn.btn-success(@click="decrement") -
    span {{ $store.state.count }}
    // button.btn.btn-success(@click="increment") +
</template>

<script>
  // import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      }
    }
  }

</script>
<style lang="sass">
span
  margin: 0px 20px
</style>
