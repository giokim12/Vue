<template>
  <div class="size-list">
    <h1>2. 사이즈를 고르세요.</h1>
    <SizeListItem   
      v-for="size in sizeList"
      :key='size'
      :size='size'
    />
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem'

export default {
  name: 'SizeList',
  // methods: {
  //   onSelectMenu: function () {},
  // },
  components: {
    SizeListItem,
  },
  computed: {
    sizeList () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
</style>