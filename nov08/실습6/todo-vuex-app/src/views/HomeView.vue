<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{  }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


// 외부에서 읽을때도 ok
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    todoList() {
        return this.$store.state.todo.list
    }
  }
}
</script>
