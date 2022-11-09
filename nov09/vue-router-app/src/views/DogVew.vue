<template>
  <div>
    <img v-if='imgSrc' :src="imgSrc" alt=""><br>

  </div>
</template>

<script>
export default {
  name : 'DogView',
  data() {
    return {
        imgSrc: null,
    }
  }
}
</script>

<style>

</style>