<template>
  <img alt="Vue logo" src="./assets/logo.png">
    <!-- <div v-for="i in products" :key='i'>{{i}}</div>
    <div @click="increase">{{신고수}}</div> -->
    <!-- <h3>{{ products[0] }}</h3> -->
    <!-- <button @click="신고수[0]++">{{신고수[0]}}</button>
    <h3>{{ products[1] }}</h3>
    <button @click="신고수[1]++">{{신고수[1]}}</button>
    <h3>{{ products[2] }}</h3>
    <button @click="신고수[2]++">{{신고수[2]}}</button> -->
    <!-- <button @click="모달창상태=1"> 모달창열어줘 </button>
    <div class="black-bg" v-if="모달창상태==1">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지내용임</p>
      </div>
    </div> -->

    {{ 원룸들 }}
</template>

<script>
import i from "./assets/oneroom"

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      원룸들: i,
      모달창상태: false,
      신고수: [0, 0, 0],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  methods: {
    increase() {
      this.신고수 += 1
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

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>
