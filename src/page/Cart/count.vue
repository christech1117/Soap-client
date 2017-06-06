<template>
  <div>
    <button @click="decrement">-</button>
    {{ $store.state.count }}
    <button @click="increment">+</button>
  </div>
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
