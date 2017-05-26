<template>
  <div>
    <h1>vuex 测试</h1>
    Clicked: {{ count }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  // import { mapGetters, mapActions } from 'vuex'

  export default {
    methods: {
      increment () {
        return this.$store.dispatch('increment')
      },
      decrement () {
        return this.$store.dispatch('decrement')
      }
    }
  }

</script>
