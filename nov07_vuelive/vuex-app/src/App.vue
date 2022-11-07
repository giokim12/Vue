<template>
  <div id="app">
    <h1> {{ message }}</h1>
    <h2>입력된 문자의 길이는 {{ messageLength }}</h2>
    <input 
      type="text"
      @keyup.enter = "changeMessage"
      v-model="inputData"
    >
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import { computed } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      inputData: null,
    }
    // HelloWorld
  },
  computed: {
    message() {
        return this.$store.state.message
    },
    messageLength() {
      return this.$store.getters.messageLength
    },
  },
  methods: {
    changeMessage() {
      const newMessage = this.inputData
      // this.$store.dispatch('액션 메서드 이름', 새 메시지)
      this.$store.dispatch('changeMessage', newMessage)
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
