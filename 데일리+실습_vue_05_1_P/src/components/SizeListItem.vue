<template>
  <div>
    <div>
      {{ size.name }}
      {{ size.price }}원
    </div>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
}
</script>

<style>
</style>