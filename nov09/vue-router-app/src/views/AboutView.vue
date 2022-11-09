<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to= "{name: 'home'}"> 홈으로가는라우터링크 </router-link>
    <button @click = "toHome">홈으로가는버튼</button>
    <input 
      type="text"
      v-model = 'inputData'
      @keyup.enter="gotoHello"

    >
  </div>
</template>

<script>

export default {
  name: 'AboutView',
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    toHome() {
      this.$router.push({ name : 'home'})
    },
    gotoHello() {
      this.$router.push({ name: 'hello', params: { userName: this.inputData }})
    }
  }
}
</script>
