<template>
  <div>
    <div>
      <div>
        <span>{{ option.type }}</span>
        <span>
          <button @click="increase"> + </button>
          {{ option.count }}
          <button @click="decrease"> - </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.dispatch('increaseOption', this.option)
    },
    decrease() {
      this.$store.dispatch('decreaseOption', this.option)
    },
  },
}
</script>

<style>
</style>