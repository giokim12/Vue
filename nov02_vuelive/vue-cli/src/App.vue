<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 3. 보여주기 -->
    <MyComponent/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
// 자바스크립트 코드가 작성되는 곳
// 컴포넌트 정보, 데이터, 메서드 등 vue 인스턴스를 구성하는 대부분이 작성 됨
<script>
import HelloWorld from './components/HelloWorld.vue'
// 1. 불러오기
// import MyComponent from '.components/MyComponent.vue'
import MyComponent from '@/components/MyComponent' //똑같은 뜻

export default {
  name: 'App',
  components: {
    HelloWorld, 
    // 2. 등록하기
    MyComponent,
  }
}
</script>
// css 스타일

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
